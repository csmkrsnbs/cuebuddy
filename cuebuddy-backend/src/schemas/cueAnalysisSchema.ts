export const cueAnalysisJsonSchema = {
  name: "cue_analysis",
  strict: true,
  schema: {
    type: "object",
    additionalProperties: false,
    properties: {
      has_reference: {
        type: "boolean",
        description: "Konuşma parçasında anlamlı bir gönderme, şaka, referans, sosyal bağlam veya ipucu var mı?"
      },
      confidence: {
        type: "number",
        description: "0 ile 1 arasında güven skoru."
      },
      reference_type: {
        anyOf: [
          {
            type: "string",
            enum: [
              "film",
              "series",
              "game",
              "meme",
              "joke",
              "social_context",
              "term",
              "culture",
              "history",
              "literature",
              "tech",
              "unknown"
            ]
          },
          { type: "null" }
        ]
      },
      source: {
        anyOf: [
          {
            type: "string",
            description: "Referansın bilinen kaynağı. Bilinmiyorsa null olmalı."
          },
          { type: "null" }
        ]
      },
      detected_phrase: {
        anyOf: [
          {
            type: "string",
            description: "Metinde yakalanan kısa ifade veya parafraz."
          },
          { type: "null" }
        ]
      },
      meaning: {
        anyOf: [
          {
            type: "string",
            description: "Kullanıcıya kısa ve konuşmadan koparmayan açıklama."
          },
          { type: "null" }
        ]
      },
      social_tone: {
        anyOf: [
          {
            type: "string",
            description: "İfadenin sosyal tonu. Örn: mizahi, ironik, dramatik, iğneleyici, teknik."
          },
          { type: "null" }
        ]
      },
      suggested_reply: {
        anyOf: [
          {
            type: "string",
            description: "Kullanıcının doğal söyleyebileceği kısa ve mümkünse hafif esprili cevap önerisi."
          },
          { type: "null" }
        ]
      },
      short_audio_hint: {
        anyOf: [
          {
            type: "string",
            description: "Kulaklıktan okunacak maksimum 1-2 kısa cümlelik ipucu."
          },
          { type: "null" }
        ]
      }
    },
    required: [
      "has_reference",
      "confidence",
      "reference_type",
      "source",
      "detected_phrase",
      "meaning",
      "social_tone",
      "suggested_reply",
      "short_audio_hint"
    ]
  }
} as const;
