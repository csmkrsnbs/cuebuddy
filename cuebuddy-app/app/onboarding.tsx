import { View, Text, StyleSheet } from "react-native";
import { router } from "expo-router";
import { colors } from "../src/constants/colors";
import { PrimaryButton } from "../src/components/PrimaryButton";

export default function OnboardingScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.eyebrow}>CueBuddy ne yapar?</Text>
      <Text style={styles.title}>Konuşmadaki göndermeyi yakalar, şakayı açıklar, sana cevap önerir.</Text>
      <Text style={styles.body}>
        Film, dizi, oyun, meme, teknik jargon veya günlük sosyal imaları kaçırdığında CueBuddy kısa açıklama ve doğal cevap ipucuyla seni sohbette tutar.
      </Text>
      <View style={styles.steps}>
        <Text style={styles.step}>1. Konuşmayı kısa parçalar halinde dinler</Text>
        <Text style={styles.step}>2. Gönderme ve sosyal bağlamı analiz eder</Text>
        <Text style={styles.step}>3. Kulağına kısa ipucu ve cevap önerisi verir</Text>
      </View>
      <PrimaryButton title="Devam" onPress={() => router.push("/privacy")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, padding: 24, justifyContent: "center" },
  eyebrow: { color: colors.primarySoft, fontSize: 15, fontWeight: "800", marginBottom: 12 },
  title: { color: colors.text, fontSize: 32, fontWeight: "900", lineHeight: 39 },
  body: { color: colors.textMuted, fontSize: 17, lineHeight: 26, marginTop: 18 },
  steps: { backgroundColor: colors.surface, borderColor: colors.border, borderWidth: 1, borderRadius: 20, padding: 18, marginVertical: 32, gap: 10 },
  step: { color: colors.text, fontSize: 16, fontWeight: "600" },
});
