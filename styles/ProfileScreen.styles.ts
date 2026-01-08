import { StyleSheet } from "react-native";

import type { ThemeColors } from "@/context/ThemeContext";

export const createProfileScreenStyles = (colors: ThemeColors) =>
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
    section: {
      borderRadius: 12,
      borderWidth: 1,
      borderColor: colors.border,
      backgroundColor: colors.card,
      padding: 16,
      marginBottom: 24,
    },
    sectionTitle: {
      fontSize: 16,
      fontWeight: "600",
      color: colors.text,
      marginBottom: 12,
    },
    statusRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 16,
    },
    statusLabel: {
      fontSize: 13,
      color: colors.mutedText,
    },
    statusValue: {
      fontSize: 13,
      fontWeight: "600",
      color: colors.text,
    },
    buttonStack: {
      marginTop: 4,
    },
    buttonRow: {
      marginBottom: 12,
    },
    footer: {
      marginTop: "auto",
    },
  });
