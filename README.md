# CueBuddy v1.0 Production — Web PWA + Mobil + Backend

CueBuddy, konuşmada geçen film/dizi/oyun referansı, internet mizahı, teknik terim ve sosyal alt metni algılayıp kısa açıklama ile doğal cevap önerisi sunan bağlam asistanıdır.

## Paket içeriği

- `cuebuddy-web`: mobil arayüzlü, ana ekrana eklenebilir PWA
- `cuebuddy-app`: Expo/React Native mobil istemci
- `cuebuddy-backend`: Express/TypeScript API
- `marketing`: tanıtım görseli
- `DEPLOYMENT.md`: canlıya alma kontrol listesi
- `SECURITY.md`: üretim güvenliği notları

## Canlı servis

Backend varsayılanı:

```text
https://cuebuddy.onrender.com
```

Web istemci yalnızca backend’e bağlanır. RunPod ve Neon bağlantı bilgileri frontend’e konulmaz.

## Hızlı başlangıç

### Web

```bash
cd cuebuddy-web
python -m http.server 4173
```

### Backend

```bash
cd cuebuddy-backend
cp .env.example .env
npm install
npm run db:generate
npm run typecheck
npm start
```

### Expo mobil

```bash
cd cuebuddy-app
cp .env.example .env
npm install
npx expo start -c
```

## Gizlilik varsayılanları

- Ham ses kalıcı olarak saklanmaz.
- `STORE_ANALYSIS_RESULTS=false`
- `STORE_TEXT_PREVIEW=false`
- Web geçmişi cihazın localStorage alanında tutulur.
- Aydınlatma ve açık rıza aynı işlem olarak sunulmaz.

> Yasal metinler mevcut teknik mimariye göre hazırlanmış üretim taslaklarıdır. Veri sorumlusunun hukuki unvanı, yurt dışı aktarım mekanizması, saklama süreleri ve VERBİS durumu canlıya alınmadan önce hukuk uzmanıyla doğrulanmalıdır.
