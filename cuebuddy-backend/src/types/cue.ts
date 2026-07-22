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

export type CueAnalysisRequest = {
  text: string;
  language?: "tr" | "en";
  mode?: "social" | "movie_series" | "game" | "business";
  recentContext?: string[];
};

export type CueAnalysisResponse = {
  has_reference: boolean;
  confidence: number;
  reference_type: CueReferenceType | null;
  source: string | null;
  detected_phrase: string | null;
  meaning: string | null;
  social_tone: string | null;
  suggested_reply: string | null;
  short_audio_hint: string | null;
};
