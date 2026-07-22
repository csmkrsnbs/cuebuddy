type EndpointName = "transcribe" | "analyze";

type UsageMetric = {
  endpoint: EndpointName;
  count: number;
  errors: number;
  totalDurationMs: number;
  lastUsedAt: string | null;
};

type UsageSnapshot = {
  startedAt: string;
  endpoints: Record<EndpointName, UsageMetric>;
  estimated: {
    transcribeAudioSeconds: number;
    analyzeInputChars: number;
    analyzeOutputChars: number;
  };
};

const usage: UsageSnapshot = {
  startedAt: new Date().toISOString(),
  endpoints: {
    transcribe: { endpoint: "transcribe", count: 0, errors: 0, totalDurationMs: 0, lastUsedAt: null },
    analyze: { endpoint: "analyze", count: 0, errors: 0, totalDurationMs: 0, lastUsedAt: null },
  },
  estimated: { transcribeAudioSeconds: 0, analyzeInputChars: 0, analyzeOutputChars: 0 },
};

export function recordEndpointUsage(input: { endpoint: EndpointName; durationMs: number; ok: boolean }) {
  const metric = usage.endpoints[input.endpoint];
  metric.count += 1;
  metric.totalDurationMs += input.durationMs;
  metric.lastUsedAt = new Date().toISOString();
  if (!input.ok) metric.errors += 1;
}

export function recordTranscriptionUsage(input: { approximateAudioSeconds: number }) {
  usage.estimated.transcribeAudioSeconds += Math.max(0, input.approximateAudioSeconds);
}

export function recordAnalyzeUsage(input: { inputChars: number; outputChars: number }) {
  usage.estimated.analyzeInputChars += Math.max(0, input.inputChars);
  usage.estimated.analyzeOutputChars += Math.max(0, input.outputChars);
}

export function getUsageSnapshot() {
  return { ...usage, endpoints: { transcribe: enrichMetric(usage.endpoints.transcribe), analyze: enrichMetric(usage.endpoints.analyze) } };
}

function enrichMetric(metric: UsageMetric) {
  return { ...metric, averageDurationMs: metric.count === 0 ? 0 : Math.round(metric.totalDurationMs / metric.count), errorRate: metric.count === 0 ? 0 : Number((metric.errors / metric.count).toFixed(4)) };
}
