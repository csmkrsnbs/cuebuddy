# CueBuddy PRO V5.5.2 recovery snapshot
**All 27 non-PNG source files recovered and byte-verified. Three generated PNG originals are not archived. Restore build/test pending. Do not deploy directly from this archive.**
Production: https://cuebuddy.sokakvitrini.com
Immutable deployment: https://cuebuddy-voice-preview-nozjp4uee-sokak-vitrini.vercel.app
Original source branch: feature/v3-voice-intelligence (RC16).
## Restore instructions
1. Clone this backup branch and run `node recovery/v5.5.2/restore.cjs /absolute/path/to/empty/recovered-project` to extract and verify all 27 text source files against the original Vercel raw SHA-1 hashes. The script refuses to write to a nonempty destination.
2. Use Node.js 22 and `npm install` in the extracted directory. The verified package postinstall regenerates the PNG artwork and runs mocked core and PDF tests. No production credentials are needed for these tests.
3. Verify test results, generated assets, responsive UI and authorized practice features in a separate preview before considering production.
4. Restore actual environment credentials separately using authorized Vercel settings; never commit them. This repository is public.
5. Keep production untouched until after the interview and explicit release approval.
No actual secret values or user CVs included. Original binary PNG hashes are recorded in manifest.json. Full independent build and restore validation remains pending.
