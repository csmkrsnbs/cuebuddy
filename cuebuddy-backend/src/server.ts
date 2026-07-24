import express from "express";
import cors from "cors";
import multer from "multer";
import "dotenv/config";
import { CueAnalysisRequest, CueAnalysisResponse } from "./types/cue.js";
import { analyzeLimiter, generalLimiter, transcribeLimiter } from "./middleware/rateLimiters.js";
import { requestLogger } from "./middleware/requestLogger.js";
import { getUsageSnapshot, recordAnalyzeUsage, recordEndpointUsage, recordTranscriptionUsage } from "./services/usageMetrics.js";
import { checkDatabaseConnection, databaseStatus, logAnalysisToDatabase, logTranscriptionToDatabase, saveFeedbackToDatabase } from "./services/databaseService.js";
import { analyzeCueWithOllama, transcribeAudioWithLocalWhisper } from "./services/localAiService.js";

const app = express();

const port = Number(process.env.PORT ?? 3001);
const allowedOrigin = process.env.ALLOWED_ORIGIN ?? "*";
const allowedOrigins = allowedOrigin
  .split(",")
  .map((value) => value.trim())
  .filter(Boolean);

app.use(requestLogger);
app.use(generalLimiter);
app.use(
  cors({
    origin(origin, callback) {
      if (!origin || allowedOrigin === "*" || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      return callback(new Error("CORS origin not allowed"));
    },
    methods: ["GET", "POST", "OPTIONS"],
  })
);
app.use(express.json({ limit: "1mb" }));

const upload = multer({ storage: multer.memoryStorage(), limits: { fileSize: 20 * 1024 * 1024 } });

app.get("/", (_req, res) => {
  res.json({
    ok: true,
    service: "CueBuddy API",
    docs: ["/health", "/db/health"],
  });
});

app.get("/health", (_req, res) => {
  res.json({
    ok: true,
    service: "cuebuddy-backend",
    version: "1.0.0-production",
    ai: {
      analysisProvider: "ollama",
      analysisModel: process.env.OLLAMA_ANALYSIS_MODEL ?? "llama3.1:8b",
      transcriptionProvider: "local-whisper-compatible",
      transcriptionBaseUrl: process.env.LOCAL_STT_BASE_URL ?? "http://localhost:8000",
    },
    database: databaseStatus(),
  });
});

app.get("/db/health", async (_req, res) => {
  const connected = await checkDatabaseConnection();

  res.status(connected ? 200 : 503).json({
    ok: connected,
    database: databaseStatus(),
  });
});

app.get("/metrics", (_req, res) => {
  res.json(getUsageSnapshot());
});

app.post("/transcribe", transcribeLimiter, upload.single("audio"), async (req, res) => {
  const startedAt = Date.now();

  try {
    if (!req.file) {
      recordEndpointUsage({ endpoint: "transcribe", durationMs: Date.now() - startedAt, ok: false });
      return res.status(400).json({ error: "audio dosyası gerekli. FormData alan adı 'audio' olmalı.", requestId: req.requestId });
    }

    const originalName = req.file.originalname || "cuebuddy-recording.m4a";
    const transcription = await transcribeAudioWithLocalWhisper({
      buffer: req.file.buffer,
      originalName,
      mimeType: req.file.mimetype || "audio/m4a",
    });

    recordEndpointUsage({ endpoint: "transcribe", durationMs: Date.now() - startedAt, ok: true });
    recordTranscriptionUsage({ approximateAudioSeconds: 5 });

    if (req.requestId) {
      void logTranscriptionToDatabase({
        requestId: req.requestId,
        audioSizeBytes: req.file.size,
        approximateAudioSeconds: 5,
        transcriptText: transcription.text,
      });
    }

    return res.json({ ...transcription, requestId: req.requestId });
  } catch (error) {
    console.error("POST /transcribe error:", { requestId: req.requestId, error });
    recordEndpointUsage({ endpoint: "transcribe", durationMs: Date.now() - startedAt, ok: false });
    return res.status(500).json({ error: "Local transkripsiyon başarısız. LOCAL_STT_BASE_URL servisinin çalıştığını kontrol et.", requestId: req.requestId });
  }
});

app.post("/analyze", analyzeLimiter, async (req, res) => {
  const startedAt = Date.now();

  try {
    const body = req.body as CueAnalysisRequest;

    if (!body.text || typeof body.text !== "string") {
      recordEndpointUsage({ endpoint: "analyze", durationMs: Date.now() - startedAt, ok: false });
      return res.status(400).json({ error: "text alanı zorunlu.", requestId: req.requestId });
    }

    const trimmedText = body.text.trim();

    if (trimmedText.length < 4 || isLowValueText(trimmedText)) {
      const empty = buildEmptyAnalysis();
      recordEndpointUsage({ endpoint: "analyze", durationMs: Date.now() - startedAt, ok: true });
      return res.json({ ...empty, requestId: req.requestId });
    }

    if (trimmedText.length > 1200) {
      recordEndpointUsage({ endpoint: "analyze", durationMs: Date.now() - startedAt, ok: false });
      return res.status(400).json({ error: "text alanı çok uzun. Maksimum 1200 karakter gönder.", requestId: req.requestId });
    }

    const analysis = await analyzeCueWithOllama({ ...body, text: trimmedText });
    const normalized = normalizeCueAnalysis(analysis.result);

    recordAnalyzeUsage({
      inputChars: analysis.systemPrompt.length + analysis.userPrompt.length,
      outputChars: analysis.rawOutput.length,
    });
    recordEndpointUsage({ endpoint: "analyze", durationMs: Date.now() - startedAt, ok: true });

    void logAnalysisToDatabase({
      requestId: req.requestId ?? null,
      originalText: trimmedText,
      requestBody: body,
      result: normalized,
    });

    return res.json({ ...normalized, requestId: req.requestId });
  } catch (error) {
    console.error("POST /analyze error:", { requestId: req.requestId, error });
    recordEndpointUsage({ endpoint: "analyze", durationMs: Date.now() - startedAt, ok: false });
    return res.status(500).json({ error: "Local AI analiz başarısız. Ollama servisinin ve modelin çalıştığını kontrol et.", requestId: req.requestId });
  }
});

app.post("/feedback", async (req, res) => {
  try {
    const { hintId, requestId, rating, comment } = req.body ?? {};
    const allowedRatings = new Set(["useful", "not_useful", "wrong", "offensive", "other"]);

    if (!rating || typeof rating !== "string" || !allowedRatings.has(rating)) {
      return res.status(400).json({
        error: "rating zorunlu. Geçerli değerler: useful, not_useful, wrong, offensive, other.",
        requestId: req.requestId,
      });
    }

    await saveFeedbackToDatabase({
      hintId: typeof hintId === "string" ? hintId : null,
      requestId: typeof requestId === "string" ? requestId : req.requestId ?? null,
      rating,
      comment: typeof comment === "string" ? comment : null,
    });

    return res.json({ success: true, requestId: req.requestId });
  } catch (error) {
    console.error("POST /feedback error:", { requestId: req.requestId, error });
    return res.status(500).json({ error: "Feedback kaydedilemedi.", requestId: req.requestId });
  }
});

function buildEmptyAnalysis(): CueAnalysisResponse {
  return { has_reference: false, confidence: 0, reference_type: null, source: null, detected_phrase: null, meaning: null, social_tone: null, suggested_reply: null, short_audio_hint: null };
}

function normalizeCueAnalysis(input: CueAnalysisResponse): CueAnalysisResponse {
  const confidence = clamp(Number(input.confidence ?? 0), 0, 1);
  if (!input.has_reference || confidence < 0.5) return { ...buildEmptyAnalysis(), confidence };
  return { has_reference: Boolean(input.has_reference), confidence, reference_type: input.reference_type ?? "unknown", source: input.source ?? null, detected_phrase: input.detected_phrase ?? null, meaning: input.meaning ?? null, social_tone: input.social_tone ?? null, suggested_reply: input.suggested_reply ?? null, short_audio_hint: input.short_audio_hint ?? null };
}

function clamp(value: number, min: number, max: number): number {
  if (Number.isNaN(value)) return min;
  return Math.max(min, Math.min(max, value));
}

function isLowValueText(text: string): boolean {
  const normalized = text.toLowerCase().trim().replace(/[“”"'.!,?;:()\[\]{}]/g, "").replace(/\s+/g, " ");
  const lowValuePhrases = new Set(["um", "uh", "hmm", "mmm", "evet", "hayır", "tamam", "ok", "okay", "yes", "no", "yeah", "yep", "nope"]);
  return lowValuePhrases.has(normalized);
}

app.listen(port, () => {
  console.log(`CueBuddy backend running on http://localhost:${port}`);
});
