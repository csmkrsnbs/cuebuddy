import { requestRecordingPermissionsAsync } from "expo-audio";

export async function requestMicrophonePermission(): Promise<boolean> {
  const permission = await requestRecordingPermissionsAsync();
  return permission.granted;
}
