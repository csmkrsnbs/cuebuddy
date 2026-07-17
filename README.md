# CueBuddy v0.1 Final — Neon + Açık Kaynak AI

CueBuddy, konuşmada geçen gönderme, şaka, sosyal alt metin, meme, film/dizi/oyun referansı ve teknik terimleri yakalayıp kullanıcıya kısa açıklama + doğal cevap önerisi veren mobil uygulama konseptidir.

Bu sürümde **OpenAI API key kullanılmaz**. AI katmanı açık kaynak/local çalışacak şekilde revize edilmiştir.

Paket iki ana bölüm içerir:

- `cuebuddy-app`: Expo / React Native mobil uygulama
- `cuebuddy-backend`: Express / TypeScript backend
- `marketing`: Instagram konsept görseli
- `NEON_SETUP.md`: Neon PostgreSQL kurulum rehberi
- `OPEN_SOURCE_AI_SETUP.md`: Ollama + local Whisper kurulum rehberi

## Final kapsam

- Mobil taraf 5 saniyelik otomatik chunk dinleme akışı, VAD/sessizlik filtresi, confidence threshold, local settings/history ve TTS akışını içerir.
- Backend tarafında `/transcribe`, `/analyze`, `/feedback`, `/health`, `/db/health`, `/metrics` endpointleri vardır.
- `/analyze` artık Ollama üzerinden çalışır.
- `/transcribe` artık OpenAI-compatible local Whisper server üzerinden çalışır.
- Neon PostgreSQL için Prisma yapılandırması korunmuştur.
- Request log, transcription log, analysis metadata ve feedback kayıtları Neon'a yazılabilir.
- Gizlilik için ham konuşma metni varsayılan olarak saklanmaz; hash/metadata yaklaşımı kullanılır.

## Backend hızlı kurulum

```bash
cd cuebuddy-backend
cp .env.example .env
npm install
npm run db:generate
npm run db:push
npm run dev
```

`.env` içinde şunları doldur:

```env
OLLAMA_BASE_URL=http://localhost:11434
OLLAMA_ANALYSIS_MODEL=llama3.1:8b

LOCAL_STT_BASE_URL=http://localhost:8000
LOCAL_STT_TRANSCRIPTIONS_PATH=/v1/audio/transcriptions
LOCAL_STT_MODEL=whisper-small

DATABASE_URL="postgresql://...-pooler.../neondb?sslmode=require&connect_timeout=15"
DIRECT_URL="postgresql://.../neondb?sslmode=require&connect_timeout=15"
```

Kontrol:

```bash
curl http://localhost:3001/health
curl http://localhost:3001/db/health
```

## Açık kaynak AI servisleri

Önce Ollama modeli indir:

```bash
ollama pull llama3.1:8b
ollama serve
```

Ayrıca OpenAI-compatible Whisper/STT server çalıştırmalısın. Detaylar için:

```text
OPEN_SOURCE_AI_SETUP.md
```

## Mobil uygulama hızlı kurulum

```bash
cd cuebuddy-app
cp .env.example .env
npm install
npx expo start -c
```

Fiziksel telefonda test ederken `EXPO_PUBLIC_API_BASE_URL` için bilgisayarının yerel IP adresini kullan:

```env
EXPO_PUBLIC_API_BASE_URL=http://192.168.1.42:3001
```

## Neon notu

Backend database connection string'i sadece server tarafında tutulmalıdır. Mobil uygulamaya veya frontend env dosyasına Neon connection string koyma.

Daha detaylı Neon kurulum adımları için `NEON_SETUP.md` dosyasına bak.
