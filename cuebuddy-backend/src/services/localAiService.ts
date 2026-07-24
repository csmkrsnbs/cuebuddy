import { buildCueAnalysisSystemPrompt, buildCueAnalysisUserPrompt } from "../prompts/cueAnalysisPrompt.js";
import { cueAnalysisJsonSchema } from "../schemas/cueAnalysisSchema.js";
import { CueAnalysisRequest, CueAnalysisResponse } from "../types/cue.js";

const ollamaBaseUrl = process.env.OLLAMA_BASE_URL ?? "http://localhost:11434";
const ollamaAnalysisModel = process.env.OLLAMA_ANALYSIS_MODEL ?? "llama3.1:8b";

const sttBaseUrl = process.env.LOCAL_STT_BASE_URL ?? "http://localhost:8000";
const sttModel = process.env.LOCAL_STT_MODEL ?? "Systran/faster-whisper-small";
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

  // Node Buffer can be backed by SharedArrayBuffer. Copy it into a plain
  // ArrayBuffer so the Web Blob/FormData types remain compatible.
  const arrayBuffer = new ArrayBuffer(input.buffer.byteLength);
  new Uint8Array(arrayBuffer).set(input.buffer);

  const blob = new globalThis.Blob([arrayBuffer], {
    type: input.mimeType ?? "audio/m4a",
  });

  formData.append("file", blob, input.originalName);
  formData.append("model", sttModel);
  formData.append("response_format", "json");

  const response = await fetchWithTimeout(
    `${sttBaseUrl}${sttEndpoint}`,
    {
      method: "POST",
      body: formData,
    },
    Number(process.env.LOCAL_STT_TIMEOUT_MS ?? 120000)
  );

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

  const response = await fetchWithTimeout(
    `${ollamaBaseUrl}/api/chat`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
      model: ollamaAnalysisModel,
      stream: false,
      keep_alive: process.env.OLLAMA_KEEP_ALIVE ?? "15m",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt },
      ],
      format: cueAnalysisJsonSchema.schema,
      options: {
        temperature: 0,
      },
    }),
    },
    Number(process.env.OLLAMA_TIMEOUT_MS ?? 180000)
  );

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


async function fetchWithTimeout(
  url: string,
  init: RequestInit,
  timeoutMs: number
): Promise<Response> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);

  try {
    return await fetch(url, {
      ...init,
      signal: controller.signal,
    });
  } catch (error) {
    if (error instanceof Error && error.name === "AbortError") {
      throw new Error(`Upstream request timed out after ${timeoutMs}ms`);
    }
    throw error;
  } finally {
    clearTimeout(timer);
  }
}
