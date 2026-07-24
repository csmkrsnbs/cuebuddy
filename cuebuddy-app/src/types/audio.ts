export type RecordingResult = {
  uri: string;
  durationMs?: number;
};

export type TranscriptionResult = {
  text: string;
  language?: string | null;
  durationMs?: number | null;
  requestId?: string;
};
