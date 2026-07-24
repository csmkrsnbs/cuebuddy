import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../constants/colors";

type Option<T extends string> = { label: string; value: T };

type OptionChipsProps<T extends string> = {
  options: Option<T>[];
  value: T;
  onChange: (value: T) => void;
};

export function OptionChips<T extends string>({ options, value, onChange }: OptionChipsProps<T>) {
  return (
    <View style={styles.container}>
      {options.map((option) => {
        const selected = option.value === value;
        return (
          <Pressable key={option.value} onPress={() => onChange(option.value)} style={[styles.chip, selected && styles.selectedChip]}>
            <Text style={[styles.label, selected && styles.selectedLabel]}>{option.label}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: "row", flexWrap: "wrap", gap: 8 },
  chip: { backgroundColor: colors.surfaceSoft, borderColor: colors.border, borderWidth: 1, borderRadius: 999, paddingHorizontal: 12, paddingVertical: 9 },
  selectedChip: { backgroundColor: colors.primary, borderColor: colors.primary },
  label: { color: colors.textMuted, fontSize: 14, fontWeight: "700" },
  selectedLabel: { color: colors.text },
});
