import AsyncStorage from "@react-native-async-storage/async-storage";
import { CueAlertType, CueConfidenceLevel, CueLanguage, CueMode, UserSettings } from "../types/cue";
import { storageKeys } from "./storageKeys";

export const defaultSettings: UserSettings = {
  language: "tr",
  mode: "social",
  alertType: "audio_visual",
  saveHistory: true,
  privacyMode: true,
  confidenceLevel: "high",
  confidenceThreshold: 0.75,
};

export async function getSettings(): Promise<UserSettings> {
  const raw = await AsyncStorage.getItem(storageKeys.settings);
  if (!raw) return defaultSettings;
  try {
    const parsed = JSON.parse(raw) as Partial<UserSettings>;
    return normalizeSettings({ ...defaultSettings, ...parsed });
  } catch {
    return defaultSettings;
  }
}

export async function saveSettings(settings: UserSettings): Promise<void> {
  const normalized = normalizeSettings(settings);
  await AsyncStorage.setItem(storageKeys.settings, JSON.stringify(normalized));
}

export async function updateSettings(patch: Partial<UserSettings>): Promise<UserSettings> {
  const current = await getSettings();
  const next = normalizeSettings({ ...current, ...patch });
  await saveSettings(next);
  return next;
}

export function thresholdFromLevel(level: CueConfidenceLevel): number {
  switch (level) {
    case "low": return 0.5;
    case "medium": return 0.65;
    case "high": return 0.75;
    default: return 0.75;
  }
}

export function labelForLanguage(language: CueLanguage): string {
  return language === "tr" ? "Türkçe" : "English";
}

export function labelForMode(mode: CueMode): string {
  switch (mode) {
    case "social": return "Sosyal";
    case "movie_series": return "Film/Dizi";
    case "game": return "Oyun";
    case "business": return "İş";
    default: return "Sosyal";
  }
}

export function labelForAlertType(alertType: CueAlertType): string {
  switch (alertType) {
    case "audio_visual": return "Sesli + Görsel";
    case "visual": return "Sadece Görsel";
    case "vibration": return "Titreşim";
    case "silent": return "Sessiz";
    default: return "Sesli + Görsel";
  }
}

export function labelForConfidenceLevel(level: CueConfidenceLevel): string {
  switch (level) {
    case "low": return "Düşük";
    case "medium": return "Orta";
    case "high": return "Yüksek";
    default: return "Yüksek";
  }
}

function normalizeSettings(settings: UserSettings): UserSettings {
  const threshold = thresholdFromLevel(settings.confidenceLevel);
  return {
    ...settings,
    confidenceThreshold: threshold,
    saveHistory: settings.privacyMode ? false : settings.saveHistory,
  };
}
