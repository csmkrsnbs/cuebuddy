
import { buildCueAnalysisSystemPrompt, buildCueAnalysisUserPrompt } from "../prompts/cueAnalysisPrompt.js";
import { cueAnalysisJsonSchema } from "../schemas/cueAnalysisSchema.js";
import { CueAnalysisRequest, CueAnalysisResponse } from "../types/cue.js";

const ollamaBaseUrl = process.env.OLLAMA_BASE_URL ?? "http://localhost:11434";
const ollamaAnalysisModel = process.env.OLLAMA_ANALYSIS_MODEL ?? "llama3.1:8b";

const sttBaseUrl = process.env.LOCAL_STT_BASE_URL ?? "http://localhost:8000";
const sttModel = process.env.LOCAL_STT_MODEL ?? "whisper-small";
const sttEndpoint = process.env.LOCAL_STT_TRANSCRIPTIONS_PATH ?? "/v1/audio/transcriptions";

export type LocalTranscriptionResult = {
  text: string;
  language: string | null;
  durationMs: number | null;
};

export async function transcribeAudioWithLocalWhisper(input: {
  buffer: Buffer;
  originalName: string;
  mimeType?: string | null;
}): Promise<LocalTranscriptionResult> {
  const formData = new FormData();
  // Buffer verisini SharedArrayBuffer ihtimalinden arındırarak
// gerçek bir ArrayBuffer üzerine kopyala.
const arrayBuffer = new ArrayBuffer(input.buffer.byteLength);
const audioBytes = new Uint8Array(arrayBuffer);
audioBytes.set(input.buffer);

// Global Blob ve FormData aynı web API ailesini kullanır.
const blob = new globalThis.Blob([arrayBuffer], {
  type: input.mimeType || "application/octet-stream",
});

formData.append("file", blob, input.originalName);
  formData.append("model", sttModel);
  formData.append("response_format", "json");

  const response = await fetch(`${sttBaseUrl}${sttEndpoint}`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    const errorText = await response.text().catch(() => "");
    throw new Error(
      `Local STT başarısız: ${response.status}${errorText ? ` - ${errorText.slice(0, 300)}` : ""}`
    );
  }

  const data = (await response.json()) as { text?: string; language?: string; duration?: number };

  return {
    text: typeof data.text === "string" ? data.text : "",
    language: typeof data.language === "string" ? data.language : null,
    durationMs: typeof data.duration === "number" ? Math.round(data.duration * 1000) : null,
  };
}

export async function analyzeCueWithOllama(input: CueAnalysisRequest): Promise<{
  result: CueAnalysisResponse;
  systemPrompt: string;
  userPrompt: string;
  rawOutput: string;
}> {
  const systemPrompt = buildCueAnalysisSystemPrompt();
  const userPrompt = buildCueAnalysisUserPrompt(input);

  const response = await fetch(`${ollamaBaseUrl}/api/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      model: ollamaAnalysisModel,
      stream: false,
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt },
      ],
      format: cueAnalysisJsonSchema.schema,
      options: {
        temperature: 0.2,
      },
    }),
  });

  if (!response.ok) {
    const errorText = await response.text().catch(() => "");
    throw new Error(
      `Ollama analiz başarısız: ${response.status}${errorText ? ` - ${errorText.slice(0, 300)}` : ""}`
    );
  }

  const data = (await response.json()) as { message?: { content?: string }; response?: string };
  const rawOutput = data.message?.content ?? data.response ?? "";

  if (!rawOutput) {
    throw new Error("Ollama boş analiz çıktısı döndürdü.");
  }

  const parsed = JSON.parse(extractJsonObject(rawOutput)) as CueAnalysisResponse;

  return {
    result: parsed,
    systemPrompt,
    userPrompt,
    rawOutput,
  };
}

function extractJsonObject(value: string): string {
  const trimmed = value.trim();

  if (trimmed.startsWith("{") && trimmed.endsWith("}")) {
    return trimmed;
  }

  const first = trimmed.indexOf("{");
  const last = trimmed.lastIndexOf("}");

  if (first >= 0 && last > first) {
    return trimmed.slice(first, last + 1);
  }

  return trimmed;
}
