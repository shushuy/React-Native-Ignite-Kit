import { StyleSheet } from "react-native";

import type { ThemeColors } from "@/context/ThemeContext";

export const createMapDetailScreenStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      padding: 20,
    },
    image: {
      width: "100%",
      height: 220,
      borderRadius: 16,
      marginBottom: 16,
    },
    title: {
      fontSize: 24,
      fontWeight: "700",
      color: colors.text,
      marginBottom: 6,
    },
    subtitle: {
      fontSize: 14,
      color: colors.mutedText,
      marginBottom: 12,
    },
    label: {
      fontSize: 12,
      textTransform: "uppercase",
      letterSpacing: 0.6,
      color: colors.mutedText,
      marginBottom: 4,
    },
    value: {
      fontSize: 15,
      color: colors.text,
      marginBottom: 12,
    },
    card: {
      backgroundColor: colors.card,
      borderRadius: 12,
      padding: 14,
      borderWidth: 1,
      borderColor: colors.border,
    },
  });
