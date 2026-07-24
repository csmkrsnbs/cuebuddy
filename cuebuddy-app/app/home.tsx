import { useCallback, useRef, useState } from "react";
import { View, Text, StyleSheet, ScrollView, Pressable, ActivityIndicator, Alert } from "react-native";
import { useFocusEffect, router } from "expo-router";
import { RecordingPresets, setAudioModeAsync, useAudioRecorder } from "../src/services/audioRecordingService";
import { colors } from "../src/constants/colors";
import { PrimaryButton } from "../src/components/PrimaryButton";
import { HintCard } from "../src/components/HintCard";
import { CueHint, UserSettings } from "../src/types/cue";
import { requestMicrophonePermission } from "../src/services/permissionService";
import { transcribeAudio } from "../src/services/speechService";
import { analyzeText } from "../src/services/analysisService";
import { speakHint, stopSpeaking } from "../src/services/ttsService";
import { defaultSettings, getSettings } from "../src/storage/settingsStorage";
import { addHintToHistory } from "../src/storage/historyStorage";
import { AUDIO_CHUNK_DURATION_MS, AUDIO_PROCESSING_DELAY_MS, MIN_AUDIO_FILE_SIZE_BYTES, RECENT_TRANSCRIPT_MEMORY_SIZE } from "../src/constants/audio";
import { VAD_SAMPLE_INTERVAL_MS } from "../src/constants/vad";
import { delay } from "../src/utils/delay";
import { getAudioFileSizeBytes } from "../src/utils/audioFile";
import { isDuplicateOrSimilarTranscript, isLowValueTranscript, isTranscriptTooShort, RecentTranscript, rememberTranscript } from "../src/utils/transcript";
import { VadDecision, VadFrame } from "../src/types/vad";
import { analyzeVadFrames } from "../src/utils/vad";
import { safeGetRecorderMetering } from "../src/utils/audioMetering";

type ChunkStatus =
  | "idle"
  | "recording"
  | "skipped_silent"
  | "skipped_no_speech"
  | "transcribing"
  | "skipped_transcript"
  | "skipped_duplicate"
  | "analyzing"
  | "hint_found"
  | "no_hint"
  | "error";

type Stats = {
  recordedChunks: number;
  skippedSilent: number;
  skippedNoSpeech: number;
  transcribed: number;
  skippedTranscript: number;
  skippedDuplicate: number;
  analyzed: number;
};

export default function HomeScreen() {
  const audioRecorder = useAudioRecorder(RecordingPresets.HIGH_QUALITY);

  const [settings, setSettings] = useState<UserSettings>(defaultSettings);
  const [isAutoListening, setIsAutoListening] = useState(false);
  const [chunkStatus, setChunkStatus] = useState<ChunkStatus>("idle");
  const [latestHint, setLatestHint] = useState<CueHint | null>(null);
  const [lastTranscript, setLastTranscript] = useState<string | null>(null);
  const [chunkCount, setChunkCount] = useState(0);
  const [lastError, setLastError] = useState<string | null>(null);
  const [lastVadDecision, setLastVadDecision] = useState<VadDecision | null>(null);
  const [stats, setStats] = useState<Stats>({ recordedChunks: 0, skippedSilent: 0, skippedNoSpeech: 0, transcribed: 0, skippedTranscript: 0, skippedDuplicate: 0, analyzed: 0 });

  const shouldContinueRef = useRef(false);
  const isLoopRunningRef = useRef(false);
  const settingsRef = useRef<UserSettings>(defaultSettings);
  const latestHintRef = useRef<CueHint | null>(null);
  const recentTranscriptsRef = useRef<RecentTranscript[]>([]);
  const vadFramesRef = useRef<VadFrame[]>([]);

  useFocusEffect(
    useCallback(() => {
      let active = true;
      async function load() {
        const stored = await getSettings();
        if (active) {
          setSettings(stored);
          settingsRef.current = stored;
        }
      }
      load();
      return () => { active = false; };
    }, [])
  );

  function incrementStat(key: keyof Stats) {
    setStats((current) => ({ ...current, [key]: current[key] + 1 }));
  }

  async function handleMainButtonPress() {
    if (isAutoListening) {
      await stopAutoListening();
      return;
    }
    await startAutoListening();
  }

  async function startAutoListening() {
    try {
      const hasPermission = await requestMicrophonePermission();
      if (!hasPermission) {
        Alert.alert("Mikrofon izni gerekli", "CueBuddy’nin konuşmayı analiz edebilmesi için mikrofon izni vermen gerekiyor.");
        return;
      }

      await setAudioModeAsync({ allowsRecording: true, playsInSilentMode: true });

      recentTranscriptsRef.current = [];
      vadFramesRef.current = [];
      setLastVadDecision(null);
      setIsAutoListening(true);
      setChunkStatus("recording");
      setLastError(null);
      setLastTranscript(null);
      shouldContinueRef.current = true;

      if (!isLoopRunningRef.current) void runListeningLoop();
    } catch (error) {
      console.error(error);
      setIsAutoListening(false);
      setChunkStatus("error");
      setLastError("Dinleme başlatılamadı.");
      Alert.alert("Dinleme başlatılamadı", "Mikrofon kaydı başlatılırken bir sorun oluştu.");
    }
  }

  async function stopAutoListening() {
    shouldContinueRef.current = false;
    setIsAutoListening(false);
    setChunkStatus("idle");
    stopSpeaking();
    try { await safeStopRecorder(); } catch {}
  }

  async function runListeningLoop() {
    isLoopRunningRef.current = true;
    try {
      while (shouldContinueRef.current) {
        await recordAndProcessSingleChunk();
        if (shouldContinueRef.current) await delay(AUDIO_PROCESSING_DELAY_MS);
      }
    } finally {
      isLoopRunningRef.current = false;
      setChunkStatus("idle");
      setIsAutoListening(false);
    }
  }

  async function recordAndProcessSingleChunk() {
    try {
      setChunkStatus("recording");
      setLastError(null);
      vadFramesRef.current = [];

      await audioRecorder.prepareToRecordAsync({ ...RecordingPresets.HIGH_QUALITY, isMeteringEnabled: true } as any);
      audioRecorder.record();
      await collectVadFramesForCurrentChunk();

      if (!shouldContinueRef.current) {
        await safeStopRecorder();
        return;
      }

      await safeStopRecorder();
      const uri = audioRecorder.uri;
      if (!uri) throw new Error("Ses kayıt URI'si bulunamadı.");

      setChunkCount((current) => current + 1);
      incrementStat("recordedChunks");

      const vadDecision = analyzeVadFrames(vadFramesRef.current);
      setLastVadDecision(vadDecision);
      if (!vadDecision.hasSpeech) {
        incrementStat("skippedNoSpeech");
        setChunkStatus("skipped_no_speech");
        return;
      }

      const fileSizeBytes = await getAudioFileSizeBytes(uri);
      if (fileSizeBytes < MIN_AUDIO_FILE_SIZE_BYTES) {
        incrementStat("skippedSilent");
        setChunkStatus("skipped_silent");
        return;
      }

      setChunkStatus("transcribing");
      const transcription = await transcribeAudio(uri, { mode: "api" });
      incrementStat("transcribed");
      const transcript = transcription.text.trim();
      setLastTranscript(transcript);

      if (!transcript || isTranscriptTooShort(transcript) || isLowValueTranscript(transcript)) {
        incrementStat("skippedTranscript");
        setChunkStatus("skipped_transcript");
        return;
      }

      if (isDuplicateOrSimilarTranscript(transcript, recentTranscriptsRef.current)) {
        incrementStat("skippedDuplicate");
        setChunkStatus("skipped_duplicate");
        return;
      }

      recentTranscriptsRef.current = rememberTranscript(transcript, recentTranscriptsRef.current, RECENT_TRANSCRIPT_MEMORY_SIZE);
      if (!shouldContinueRef.current) return;

      setChunkStatus("analyzing");
      incrementStat("analyzed");
      const activeSettings = settingsRef.current;
      const hint = await analyzeText(
        { text: transcript, language: activeSettings.language, mode: activeSettings.mode, recentContext: recentTranscriptsRef.current.slice(1, 4).map((item) => item.text) },
        { mode: "api" }
      );

      if (!hint || hint.confidence < activeSettings.confidenceThreshold) {
        setLatestHint(null);
        latestHintRef.current = null;
        setChunkStatus("no_hint");
        return;
      }

      if (isLikelyDuplicateHint(hint, latestHintRef.current)) {
        setChunkStatus("hint_found");
        return;
      }

      setLatestHint(hint);
      latestHintRef.current = hint;
      setChunkStatus("hint_found");

      if (activeSettings.saveHistory && !activeSettings.privacyMode) await addHintToHistory(hint);
      if (activeSettings.alertType === "audio_visual" && hint.shortAudioHint) await speakHint(hint.shortAudioHint, { language: activeSettings.language });
    } catch (error) {
      console.error("Chunk processing error:", error);
      setChunkStatus("error");
      setLastError("Bu parça işlenemedi. Dinleme devam ediyor.");
      await delay(500);
    }
  }

  async function collectVadFramesForCurrentChunk() {
    const startedAt = Date.now();
    while (Date.now() - startedAt < AUDIO_CHUNK_DURATION_MS) {
      if (!shouldContinueRef.current) return;
      const db = await safeGetRecorderMetering(audioRecorder);
      if (db !== null) vadFramesRef.current.push({ timestampMs: Date.now() - startedAt, db });
      await delay(VAD_SAMPLE_INTERVAL_MS);
    }
  }

  async function safeStopRecorder() {
    try { await audioRecorder.stop(); } catch (error) { console.warn("Recorder stop ignored:", error); }
  }

  function isLikelyDuplicateHint(nextHint: CueHint, previousHint: CueHint | null): boolean {
    if (!previousHint) return false;
    const samePhrase = nextHint.detectedPhrase.trim().toLowerCase() === previousHint.detectedPhrase.trim().toLowerCase();
    const sameSource = (nextHint.source ?? "").trim().toLowerCase() === (previousHint.source ?? "").trim().toLowerCase();
    const withinTenSeconds = Math.abs(new Date(nextHint.createdAt).getTime() - new Date(previousHint.createdAt).getTime()) < 10_000;
    return samePhrase && sameSource && withinTenSeconds;
  }

  const statusLabel = getStatusLabel(chunkStatus);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <View><Text style={styles.appName}>CueBuddy</Text><Text style={styles.subtitle}>{isAutoListening ? "Otomatik dinleme açık" : "Dinleme kapalı"}</Text></View>
        <Pressable onPress={() => router.push("/settings")} style={styles.iconButton}><Text style={styles.iconButtonText}>⚙️</Text></Pressable>
      </View>

      <View style={styles.settingsStrip}><Text style={styles.settingsStripText}>Mod: {settings.mode} · Eşik: %{Math.round(settings.confidenceThreshold * 100)} · Geçmiş: {settings.saveHistory && !settings.privacyMode ? "Açık" : "Kapalı"}</Text></View>

      <View style={styles.listenPanel}>
        <Text style={styles.headphones}>🎧</Text>
        <Text style={styles.listenTitle}>{statusLabel.title}</Text>
        <Text style={styles.listenBody}>{statusLabel.description}</Text>
        <Text style={styles.chunkText}>Chunk: {chunkCount} · Süre: {AUDIO_CHUNK_DURATION_MS / 1000} sn</Text>
        {chunkStatus === "recording" || chunkStatus === "transcribing" || chunkStatus === "analyzing" ? <ActivityIndicator /> : null}
        <PrimaryButton title={isAutoListening ? "Dinlemeyi Durdur" : "Dinlemeyi Başlat"} onPress={handleMainButtonPress} variant={isAutoListening ? "danger" : "primary"} />
      </View>

      <View style={styles.statsBox}>
        <Text style={styles.statsText}>Kayıt: {stats.recordedChunks} · STT: {stats.transcribed} · AI: {stats.analyzed}</Text>
        <Text style={styles.statsMuted}>Atlanan: konuşma yok {stats.skippedNoSpeech}, sessiz {stats.skippedSilent}, kısa {stats.skippedTranscript}, benzer {stats.skippedDuplicate}</Text>
      </View>

      {lastVadDecision && <View style={styles.vadBox}><Text style={styles.vadTitle}>VAD</Text><Text style={styles.vadText}>Karar: {lastVadDecision.hasSpeech ? "Konuşma var" : "Konuşma yok"} · Sebep: {lastVadDecision.reason}</Text><Text style={styles.vadMuted}>Avg: {formatDb(lastVadDecision.averageDb)} · Peak: {formatDb(lastVadDecision.peakDb)} · Ratio: {formatRatio(lastVadDecision.speechFrameRatio)} · Frames: {lastVadDecision.frameCount}</Text></View>}
      {lastError && <View style={styles.errorBox}><Text style={styles.errorText}>{lastError}</Text></View>}
      {lastTranscript && <View style={styles.transcriptBox}><Text style={styles.transcriptLabel}>Son duyulan</Text><Text style={styles.transcriptText}>“{lastTranscript}”</Text></View>}

      <View style={styles.actions}><PrimaryButton title="Geçmiş" onPress={() => router.push("/history")} variant="secondary" /></View>
      {latestHint ? <HintCard hint={latestHint} onReplayAudio={() => { if (settings.alertType !== "silent") speakHint(latestHint.shortAudioHint, { language: settings.language }); }} /> : <View style={styles.emptyCard}><Text style={styles.emptyTitle}>Henüz gösterilecek ipucu yok</Text><Text style={styles.emptyBody}>CueBuddy 5 saniyelik parçaları dinliyor. Gönderme, şaka veya cevap ipucu yakalanırsa kart burada görünecek.</Text></View>}
    </ScrollView>
  );
}

function getStatusLabel(status: ChunkStatus): { title: string; description: string } {
  switch (status) {
    case "recording": return { title: "Dinleniyor", description: "5 saniyelik konuşma parçası kaydediliyor." };
    case "skipped_no_speech": return { title: "Konuşma algılanmadı", description: "Ses seviyesi konuşma eşiğinin altında kaldı; backend’e gönderilmedi." };
    case "skipped_silent": return { title: "Sessiz parça atlandı", description: "Ses dosyası çok küçük olduğu için backend’e gönderilmedi." };
    case "transcribing": return { title: "Yazıya çevriliyor", description: "Ses parçası metne dönüştürülüyor." };
    case "skipped_transcript": return { title: "Kısa metin atlandı", description: "Transcript çok kısa veya düşük değerli olduğu için analiz edilmedi." };
    case "skipped_duplicate": return { title: "Benzer metin atlandı", description: "Bu ifade yakın zamanda işlendiği için tekrar analiz edilmedi." };
    case "analyzing": return { title: "Analiz ediliyor", description: "Metindeki gönderme, şaka veya sosyal ipucu aranıyor." };
    case "hint_found": return { title: "Gönderme yakalandı", description: "Anlamlı bir bağlam ipucu bulundu." };
    case "no_hint": return { title: "İpucu yok", description: "Bu parçada güvenilir bir gönderme veya sosyal ipucu bulunmadı." };
    case "error": return { title: "Parça işlenemedi", description: "Bir hata oldu ama dinleme döngüsü devam edebilir." };
    default: return { title: "Hazır", description: "Dinlemeyi başlatınca CueBuddy otomatik parçalar alır." };
  }
}

function formatDb(value: number | null): string { return value === null ? "-" : `${value.toFixed(1)} dB`; }
function formatRatio(value: number | null): string { return value === null ? "-" : `${Math.round(value * 100)}%`; }

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: { padding: 24, paddingTop: 64, gap: 20 },
  header: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  appName: { color: colors.text, fontSize: 32, fontWeight: "900" },
  subtitle: { color: colors.textMuted, fontSize: 15, marginTop: 4 },
  iconButton: { backgroundColor: colors.surface, borderRadius: 16, padding: 12 },
  iconButtonText: { fontSize: 22 },
  settingsStrip: { backgroundColor: colors.surfaceSoft, borderColor: colors.border, borderWidth: 1, borderRadius: 16, padding: 12 },
  settingsStripText: { color: colors.textMuted, fontSize: 13, fontWeight: "700" },
  listenPanel: { backgroundColor: colors.surface, borderColor: colors.border, borderWidth: 1, borderRadius: 28, padding: 24, alignItems: "center", gap: 14 },
  headphones: { fontSize: 52 },
  listenTitle: { color: colors.text, fontSize: 24, fontWeight: "900" },
  listenBody: { color: colors.textMuted, fontSize: 15, textAlign: "center", lineHeight: 22, marginBottom: 4 },
  chunkText: { color: colors.primarySoft, fontSize: 13, fontWeight: "800" },
  statsBox: { backgroundColor: colors.surfaceSoft, borderColor: colors.border, borderWidth: 1, borderRadius: 16, padding: 12 },
  statsText: { color: colors.text, fontSize: 13, fontWeight: "800" },
  statsMuted: { color: colors.textMuted, fontSize: 12, marginTop: 4, lineHeight: 18 },
  vadBox: { backgroundColor: colors.surfaceSoft, borderColor: colors.border, borderWidth: 1, borderRadius: 16, padding: 12 },
  vadTitle: { color: colors.primarySoft, fontSize: 13, fontWeight: "900", marginBottom: 4 },
  vadText: { color: colors.text, fontSize: 13, fontWeight: "800" },
  vadMuted: { color: colors.textMuted, fontSize: 12, marginTop: 4, lineHeight: 18 },
  transcriptBox: { backgroundColor: colors.surface, borderColor: colors.border, borderWidth: 1, borderRadius: 20, padding: 16 },
  transcriptLabel: { color: colors.primarySoft, fontSize: 14, fontWeight: "800", marginBottom: 6 },
  transcriptText: { color: colors.text, fontSize: 18, fontWeight: "800", lineHeight: 26 },
  actions: { gap: 12 },
  emptyCard: { backgroundColor: colors.surface, borderColor: colors.border, borderWidth: 1, borderRadius: 24, padding: 20 },
  emptyTitle: { color: colors.text, fontSize: 20, fontWeight: "900", marginBottom: 8 },
  emptyBody: { color: colors.textMuted, fontSize: 15, lineHeight: 22 },
  errorBox: { backgroundColor: colors.surface, borderColor: colors.danger, borderWidth: 1, borderRadius: 18, padding: 14 },
  errorText: { color: colors.danger, fontSize: 14, fontWeight: "700" },
});
