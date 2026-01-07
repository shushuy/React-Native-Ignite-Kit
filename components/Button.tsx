import { useMemo } from "react";
import { Pressable, Text } from "react-native";

import { useTheme } from "@/hooks/useTheme";
import { createButtonStyles } from "@/styles/Button.styles";

type ButtonProps = {
  label: string;
  onPress: () => void | Promise<void>;
  disabled?: boolean;
};

export default function Button({ label, onPress, disabled = false }: ButtonProps) {
  const { colors } = useTheme();
  const styles = useMemo(() => createButtonStyles(colors), [colors]);

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.button,
        disabled && styles.buttonDisabled,
        pressed && !disabled && styles.buttonPressed,
      ]}
    >
      <Text style={[styles.buttonText, disabled && styles.buttonTextDisabled]}>{label}</Text>
    </Pressable>
  );
}
