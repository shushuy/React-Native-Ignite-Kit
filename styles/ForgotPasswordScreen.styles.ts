import { StyleSheet } from "react-native";

import type { ThemeColors } from "@/context/ThemeContext";

export const createForgotPasswordScreenStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      padding: 24,
    },
    inner: {
      flex: 1,
      justifyContent: "center",
    },
    title: {
      fontSize: 26,
      fontWeight: "700",
      color: colors.text,
      marginBottom: 8,
    },
    subtitle: {
      fontSize: 14,
      color: colors.mutedText,
      marginBottom: 24,
    },
    linkText: {
      color: colors.primary,
      fontSize: 14,
      fontWeight: "600",
      marginTop: 16,
    },
  });
