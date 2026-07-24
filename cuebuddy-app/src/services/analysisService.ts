import { CueHint, CueLanguage, CueMode, CueReferenceType } from "../types/cue";

const API_BASE_URL = process.env.EXPO_PUBLIC_API_BASE_URL;

type AnalyzeTextInput = {
  text: string;
  language: CueLanguage;
  mode: CueMode;
  recentContext?: string[];
};

type AnalyzeOptions = { mode?: "mock" | "api" };

export async function analyzeText(input: AnalyzeTextInput, options: AnalyzeOptions = {}): Promise<CueHint | null> {
  const mode = options.mode ?? "mock";
  if (!input.text.trim()) return null;
  if (mode === "mock") return mockAnalyze(input.text);
  if (!API_BASE_URL) throw new Error("EXPO_PUBLIC_API_BASE_URL tanımlı değil.");

  const response = await fetch(`${API_BASE_URL}/analyze`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(input),
  });

  if (!response.ok) {
    const errorBody = await safeReadError(response);
    throw new Error(errorBody?.error ?? `Analiz başarısız: ${response.status}`);
  }

  const result = await response.json();
  if (!result.has_reference || result.confidence < 0.5) return null;
  return mapApiResultToCueHint(result);
}

function mapApiResultToCueHint(result: any): CueHint {
  return {
    id: `hint_${Date.now()}`,
    detectedPhrase: String(result.detected_phrase ?? ""),
    source: result.source ?? null,
    referenceType: result.reference_type ?? "unknown",
    meaning: result.meaning ?? null,
    socialTone: result.social_tone ?? null,
    suggestedReply: result.suggested_reply ?? null,
    shortAudioHint: result.short_audio_hint ?? null,
    confidence: Number(result.confidence ?? 0),
    createdAt: new Date().toISOString(),
  };
}

async function mockAnalyze(text: string): Promise<CueHint | null> {
  await new Promise((resolve) => setTimeout(resolve, 700));
  const normalized = text.toLowerCase();

  if (normalized.includes("final sahnesi") || normalized.includes("bu ortam biraz final")) {
    return makeHint({
      detectedPhrase: "Bu ortam biraz final sahnesi gibi oldu.",
      source: null,
      referenceType: "social_context",
      meaning: "Ortam gereğinden fazla dramatikleşti; kişi bunu şakayla yumuşatıyor.",
      socialTone: "mizahi, dramatik, ortamı hafifletme",
      suggestedReply: "Fon müziğini açalım o zaman.",
      shortAudioHint: "Dramatik kapanış şakası. Ortam fazla ciddileşti demek istiyor.",
      confidence: 0.91,
    });
  }

  if (normalized.includes("kış geliyor") || normalized.includes("winter is coming")) {
    return makeHint({
      detectedPhrase: text,
      source: "Popüler kültür göndermesi",
      referenceType: "culture",
      meaning: "Yaklaşan sorun, yoğunluk veya hazırlık gerektiren dönem anlamında kullanılıyor.",
      socialTone: "mizahi, uyarıcı, dramatik",
      suggestedReply: "Battaniyeyi değil, planı hazırlayalım.",
      shortAudioHint: "Yaklaşan sorun şakası. Hazırlık gerekiyor demek istiyor.",
      confidence: 0.86,
    });
  }

  if (normalized.includes("benim bilgisayar") || normalized.includes("works on my machine")) {
    return makeHint({
      detectedPhrase: text,
      source: "Developer joke",
      referenceType: "tech",
      meaning: "Yazılımcıların, hatanın kendi ortamlarında çıkmadığını anlatırken yaptığı klasik espri.",
      socialTone: "teknik, ironik, esprili",
      suggestedReply: "O zaman bilgisayarı prod’a alalım.",
      shortAudioHint: "Yazılımcı şakası. Kendi makinemde çalışıyor anlamında.",
      confidence: 0.89,
    });
  }

  if (normalized.includes("şansım") || normalized.includes("benim şans")) {
    return makeHint({
      detectedPhrase: text,
      source: null,
      referenceType: "joke",
      meaning: "İşler ters gidince söylenen günlük talihsizlik şakası.",
      socialTone: "mizahi, kendine takılma",
      suggestedReply: "Bugünlük evren seni seçmiş.",
      shortAudioHint: "Talihsizlik şakası. Hafif cevap verilebilir.",
      confidence: 0.82,
    });
  }

  return null;
}

function makeHint(input: {
  detectedPhrase: string;
  source: string | null;
  referenceType: CueReferenceType;
  meaning: string;
  socialTone: string;
  suggestedReply: string;
  shortAudioHint: string;
  confidence: number;
}): CueHint {
  return {
    id: `hint_${Date.now()}`,
    detectedPhrase: input.detectedPhrase,
    source: input.source,
    referenceType: input.referenceType,
    meaning: input.meaning,
    socialTone: input.socialTone,
    suggestedReply: input.suggestedReply,
    shortAudioHint: input.shortAudioHint,
    confidence: input.confidence,
    createdAt: new Date().toISOString(),
  };
}

async function safeReadError(response: Response): Promise<{ error?: string } | null> {
  try { return await response.json(); } catch { return null; }
}
