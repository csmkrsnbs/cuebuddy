import * as FileSystem from "expo-file-system";

export async function getAudioFileSizeBytes(uri: string): Promise<number> {
  const info = await FileSystem.getInfoAsync(uri, { size: true });
  if (!info.exists) return 0;
  return info.size ?? 0;
}
