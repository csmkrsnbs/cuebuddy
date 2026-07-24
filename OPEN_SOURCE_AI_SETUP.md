# CueBuddy Açık Kaynak AI Kurulumu

Bu sürümde OpenAI API key kullanılmaz.

Backend iki yerel/açık kaynak servise bağlanır:

1. **Ollama** — konuşma bağlamı, gönderme, şaka ve cevap önerisi analizi
2. **OpenAI-compatible Whisper server** — ses dosyasını yazıya çevirme

## 1. Ollama kurulumu

Bilgisayarına veya sunucuna Ollama kur.

Model indir:

```bash
ollama pull llama3.1:8b
```

Ollama servisini çalıştır:

```bash
ollama serve
```

Kontrol:

```bash
curl http://localhost:11434/api/tags
```

Backend `.env`:

```env
OLLAMA_BASE_URL=http://localhost:11434
OLLAMA_ANALYSIS_MODEL=llama3.1:8b
```

Daha güçlü sunucuda alternatif model:

```env
OLLAMA_ANALYSIS_MODEL=qwen2.5:14b
```

Daha zayıf makinede:

```env
OLLAMA_ANALYSIS_MODEL=llama3.2:3b
```

## 2. Local Whisper / STT kurulumu

Backend `/transcribe` endpoint'i, OpenAI-compatible Whisper server bekler.

Beklenen endpoint:

```text
POST /v1/audio/transcriptions
FormData:
  file=<audio file>
  model=<model name>
  response_format=json
```

Bunun için şu tür servislerden biri kullanılabilir:

- openedai-whisper
- faster-whisper-server
- whisper.cpp OpenAI-compatible server

Backend `.env`:

```env
LOCAL_STT_BASE_URL=http://localhost:8000
LOCAL_STT_TRANSCRIPTIONS_PATH=/v1/audio/transcriptions
LOCAL_STT_MODEL=whisper-small
```

## 3. Backend çalıştırma

```bash
cd cuebuddy-backend
cp .env.example .env
npm install
npm run db:generate
npm run db:push
npm run dev
```

Kontrol:

```bash
curl http://localhost:3001/health
```

## 4. Analiz endpoint testi

```bash
curl -X POST http://localhost:3001/analyze \
  -H "Content-Type: application/json" \
  -d '{"text":"Bu iş biraz kış geliyor moduna döndü.","language":"tr","mode":"social"}'
```

## 5. Transkripsiyon endpoint testi

```bash
curl -X POST http://localhost:3001/transcribe \
  -F "audio=@sample.m4a"
```

## 6. Yayınlama notu

OpenAI key artık yoktur; fakat backend'in çalışması için Ollama ve Whisper server aynı sunucuda veya erişilebilir özel ağda çalışmalıdır.

Production'da önerilen yapı:

```text
Mobil uygulama
  ↓
CueBuddy Backend
  ↓             ↓
Ollama          Local Whisper Server
  ↓
Neon PostgreSQL
```

Ollama ve Whisper servislerini public internete açık bırakma. Sadece backend erişsin.
