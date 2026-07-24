# CueBuddy Web v1.0 PWA

Mobil arayüzlü, ana ekrana eklenebilir statik web uygulamasıdır.

## Yerel çalıştırma

```bash
cd cuebuddy-web
python -m http.server 4173
```

`http://localhost:4173` adresini aç.

## Canlıya alma

Render Static Site, Vercel, Netlify veya herhangi bir statik hosting kullanılabilir.

- Build command: boş
- Publish directory: `cuebuddy-web`
- SPA rewrite: gerekli değil
- Backend: `https://cuebuddy.onrender.com`

Canlı domain belli olduktan sonra backend `ALLOWED_ORIGIN` değişkenini o domainle güncelle.

## PWA

HTTPS üzerinde açıldığında destekleyen tarayıcılarda “Ana ekrana ekle” seçeneği görünür.
Mikrofon ve service worker özellikleri HTTPS veya localhost gerektirir.
