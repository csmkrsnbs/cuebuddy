-- CueBuddy Neon PostgreSQL initial schema

CREATE TABLE "ApiRequestLog" (
  "id" TEXT NOT NULL,
  "requestId" TEXT NOT NULL,
  "method" TEXT NOT NULL,
  "path" TEXT NOT NULL,
  "statusCode" INTEGER NOT NULL,
  "durationMs" INTEGER NOT NULL,
  "ipHash" TEXT,
  "userAgent" TEXT,
  "isError" BOOLEAN NOT NULL DEFAULT false,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "ApiRequestLog_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "ApiRequestLog_requestId_key" ON "ApiRequestLog"("requestId");
CREATE INDEX "ApiRequestLog_path_createdAt_idx" ON "ApiRequestLog"("path", "createdAt");
CREATE INDEX "ApiRequestLog_statusCode_createdAt_idx" ON "ApiRequestLog"("statusCode", "createdAt");

CREATE TABLE "TranscriptionLog" (
  "id" TEXT NOT NULL,
  "requestId" TEXT NOT NULL,
  "audioSizeBytes" INTEGER,
  "approximateAudioSeconds" INTEGER,
  "transcriptHash" TEXT,
  "transcriptPreview" TEXT,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "TranscriptionLog_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "TranscriptionLog_requestId_key" ON "TranscriptionLog"("requestId");
CREATE INDEX "TranscriptionLog_createdAt_idx" ON "TranscriptionLog"("createdAt");

CREATE TABLE "AnalysisHint" (
  "id" TEXT NOT NULL,
  "requestId" TEXT,
  "hasReference" BOOLEAN NOT NULL DEFAULT false,
  "confidence" DOUBLE PRECISION NOT NULL DEFAULT 0,
  "referenceType" TEXT,
  "source" TEXT,
  "detectedPhrase" TEXT,
  "meaning" TEXT,
  "socialTone" TEXT,
  "suggestedReply" TEXT,
  "shortAudioHint" TEXT,
  "textHash" TEXT,
  "textPreview" TEXT,
  "language" TEXT,
  "mode" TEXT,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "AnalysisHint_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "AnalysisHint_requestId_key" ON "AnalysisHint"("requestId");
CREATE INDEX "AnalysisHint_hasReference_createdAt_idx" ON "AnalysisHint"("hasReference", "createdAt");
CREATE INDEX "AnalysisHint_referenceType_createdAt_idx" ON "AnalysisHint"("referenceType", "createdAt");
CREATE INDEX "AnalysisHint_confidence_idx" ON "AnalysisHint"("confidence");

CREATE TABLE "Feedback" (
  "id" TEXT NOT NULL,
  "hintId" TEXT,
  "requestId" TEXT,
  "rating" TEXT NOT NULL,
  "comment" TEXT,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "Feedback_pkey" PRIMARY KEY ("id")
);

CREATE INDEX "Feedback_rating_createdAt_idx" ON "Feedback"("rating", "createdAt");
