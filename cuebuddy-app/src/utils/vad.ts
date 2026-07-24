import {
  VAD_MIN_AVERAGE_DB,
  VAD_MIN_PEAK_DB,
  VAD_MIN_SPEECH_FRAME_RATIO,
  VAD_SPEECH_DB_THRESHOLD,
} from "../constants/vad";
import { VadDecision, VadFrame } from "../types/vad";

export function analyzeVadFrames(frames: VadFrame[]): VadDecision {
  const validFrames = frames.filter((frame) => Number.isFinite(frame.db));

  if (validFrames.length === 0) {
    return { hasSpeech: true, reason: "no_metering", frameCount: 0, averageDb: null, peakDb: null, speechFrameRatio: null };
  }

  if (validFrames.length < 4) {
    return { hasSpeech: true, reason: "too_few_frames", frameCount: validFrames.length, averageDb: null, peakDb: null, speechFrameRatio: null };
  }

  const dbValues = validFrames.map((frame) => frame.db);
  const averageDb = dbValues.reduce((sum, value) => sum + value, 0) / dbValues.length;
  const peakDb = Math.max(...dbValues);
  const speechFrames = dbValues.filter((value) => value >= VAD_SPEECH_DB_THRESHOLD);
  const speechFrameRatio = speechFrames.length / dbValues.length;

  if (averageDb < VAD_MIN_AVERAGE_DB) {
    return { hasSpeech: false, reason: "low_average_energy", frameCount: validFrames.length, averageDb, peakDb, speechFrameRatio };
  }

  if (peakDb < VAD_MIN_PEAK_DB) {
    return { hasSpeech: false, reason: "low_peak_energy", frameCount: validFrames.length, averageDb, peakDb, speechFrameRatio };
  }

  if (speechFrameRatio < VAD_MIN_SPEECH_FRAME_RATIO) {
    return { hasSpeech: false, reason: "low_speech_ratio", frameCount: validFrames.length, averageDb, peakDb, speechFrameRatio };
  }

  return { hasSpeech: true, reason: "speech_detected", frameCount: validFrames.length, averageDb, peakDb, speechFrameRatio };
}
