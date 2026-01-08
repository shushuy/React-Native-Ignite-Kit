import { StyleSheet } from "react-native";

import type { ThemeColors } from "@/context/ThemeContext";

export const createAgendaDetailScreenStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      padding: 16,
      gap: 16,
    },
    title: {
      fontSize: 22,
      fontWeight: "700",
      color: colors.text,
    },
    subtitle: {
      fontSize: 14,
      color: colors.mutedText,
    },
    label: {
      fontSize: 14,
      fontWeight: "600",
      color: colors.mutedText,
    },
    value: {
      fontSize: 14,
      color: colors.text,
    },
    card: {
      borderRadius: 12,
      borderWidth: 1,
      borderColor: colors.border,
      padding: 16,
      backgroundColor: colors.card,
      gap: 12,
    },
    row: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
  });
