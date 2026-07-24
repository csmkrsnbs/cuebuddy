export type VadFrame = {
  timestampMs: number;
  db: number;
};

export type VadDecision = {
  hasSpeech: boolean;
  reason:
    | "speech_detected"
    | "no_metering"
    | "too_few_frames"
    | "low_average_energy"
    | "low_peak_energy"
    | "low_speech_ratio";
  frameCount: number;
  averageDb: number | null;
  peakDb: number | null;
  speechFrameRatio: number | null;
};
