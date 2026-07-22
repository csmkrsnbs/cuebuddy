import { createHash } from 'node:crypto';
import { CueAnalysisRequest, CueAnalysisResponse } from '../types/cue.js';
import { getPrisma, isDatabaseConfigured } from '../prismaClient.js';

type ApiRequestLogInput = {
  requestId: string;
  method: string;
  path: string;
  statusCode: number;
  durationMs: number;
  ip?: string | null;
  userAgent?: string | null;
};

type TranscriptionLogInput = {
  requestId: string;
  audioSizeBytes?: number | null;
  approximateAudioSeconds?: number | null;
  transcriptText?: string | null;
};

type AnalysisLogInput = {
  requestId?: string | null;
  originalText: string;
  requestBody: CueAnalysisRequest;
  result: CueAnalysisResponse;
};

type FeedbackInput = {
  hintId?: string | null;
  requestId?: string | null;
  rating: string;
  comment?: string | null;
};

export function databaseStatus() {
  return {
    configured: isDatabaseConfigured,
    provider: 'neon-postgres',
  };
}

export async function checkDatabaseConnection(): Promise<boolean> {
  const prisma = getPrisma();

  if (!prisma) {
    return false;
  }

  try {
    await prisma.$queryRaw`SELECT 1`;
    return true;
  } catch (error) {
    console.error('Database health check failed:', error);
    return false;
  }
}

export async function logApiRequestToDatabase(input: ApiRequestLogInput): Promise<void> {
  await safeDbWrite(async () => {
    const prisma = getPrisma();
    if (!prisma) return;

    await prisma.apiRequestLog.create({
      data: {
        requestId: input.requestId,
        method: input.method,
        path: input.path,
        statusCode: input.statusCode,
        durationMs: input.durationMs,
        ipHash: input.ip ? hashText(input.ip) : null,
        userAgent: input.userAgent?.slice(0, 500) ?? null,
        isError: input.statusCode >= 400,
      },
    });
  });
}

export async function logTranscriptionToDatabase(input: TranscriptionLogInput): Promise<void> {
  await safeDbWrite(async () => {
    const prisma = getPrisma();
    if (!prisma) return;

    const allowPreview = process.env.STORE_TEXT_PREVIEW === 'true';

    await prisma.transcriptionLog.create({
      data: {
        requestId: input.requestId,
        audioSizeBytes: input.audioSizeBytes ?? null,
        approximateAudioSeconds: input.approximateAudioSeconds ?? null,
        transcriptHash: input.transcriptText ? hashText(input.transcriptText) : null,
        transcriptPreview: allowPreview && input.transcriptText ? input.transcriptText.slice(0, 240) : null,
      },
    });
  });
}

export async function logAnalysisToDatabase(input: AnalysisLogInput): Promise<void> {
  await safeDbWrite(async () => {
    const prisma = getPrisma();
    if (!prisma) return;

    const allowResultContent = process.env.STORE_ANALYSIS_RESULTS === 'true';
    const allowTextPreview = process.env.STORE_TEXT_PREVIEW === 'true';
    const result = input.result;

    await prisma.analysisHint.create({
      data: {
        requestId: input.requestId ?? null,
        hasReference: result.has_reference,
        confidence: result.confidence,
        referenceType: result.reference_type ?? null,
        source: allowResultContent ? result.source ?? null : null,
        detectedPhrase: allowResultContent ? result.detected_phrase ?? null : null,
        meaning: allowResultContent ? result.meaning ?? null : null,
        socialTone: allowResultContent ? result.social_tone ?? null : null,
        suggestedReply: allowResultContent ? result.suggested_reply ?? null : null,
        shortAudioHint: allowResultContent ? result.short_audio_hint ?? null : null,
        textHash: hashText(input.originalText),
        textPreview: allowTextPreview ? input.originalText.slice(0, 240) : null,
        language: input.requestBody.language ?? null,
        mode: input.requestBody.mode ?? null,
      },
    });
  });
}

export async function saveFeedbackToDatabase(input: FeedbackInput): Promise<void> {
  await safeDbWrite(async () => {
    const prisma = getPrisma();
    if (!prisma) return;

    await prisma.feedback.create({
      data: {
        hintId: input.hintId ?? null,
        requestId: input.requestId ?? null,
        rating: input.rating,
        comment: input.comment?.slice(0, 1000) ?? null,
      },
    });
  });
}

export function hashText(value: string): string {
  return createHash('sha256').update(value).digest('hex');
}

async function safeDbWrite(write: () => Promise<void>): Promise<void> {
  if (!isDatabaseConfigured) {
    return;
  }

  try {
    await write();
  } catch (error) {
    console.error('Database write skipped after error:', error);
  }
}
