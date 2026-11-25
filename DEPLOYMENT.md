# CueBuddy V2.1 — Railway

Tek Railway hizmeti repo kökündeki Dockerfile ile web PWA ve Express API'yi aynı HTTPS alanında sunar. Render gerekmez. Sağlık kontrolü /health, model kontrolü /ready.

Mevcut Neon projesi ve RunPod servisleri korunur: Railway Variables ekranında DATABASE_URL, DIRECT_URL, OLLAMA_BASE_URL, LOCAL_STT_BASE_URL değerlerini mevcut sistemden güvenli şekilde tanımlayın. Model varsayılanları llama3.1:8b ve Systran/faster-whisper-small. Neon yoksa API günlükleri kaydedilmez; motorlar yoksa dinleme/analiz devre dışı kalır. Gerçek çıkarım testi gerekir.

Özel alan adı: cuebuddy.sokakvitrini.com. Railway'in verdiği DNS kayıtlarını DNS sağlayıcısında güncelleyin, TLS doğrulamasını kontrol edin. Diğer alt alanlara dokunmayın.
