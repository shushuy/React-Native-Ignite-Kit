import { StyleSheet } from "react-native";

import type { ThemeColors } from "@/context/ThemeContext";

export const createChatScreenStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      padding: 24,
    },
    title: {
      fontSize: 24,
      fontWeight: "700",
      color: colors.text,
      marginBottom: 8,
    },
    description: {
      fontSize: 14,
      color: colors.mutedText,
      marginBottom: 24,
    },
    footer: {
      marginTop: "auto",
    },
  });
