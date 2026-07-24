import {
  DUPLICATE_TRANSCRIPT_WINDOW_MS,
  MIN_TRANSCRIPT_LENGTH,
  TRANSCRIPT_SIMILARITY_THRESHOLD,
} from "../constants/audio";

export type RecentTranscript = {
  text: string;
  normalized: string;
  createdAt: number;
};

export function normalizeTranscript(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[“”"'.!,?;:()\[\]{}]/g, "")
    .replace(/\s+/g, " ");
}

export function isTranscriptTooShort(text: string): boolean {
  const normalized = normalizeTranscript(text);
  if (normalized.length < MIN_TRANSCRIPT_LENGTH) return true;
  const words = normalized.split(" ").filter(Boolean);
  return words.length < 2 && normalized.length < 8;
}

export function isLowValueTranscript(text: string): boolean {
  const normalized = normalizeTranscript(text);
  if (!normalized) return true;
  const lowValuePhrases = new Set(["um", "uh", "hmm", "mmm", "evet", "hayır", "tamam", "ok", "okay", "yes", "no", "yeah", "yep", "nope"]);
  return lowValuePhrases.has(normalized);
}

export function isDuplicateOrSimilarTranscript(text: string, recentTranscripts: RecentTranscript[], now = Date.now()): boolean {
  const normalized = normalizeTranscript(text);
  if (!normalized) return true;

  for (const item of recentTranscripts) {
    const ageMs = now - item.createdAt;
    if (ageMs > DUPLICATE_TRANSCRIPT_WINDOW_MS) continue;
    if (normalized === item.normalized) return true;
    const similarity = calculateJaccardSimilarity(normalized, item.normalized);
    if (similarity >= TRANSCRIPT_SIMILARITY_THRESHOLD) return true;
  }

  return false;
}

export function rememberTranscript(text: string, recentTranscripts: RecentTranscript[], maxSize: number): RecentTranscript[] {
  const normalized = normalizeTranscript(text);
  return [{ text, normalized, createdAt: Date.now() }, ...recentTranscripts].slice(0, maxSize);
}

function calculateJaccardSimilarity(a: string, b: string): number {
  const aTokens = new Set(a.split(" ").filter(Boolean));
  const bTokens = new Set(b.split(" ").filter(Boolean));
  if (aTokens.size === 0 && bTokens.size === 0) return 1;
  if (aTokens.size === 0 || bTokens.size === 0) return 0;
  let intersection = 0;
  for (const token of aTokens) if (bTokens.has(token)) intersection += 1;
  const union = new Set([...aTokens, ...bTokens]).size;
  return intersection / union;
}
