import { useCallback, useState } from "react";
import { Alert, FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { useFocusEffect } from "expo-router";
import { colors } from "../src/constants/colors";
import { CueHint } from "../src/types/cue";
import { clearHintHistory, getHintHistory } from "../src/storage/historyStorage";

export default function HistoryScreen() {
  const [history, setHistory] = useState<CueHint[]>([]);
  useFocusEffect(useCallback(() => { loadHistory(); }, []));

  async function loadHistory() {
    const stored = await getHintHistory();
    setHistory(stored);
  }

  function handleClearHistory() {
    Alert.alert("Geçmişi temizle", "Kaydedilmiş tüm ipuçları cihazdan silinecek.", [
      { text: "Vazgeç", style: "cancel" },
      { text: "Temizle", style: "destructive", onPress: async () => { await clearHintHistory(); setHistory([]); } },
    ]);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View><Text style={styles.title}>Geçmiş ipuçları</Text><Text style={styles.subtitle}>Cihazda kayıtlı {history.length} ipucu</Text></View>
        {history.length > 0 && <Pressable onPress={handleClearHistory} style={styles.clearButton}><Text style={styles.clearButtonText}>Temizle</Text></Pressable>}
      </View>
      <FlatList
        data={history}
        keyExtractor={(item) => item.id}
        contentContainerStyle={history.length ? styles.list : styles.emptyList}
        ListEmptyComponent={<View style={styles.emptyCard}><Text style={styles.emptyTitle}>Geçmiş boş</Text><Text style={styles.emptyBody}>Geçmişi kaydet ayarı açıksa, güven eşiğini geçen ipuçları burada görünecek.</Text></View>}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <View style={styles.itemHeader}><Text style={styles.source}>{item.source ?? "Bilinmeyen kaynak"}</Text><Text style={styles.confidence}>%{Math.round(item.confidence * 100)}</Text></View>
            <Text style={styles.phrase}>“{item.detectedPhrase}”</Text>
            {item.meaning && <Text style={styles.meaning}>{item.meaning}</Text>}
            {item.suggestedReply && <Text style={styles.reply}>Cevap: “{item.suggestedReply}”</Text>}
            <Text style={styles.date}>{new Date(item.createdAt).toLocaleString("tr-TR")}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, padding: 24 },
  header: { marginBottom: 18, flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: 12 },
  title: { color: colors.text, fontSize: 26, fontWeight: "900" },
  subtitle: { color: colors.textMuted, fontSize: 14, marginTop: 4 },
  clearButton: { backgroundColor: colors.surfaceSoft, borderColor: colors.border, borderWidth: 1, borderRadius: 14, paddingHorizontal: 12, paddingVertical: 9 },
  clearButtonText: { color: colors.danger, fontSize: 14, fontWeight: "800" },
  list: { gap: 14, paddingBottom: 32 },
  emptyList: { flexGrow: 1, justifyContent: "center" },
  item: { backgroundColor: colors.surface, borderColor: colors.border, borderWidth: 1, borderRadius: 20, padding: 16 },
  itemHeader: { flexDirection: "row", justifyContent: "space-between", gap: 12, marginBottom: 6 },
  source: { color: colors.primarySoft, fontSize: 14, fontWeight: "800", flex: 1 },
  confidence: { color: colors.success, fontSize: 14, fontWeight: "900" },
  phrase: { color: colors.text, fontSize: 18, fontWeight: "800", marginBottom: 8 },
  meaning: { color: colors.textMuted, fontSize: 15, lineHeight: 22 },
  reply: { color: colors.text, fontSize: 15, lineHeight: 22, marginTop: 10, fontWeight: "700" },
  date: { color: colors.textMuted, fontSize: 12, marginTop: 12 },
  emptyCard: { backgroundColor: colors.surface, borderColor: colors.border, borderWidth: 1, borderRadius: 24, padding: 20 },
  emptyTitle: { color: colors.text, fontSize: 22, fontWeight: "900", marginBottom: 8 },
  emptyBody: { color: colors.textMuted, fontSize: 15, lineHeight: 22 },
});
