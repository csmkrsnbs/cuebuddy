import { Stack } from "expo-router";
import { colors } from "../src/constants/colors";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: colors.background },
        headerTintColor: colors.text,
        headerTitleStyle: { fontWeight: "700" },
        contentStyle: { backgroundColor: colors.background },
      }}
    >
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="onboarding" options={{ headerShown: false }} />
      <Stack.Screen name="privacy" options={{ title: "Gizlilik" }} />
      <Stack.Screen name="permissions" options={{ title: "İzinler" }} />
      <Stack.Screen name="home" options={{ headerShown: false }} />
      <Stack.Screen name="history" options={{ title: "Geçmiş" }} />
      <Stack.Screen name="settings" options={{ title: "Ayarlar" }} />
    </Stack>
  );
}
