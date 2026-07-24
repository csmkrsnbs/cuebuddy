# CueBuddy Neon Database Kurulumu

Bu paket CueBuddy backend'i Neon PostgreSQL ile çalışacak hale getirir.

## 1. Neon bağlantı bilgilerini al

Neon Console > Project Dashboard > Connect alanından iki connection string al:

- `DATABASE_URL`: pooled connection string. Hostname içinde `-pooler` bulunmalı.
- `DIRECT_URL`: direct connection string. Prisma CLI migration/db push işlemleri için kullanılır.

Örnek:

```env
DATABASE_URL="postgresql://USER:PASSWORD@ep-example-pooler.eu-central-1.aws.neon.tech/neondb?sslmode=require&connect_timeout=15"
DIRECT_URL="postgresql://USER:PASSWORD@ep-example.eu-central-1.aws.neon.tech/neondb?sslmode=require&connect_timeout=15"
```

## 2. Backend env dosyasını oluştur

```bash
cd cuebuddy-backend
cp .env.example .env
```

`.env` içine `DATABASE_URL`, `DIRECT_URL`, `OLLAMA_BASE_URL` ve `LOCAL_STT_BASE_URL` değerlerini yaz. Bu sürümde OpenAI API key kullanılmaz.

## 3. Bağımlılıkları kur

```bash
npm install
```

## 4. Prisma client üret

```bash
npm run db:generate
```

## 5. Neon tablolarını oluştur

Geliştirme ortamı için:

```bash
npm run db:push
```

Production/migration akışı için:

```bash
npm run db:migrate
```

## 6. Backend'i çalıştır

```bash
npm run dev
```

Kontrol:

```bash
curl http://localhost:3001/health
curl http://localhost:3001/db/health
```

## 7. Gizlilik ayarları

Varsayılan olarak backend, Neon'a request log, hash ve metadata yazar. Ham konuşma metni veya AI cevap içeriği varsayılan olarak saklanmaz.

```env
STORE_ANALYSIS_RESULTS=false
STORE_TEXT_PREVIEW=false
```

`STORE_ANALYSIS_RESULTS=true` yaparsan AI çıktısı içeriği de kaydedilir.
`STORE_TEXT_PREVIEW=true` yaparsan transcript/text preview da kaydedilir. Bunu yalnızca açık kullanıcı rızası varsa aç.

## Eklenen Neon tabloları

- `ApiRequestLog`: endpoint, süre, status, request id
- `TranscriptionLog`: ses boyutu, tahmini süre, transcript hash
- `AnalysisHint`: analiz sonucu metadata ve opsiyonel içerik
- `Feedback`: kullanıcı feedback kayıtları
