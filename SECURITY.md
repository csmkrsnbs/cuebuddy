# Güvenlik Notları

- Neon bağlantı dizeleri yalnızca backend ortam değişkenlerinde tutulur.
- `.env` dosyaları Git'e dahil edilmez.
- Backend rate limit uygular.
- CORS canlı web domainiyle sınırlandırılmalıdır.
- Ham ses disk üzerinde tutulmaz; Multer memory storage kullanılır.
- Analiz ve transkript içeriğinin veritabanına yazılması varsayılan olarak kapalıdır.
- RunPod HTTP proxy endpointleri doğrudan internete açık olabilir. Üretim ölçeğinde ters proxy, kimlik doğrulama, IP kısıtı veya özel ağ uygulanmalıdır.
- `/metrics` endpointi üretimde herkese açık bırakılmamalıdır. Gerekirse kapatılmalı veya kimlik doğrulama arkasına alınmalıdır.
- Bağımlılıklar `latest` yerine sabit sürümlere kilitlenmeli ve güvenlik taraması yapılmalıdır.
