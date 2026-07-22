# CueBuddy Backend

Express + TypeScript backend. Bu sürümde OpenAI API kullanılmaz.

- Analiz: Ollama local/open-source LLM
- Transkripsiyon: OpenAI-compatible local Whisper server
- Persistence: Neon PostgreSQL + Prisma

## Kurulum

```bash
cp .env.example .env
npm install
npm run db:generate
npm run db:push
npm run dev
```

## Gerekli local AI servisleri

Ollama:

```bash
ollama pull llama3.1:8b
ollama serve
```

`.env`:

```env
OLLAMA_BASE_URL=http://localhost:11434
OLLAMA_ANALYSIS_MODEL=llama3.1:8b
```

Local Whisper/OpenAI-compatible STT server:

```env
LOCAL_STT_BASE_URL=http://localhost:8000
LOCAL_STT_TRANSCRIPTIONS_PATH=/v1/audio/transcriptions
LOCAL_STT_MODEL=whisper-small
```

## Endpointler

- `GET /health`
- `GET /db/health`
- `GET /metrics`
- `POST /transcribe` — FormData `audio`
- `POST /analyze` — JSON `{ text, language, mode, recentContext }`
- `POST /feedback` — JSON `{ hintId, requestId, rating, comment }`

## Neon

- `DATABASE_URL`: pooled Neon URL, uygulama runtime bağlantısı
- `DIRECT_URL`: direct Neon URL, Prisma CLI migration/db push işlemleri

## Gizlilik

Varsayılan:

```env
STORE_ANALYSIS_RESULTS=false
STORE_TEXT_PREVIEW=false
```

Bu durumda ham transcript preview veya AI cevap içeriği Neon'a kaydedilmez; hash ve metadata kaydedilir.
