import { StyleSheet } from "react-native";

import type { ThemeColors } from "@/context/ThemeContext";

export const createChatImageScreenStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      alignItems: "center",
      justifyContent: "center",
      padding: 16,
    },
    image: {
      width: "100%",
      height: "80%",
      borderRadius: 12,
    },
  });
