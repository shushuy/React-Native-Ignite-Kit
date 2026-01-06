import { StyleSheet } from "react-native";

import type { ThemeColors } from "@/context/ThemeContext";

export const createLoginScreenStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: colors.background,
      padding: 24,
    },
    title: {
      fontSize: 22,
      fontWeight: "600",
      color: colors.text,
      marginBottom: 12,
    },
    subtitle: {
      fontSize: 14,
      color: colors.mutedText,
      textAlign: "center",
    },
    button: {
      marginTop: 20,
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 8,
      backgroundColor: colors.primary,
    },
    buttonText: {
      color: colors.card,
      fontWeight: "600",
    },
  });
