import AsyncStorage from "@react-native-async-storage/async-storage";
import { CueHint } from "../types/cue";
import { storageKeys } from "./storageKeys";

const MAX_HISTORY_ITEMS = 100;

export async function getHintHistory(): Promise<CueHint[]> {
  const raw = await AsyncStorage.getItem(storageKeys.history);
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw) as CueHint[];
    if (!Array.isArray(parsed)) return [];
    return parsed.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  } catch {
    return [];
  }
}

export async function addHintToHistory(hint: CueHint): Promise<CueHint[]> {
  const current = await getHintHistory();
  const withoutDuplicate = current.filter((item) => item.id !== hint.id);
  const next = [hint, ...withoutDuplicate].slice(0, MAX_HISTORY_ITEMS);
  await AsyncStorage.setItem(storageKeys.history, JSON.stringify(next));
  return next;
}

export async function clearHintHistory(): Promise<void> {
  await AsyncStorage.removeItem(storageKeys.history);
}
