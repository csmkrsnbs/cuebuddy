import * as Speech from "expo-speech";

type SpeakHintOptions = { language?: "tr" | "en" };

export async function speakHint(text: string | null | undefined, options: SpeakHintOptions = {}) {
  if (!text || text.trim().length === 0) return;
  const isSpeaking = await Speech.isSpeakingAsync();
  if (isSpeaking) Speech.stop();
  Speech.speak(text, { language: options.language === "en" ? "en-US" : "tr-TR", rate: 1.0, pitch: 1.0 });
}

export function stopSpeaking() {
  Speech.stop();
}
