import { TranscriptionResult } from "../types/audio";

const API_BASE_URL = process.env.EXPO_PUBLIC_API_BASE_URL;

type TranscribeAudioOptions = { mode?: "mock" | "api" };

export async function transcribeAudio(audioUri: string, options: TranscribeAudioOptions = {}): Promise<TranscriptionResult> {
  const mode = options.mode ?? "mock";

  if (mode === "mock") return mockTranscription();
  if (!API_BASE_URL) throw new Error("EXPO_PUBLIC_API_BASE_URL tanımlı değil.");

  const formData = new FormData();
  formData.append("audio", { uri: audioUri, name: "cuebuddy-recording.m4a", type: "audio/m4a" } as unknown as Blob);

  const response = await fetch(`${API_BASE_URL}/transcribe`, { method: "POST", body: formData, headers: { Accept: "application/json" } });

  if (!response.ok) {
    const errorBody = await safeReadError(response);
    throw new Error(errorBody?.error ?? `Transkripsiyon başarısız: ${response.status}`);
  }

  return response.json();
}

async function mockTranscription(): Promise<TranscriptionResult> {
  const samples = ["Winter is coming.", "The cake is a lie.", "I'll make him an offer he can't refuse.", "It works on my machine."];
  const randomText = samples[Math.floor(Math.random() * samples.length)];
  await new Promise((resolve) => setTimeout(resolve, 700));
  return { text: randomText, language: "en", durationMs: 5000 };
}

async function safeReadError(response: Response): Promise<{ error?: string } | null> {
  try { return await response.json(); } catch { return null; }
}
