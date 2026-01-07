import { StyleSheet } from "react-native";

import type { ThemeColors } from "@/context/ThemeContext";

export const createButtonStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    button: {
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: 12,
      borderRadius: 10,
      backgroundColor: colors.primary,
    },
    buttonPressed: {
      opacity: 0.9,
    },
    buttonDisabled: {
      backgroundColor: colors.border,
    },
    buttonText: {
      color: colors.card,
      fontSize: 16,
      fontWeight: "600",
    },
    buttonTextDisabled: {
      color: colors.mutedText,
    },
  });
