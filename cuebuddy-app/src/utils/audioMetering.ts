export type MaybeMeteringStatus = {
  metering?: number;
  isRecording?: boolean;
  durationMillis?: number;
};

export async function safeGetRecorderMetering(audioRecorder: unknown): Promise<number | null> {
  try {
    const maybeRecorder = audioRecorder as {
      getStatus?: () => MaybeMeteringStatus | Promise<MaybeMeteringStatus>;
      getStatusAsync?: () => Promise<MaybeMeteringStatus>;
    };

    let status: MaybeMeteringStatus | null = null;

    if (typeof maybeRecorder.getStatus === "function") {
      status = await maybeRecorder.getStatus();
    } else if (typeof maybeRecorder.getStatusAsync === "function") {
      status = await maybeRecorder.getStatusAsync();
    }

    const metering = status?.metering;
    if (typeof metering !== "number" || !Number.isFinite(metering)) return null;
    return metering;
  } catch {
    return null;
  }
}
