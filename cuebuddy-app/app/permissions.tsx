import { View, Text, StyleSheet, Alert } from "react-native";
import { router } from "expo-router";
import { colors } from "../src/constants/colors";
import { PrimaryButton } from "../src/components/PrimaryButton";
import { requestMicrophonePermission } from "../src/services/permissionService";

export default function PermissionsScreen() {
  async function handlePermissionRequest() {
    const granted = await requestMicrophonePermission();
    if (!granted) {
      Alert.alert("İzin verilmedi", "Mikrofon izni olmadan CueBuddy konuşmayı analiz edemez. İzni daha sonra telefon ayarlarından verebilirsin.");
      return;
    }
    router.replace("/home");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.icon}>🎙️</Text>
      <Text style={styles.title}>Mikrofon izni gerekli</Text>
      <Text style={styles.body}>CueBuddy’nin konuşmadaki göndermeleri, şakaları ve sosyal bağlamı analiz edebilmesi için mikrofon iznine ihtiyacı var.</Text>
      <Text style={styles.note}>CueBuddy konuşmaları varsayılan olarak kaydetmez. Kısa ses parçaları yalnızca bağlam analizi için işlenir.</Text>
      <PrimaryButton title="Mikrofon izni ver" onPress={handlePermissionRequest} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, padding: 24, justifyContent: "center" },
  icon: { fontSize: 56, marginBottom: 18 },
  title: { color: colors.text, fontSize: 34, fontWeight: "900", marginBottom: 18 },
  body: { color: colors.textMuted, fontSize: 17, lineHeight: 26, marginBottom: 16 },
  note: { color: colors.warning, fontSize: 14, lineHeight: 21, marginBottom: 28 },
});
