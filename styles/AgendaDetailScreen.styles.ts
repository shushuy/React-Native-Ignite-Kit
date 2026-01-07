import { StyleSheet } from "react-native";

import type { ThemeColors } from "@/context/ThemeContext";

export const createAgendaDetailScreenStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      padding: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: "700",
      color: colors.text,
      marginBottom: 8,
    },
    subtitle: {
      fontSize: 14,
      color: colors.mutedText,
      marginBottom: 16,
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
      marginBottom: 14,
    },
    card: {
      backgroundColor: colors.card,
      borderRadius: 12,
      padding: 14,
      borderWidth: 1,
      borderColor: colors.border,
    },
  });
