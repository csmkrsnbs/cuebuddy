import { useEffect, useState } from "react";
import { ActivityIndicator, ScrollView, StyleSheet, Switch, Text, View } from "react-native";
import { colors } from "../src/constants/colors";
import { OptionChips } from "../src/components/OptionChips";
import { CueAlertType, CueConfidenceLevel, CueLanguage, CueMode, UserSettings } from "../src/types/cue";
import { defaultSettings, getSettings, labelForAlertType, labelForConfidenceLevel, labelForLanguage, labelForMode, thresholdFromLevel, updateSettings } from "../src/storage/settingsStorage";

export default function SettingsScreen() {
  const [settings, setSettings] = useState<UserSettings>(defaultSettings);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => { loadSettings(); }, []);

  async function loadSettings() {
    const stored = await getSettings();
    setSettings(stored);
    setIsLoading(false);
  }

  async function patchSettings(patch: Partial<UserSettings>) {
    const nextPatch = { ...patch };
    if (patch.confidenceLevel) nextPatch.confidenceThreshold = thresholdFromLevel(patch.confidenceLevel);
    const next = await updateSettings(nextPatch);
    setSettings(next);
  }

  if (isLoading) return <View style={styles.loadingContainer}><ActivityIndicator /></View>;

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Ayarlar</Text>
      <View style={styles.card}>
        <SettingBlock title="Dil" subtitle={`Seçili: ${labelForLanguage(settings.language)}`}>
          <OptionChips<CueLanguage> value={settings.language} onChange={(language) => patchSettings({ language })} options={[{ label: "Türkçe", value: "tr" }, { label: "English", value: "en" }]} />
        </SettingBlock>
        <Divider />
        <SettingBlock title="Mod" subtitle={`Seçili: ${labelForMode(settings.mode)}`}>
          <OptionChips<CueMode> value={settings.mode} onChange={(mode) => patchSettings({ mode })} options={[{ label: "Sosyal", value: "social" }, { label: "Film/Dizi", value: "movie_series" }, { label: "Oyun", value: "game" }, { label: "İş", value: "business" }]} />
        </SettingBlock>
        <Divider />
        <SettingBlock title="Uyarı tipi" subtitle={`Seçili: ${labelForAlertType(settings.alertType)}`}>
          <OptionChips<CueAlertType> value={settings.alertType} onChange={(alertType) => patchSettings({ alertType })} options={[{ label: "Sesli + Görsel", value: "audio_visual" }, { label: "Görsel", value: "visual" }, { label: "Titreşim", value: "vibration" }, { label: "Sessiz", value: "silent" }]} />
        </SettingBlock>
        <Divider />
        <SettingBlock title="Güven eşiği" subtitle={`Seçili: ${labelForConfidenceLevel(settings.confidenceLevel)} — ${Math.round(settings.confidenceThreshold * 100)}%`}>
          <OptionChips<CueConfidenceLevel> value={settings.confidenceLevel} onChange={(confidenceLevel) => patchSettings({ confidenceLevel, confidenceThreshold: thresholdFromLevel(confidenceLevel) })} options={[{ label: "Düşük", value: "low" }, { label: "Orta", value: "medium" }, { label: "Yüksek", value: "high" }]} />
        </SettingBlock>
        <Divider />
        <ToggleRow title="Gizlilik modu" subtitle="Açıkken geçmiş kaydı otomatik kapanır." value={settings.privacyMode} onValueChange={(privacyMode) => patchSettings({ privacyMode, saveHistory: privacyMode ? false : settings.saveHistory })} />
        <Divider />
        <ToggleRow title="Geçmişi kaydet" subtitle={settings.privacyMode ? "Gizlilik modu açıkken devre dışıdır." : "Yakalanan ipuçlarını cihazda saklar."} value={settings.saveHistory} disabled={settings.privacyMode} onValueChange={(saveHistory) => patchSettings({ saveHistory })} />
      </View>
    </ScrollView>
  );
}

function SettingBlock({ title, subtitle, children }: { title: string; subtitle: string; children: React.ReactNode }) {
  return <View style={styles.block}><Text style={styles.blockTitle}>{title}</Text><Text style={styles.blockSubtitle}>{subtitle}</Text><View style={styles.blockContent}>{children}</View></View>;
}

function ToggleRow({ title, subtitle, value, disabled, onValueChange }: { title: string; subtitle: string; value: boolean; disabled?: boolean; onValueChange: (value: boolean) => void }) {
  return <View style={styles.toggleRow}><View style={styles.toggleTextWrap}><Text style={styles.blockTitle}>{title}</Text><Text style={styles.blockSubtitle}>{subtitle}</Text></View><Switch value={value} disabled={disabled} onValueChange={onValueChange} trackColor={{ false: colors.surfaceSoft, true: colors.primary }} thumbColor={colors.text} /></View>;
}

function Divider() { return <View style={styles.divider} />; }

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: { padding: 24 },
  loadingContainer: { flex: 1, backgroundColor: colors.background, alignItems: "center", justifyContent: "center" },
  title: { color: colors.text, fontSize: 30, fontWeight: "900", marginBottom: 24 },
  card: { backgroundColor: colors.surface, borderColor: colors.border, borderWidth: 1, borderRadius: 24, overflow: "hidden" },
  block: { padding: 18 },
  blockTitle: { color: colors.text, fontSize: 16, fontWeight: "800" },
  blockSubtitle: { color: colors.textMuted, fontSize: 14, lineHeight: 20, marginTop: 4 },
  blockContent: { marginTop: 14 },
  divider: { height: 1, backgroundColor: colors.border },
  toggleRow: { padding: 18, flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: 16 },
  toggleTextWrap: { flex: 1 },
});
