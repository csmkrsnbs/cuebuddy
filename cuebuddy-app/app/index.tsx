import { View, Text, StyleSheet } from "react-native";
import { router } from "expo-router";
import { colors } from "../src/constants/colors";
import { PrimaryButton } from "../src/components/PrimaryButton";

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>🎧</Text>
      <Text style={styles.title}>CueBuddy</Text>
      <Text style={styles.subtitle}>Göndermeyi yakala. Şakayı anla. Cevabı bul.</Text>
      <View style={styles.buttonWrap}>
        <PrimaryButton title="Başla" onPress={() => router.push("/onboarding")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, alignItems: "center", justifyContent: "center", padding: 24 },
  logo: { fontSize: 64, marginBottom: 16 },
  title: { color: colors.text, fontSize: 42, fontWeight: "900" },
  subtitle: { color: colors.textMuted, fontSize: 18, marginTop: 10, textAlign: "center", lineHeight: 26 },
  buttonWrap: { width: "100%", marginTop: 42 },
});
