import { View, Text, StyleSheet } from "react-native";
import { CueHint } from "../types/cue";
import { colors } from "../constants/colors";
import { PrimaryButton } from "./PrimaryButton";

type HintCardProps = {
  hint: CueHint;
  onReplayAudio?: () => void;
};

export function HintCard({ hint, onReplayAudio }: HintCardProps) {
  const confidencePercent = Math.round(hint.confidence * 100);

  return (
    <View style={styles.card}>
      <Text style={styles.badge}>Yeni ipucu 🎯</Text>
      <Text style={styles.phrase}>“{hint.detectedPhrase}”</Text>

      <View style={styles.metaRow}><Text style={styles.metaLabel}>Kaynak</Text><Text style={styles.metaValue}>{hint.source ?? "Bilinmiyor"}</Text></View>
      <View style={styles.metaRow}><Text style={styles.metaLabel}>Tür</Text><Text style={styles.metaValue}>{hint.referenceType}</Text></View>
      <View style={styles.metaRow}><Text style={styles.metaLabel}>Güven</Text><Text style={styles.metaValue}>%{confidencePercent}</Text></View>

      {hint.meaning && <><Text style={styles.sectionTitle}>Anlam</Text><Text style={styles.body}>{hint.meaning}</Text></>}
      {hint.suggestedReply && <><Text style={styles.sectionTitle}>Cevap önerisi</Text><Text style={styles.reply}>“{hint.suggestedReply}”</Text></>}

      {onReplayAudio && <View style={styles.buttonWrap}><PrimaryButton title="Sesi tekrar çal" onPress={onReplayAudio} variant="secondary" /></View>}
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: colors.surface, borderColor: colors.border, borderWidth: 1, borderRadius: 24, padding: 20, gap: 10 },
  badge: { color: colors.primarySoft, fontSize: 14, fontWeight: "700" },
  phrase: { color: colors.text, fontSize: 22, fontWeight: "800", lineHeight: 30, marginBottom: 6 },
  metaRow: { flexDirection: "row", justifyContent: "space-between", gap: 12 },
  metaLabel: { color: colors.textMuted, fontSize: 14 },
  metaValue: { color: colors.text, fontSize: 14, fontWeight: "700", textAlign: "right", flex: 1 },
  sectionTitle: { color: colors.text, fontSize: 15, fontWeight: "800", marginTop: 10 },
  body: { color: colors.textMuted, fontSize: 15, lineHeight: 22 },
  reply: { color: colors.text, fontSize: 16, lineHeight: 24, fontWeight: "700" },
  buttonWrap: { marginTop: 12 },
});
