import { StyleSheet } from "react-native";

import type { ThemeColors } from "@/context/ThemeContext";

export const createSplashScreenStyles = (colors: ThemeColors) =>
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
      marginBottom: 8,
    },
    subtitle: {
      fontSize: 14,
      color: colors.mutedText,
    },
  });
