# CueBuddy PRO V5.5.2 recovery snapshot — 2026-11-27
**PARTIAL ARCHIVE — DO NOT DEPLOY FROM THIS BRANCH.**
Production: https://cuebuddy.sokakvitrini.com
Immutable deployment: https://cuebuddy-voice-preview-nozjp4uee-sokak-vitrini.vercel.app
Previous validated source branch: feature/v3-voice-intelligence, commit fa1484619266dcc3f424fbe6ddc69e466f1ced9b (RC16; older than production).
## Recovery
1. Prefer Vercel's existing V5.5.2 production deployment for redeploy/rollback. Confirm exact deployment and intended environment in Vercel first.
2. The JSON files contain the public HTML, JS, CSS, manifest and SVG response bodies. Extract their files objects and reproduce the identicalCopies entry. Do not overwrite the old app directory until a full source diff is available.
3. Obtain the complete current backend API source, build scripts, package and deployment config and binary assets from authenticated Vercel source export. Compare against manifest.json and verify file hashes. A truncated base64 response is not a valid backup.
4. Restore environment variables separately through the authorized Vercel project. Never put API keys, access codes, user documents or secret values in this public repository.
5. Install dependencies, run all existing tests, deploy a preview, verify UI/device behavior, then explicitly approve production.
The snapshot does not constitute a full independent disaster-recovery backup. The application has no persistent CV or session archive in its current code. Provider logs and retention are separate.
