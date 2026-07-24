import { Pressable, Text, StyleSheet } from "react-native";
import { colors } from "../constants/colors";

type PrimaryButtonProps = {
  title: string;
  onPress: () => void;
  variant?: "primary" | "secondary" | "danger";
};

export function PrimaryButton({ title, onPress, variant = "primary" }: PrimaryButtonProps) {
  return (
    <Pressable onPress={onPress} style={[styles.button, variant === "secondary" && styles.secondary, variant === "danger" && styles.danger]}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: { backgroundColor: colors.primary, paddingVertical: 14, paddingHorizontal: 20, borderRadius: 16, alignItems: "center" },
  secondary: { backgroundColor: colors.surfaceSoft },
  danger: { backgroundColor: colors.danger },
  text: { color: colors.text, fontSize: 16, fontWeight: "700" },
});
