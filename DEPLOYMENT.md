# CueBuddy v1.0 Canlıya Alma

## 1. Backend — Render

Root Directory: `cuebuddy-backend`

Build Command:

```text
npm install && npm run db:generate && npm run typecheck
```

Start Command:

```text
npm start
```

Health Check Path:

```text
/health
```

Environment değerleri `.env.example` dosyasına göre Render paneline eklenir. `.env` GitHub'a gönderilmez.

## 2. Web — Render Static Site

Root Directory: `cuebuddy-web`

Build Command: boş

Publish Directory:

```text
.
```

Yayın adresi oluştuktan sonra backend:

```env
ALLOWED_ORIGIN=https://GERCEK-WEB-DOMAINI
```

olarak güncellenip yeniden deploy edilir.

## 3. RunPod

Port 11434 Ollama, port 8000 Speaches içindir. Pod durursa analiz ve transkripsiyon çalışmaz.
Kalıcı kullanımda başlangıç scripti veya özel template hazırlanmalıdır.

## 4. Testler

```bash
curl https://cuebuddy.onrender.com/health
curl https://cuebuddy.onrender.com/db/health
```

Analiz:

```bash
curl -X POST https://cuebuddy.onrender.com/analyze   -H "Content-Type: application/json"   -d '{"text":"Winter is coming.","language":"tr","mode":"social","recentContext":[]}'
```

Ses testi canlıya çıkıştan önce gerçek `.m4a`, `.wav` veya `.webm` dosyasıyla tamamlanmalıdır.

## 5. Son kontrol

- [ ] Web HTTPS üzerinde açılıyor.
- [ ] PWA manifest ve service worker çalışıyor.
- [ ] Mikrofon izni yalnızca kullanıcı eylemiyle isteniyor.
- [ ] `/analyze` başarılı.
- [ ] `/transcribe` gerçek sesle başarılı.
- [ ] CORS gerçek domaine sınırlandı.
- [ ] RunPod endpoint güvenliği gözden geçirildi.
- [ ] KVKK metinlerindeki unvan ve aktarım mekanizması doğrulandı.
