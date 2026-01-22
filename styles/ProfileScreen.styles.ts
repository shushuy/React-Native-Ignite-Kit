import { StyleSheet } from "react-native";

import type { ThemeColors } from "@/context/ThemeContext";

export const createProfileScreenStyles = (colors: ThemeColors) =>
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
    description: {
      fontSize: 14,
      color: colors.mutedText,
      lineHeight: 20,
      marginBottom: 24,
    },
    profileCard: {
      flexDirection: "row",
      alignItems: "center",
      padding: 16,
      borderRadius: 12,
      borderWidth: 1,
      borderColor: colors.border,
      backgroundColor: colors.card,
      marginBottom: 16,
    },
    avatar: {
      width: 56,
      height: 56,
      borderRadius: 28,
      marginRight: 12,
    },
    profileInfo: {
      flex: 1,
    },
    profileName: {
      fontSize: 16,
      fontWeight: "600",
      color: colors.text,
      marginBottom: 4,
    },
    profileEmail: {
      fontSize: 13,
      color: colors.mutedText,
    },
    planRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 8,
      paddingHorizontal: 4,
    },
    planLabel: {
      fontSize: 13,
      color: colors.mutedText,
    },
    planValue: {
      fontSize: 13,
      fontWeight: "600",
      color: colors.text,
    },
    section: {
      borderRadius: 12,
      borderWidth: 1,
      borderColor: colors.border,
      backgroundColor: colors.card,
      padding: 16,
      marginTop: 8,
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
