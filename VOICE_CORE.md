# CueBuddy V3 — Voice Intelligence (development)

Existing V2 social analysis, Ollama, Speaches, Expo and Neon flows remain unchanged. New web page: /voice.html. New protected endpoint: POST /voice/session. No database migration.

## Private local testing
Use a separate local backend with the existing dependencies and configuration. Set OPENAI_API_KEY in the backend environment, OPENAI_REALTIME_MODEL=gpt-realtime-2.1 and a random CUEBUDDY_VOICE_ACCESS_CODE of at least 16 characters. Never commit secrets. Set ALLOWED_ORIGIN=http://localhost:4173 and PORT=3001 for local testing. Run npm install, npm run db:generate, npm run typecheck, npm start in cuebuddy-backend. Serve cuebuddy-web on localhost:4173 (python -m http.server 4173). Open /voice.html. Outside localhost the client currently uses the existing Render backend URL; for a separate hosted preview change that URL to the private preview API and configure CORS. Do not route a preview to production before its backend is deployed.

Voice Core is disabled by default (503 without key/code); bad code returns 401; malformed requests return 400. Requests are limited per IP. The browser ends test sessions at 5 minutes; this is not a server-enforced cost ceiling. Configure provider usage limits and add server-enforced call lifecycle before production. The browser transmits audio directly to OpenAI over WebRTC after explicit permission; backend brokers SDP only. No voice transcript is written to Neon. External provider data terms still apply. Participants must know an AI is involved and agree to processing. Interview Lab is for practice only.

## Release gates (not yet verified)
- Typecheck and existing V2 regression tests.
- Test 503 / 401 / 400 and per-IP limit without real API calls.
- Test authorized connection, TR/EN voice and barge-in with small approved API budget.
- Test mute, end, background, microphone refusal and network loss.
- Measure first audio event and network RTT; neither is physical end-to-end audio latency.
- Verify existing PWA navigation, browser/device compatibility and privacy documentation.
- Confirm server-side budget enforcement, authentication and provider retention settings before public release.
- SIP, Zoom/Teams, document RAG and native Expo integration are not included in this increment.
