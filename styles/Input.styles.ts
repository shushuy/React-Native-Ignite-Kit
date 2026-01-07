import { StyleSheet } from "react-native";

import type { ThemeColors } from "@/context/ThemeContext";

export const createInputStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    field: {
      marginBottom: 16,
    },
    label: {
      fontSize: 14,
      color: colors.text,
      marginBottom: 6,
    },
    input: {
      borderWidth: 1,
      borderColor: colors.border,
      borderRadius: 10,
      paddingHorizontal: 12,
      paddingVertical: 10,
      color: colors.text,
      backgroundColor: colors.card,
    },
  });
