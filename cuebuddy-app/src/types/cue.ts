export type CueReferenceType =
  | "film"
  | "series"
  | "game"
  | "meme"
  | "joke"
  | "social_context"
  | "term"
  | "culture"
  | "history"
  | "literature"
  | "tech"
  | "unknown";

export type CueHint = {
  id: string;
  detectedPhrase: string;
  source: string | null;
  referenceType: CueReferenceType;
  meaning: string | null;
  socialTone: string | null;
  suggestedReply: string | null;
  shortAudioHint: string | null;
  confidence: number;
  createdAt: string;
};

export type CueLanguage = "tr" | "en";
export type CueMode = "social" | "movie_series" | "game" | "business";
export type CueAlertType = "audio_visual" | "visual" | "vibration" | "silent";
export type CueConfidenceLevel = "low" | "medium" | "high";

export type UserSettings = {
  language: CueLanguage;
  mode: CueMode;
  alertType: CueAlertType;
  saveHistory: boolean;
  privacyMode: boolean;
  confidenceLevel: CueConfidenceLevel;
  confidenceThreshold: number;
};
