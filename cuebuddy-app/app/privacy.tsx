import { View, Text, StyleSheet } from "react-native";
import { router } from "expo-router";
import { colors } from "../src/constants/colors";
import { PrimaryButton } from "../src/components/PrimaryButton";

export default function PrivacyScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.icon}>🔒</Text>
      <Text style={styles.title}>Gizlilik önce gelir.</Text>
      <Text style={styles.body}>
        CueBuddy konuşmaları varsayılan olarak kaydetmez. Yalnızca kısa konuşma parçalarını bağlam ve gönderme analizi için işler.
      </Text>
      <Text style={styles.body}>
        Dinlemeyi istediğin zaman durdurabilirsin. Mikrofon açıkken ekranda açıkça gösterilir.
      </Text>
      <PrimaryButton title="Anladım, devam et" onPress={() => router.push("/permissions")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, padding: 24, justifyContent: "center" },
  icon: { fontSize: 56, marginBottom: 18 },
  title: { color: colors.text, fontSize: 34, fontWeight: "900", marginBottom: 18 },
  body: { color: colors.textMuted, fontSize: 17, lineHeight: 26, marginBottom: 16 },
});
