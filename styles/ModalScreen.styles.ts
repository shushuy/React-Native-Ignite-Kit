import { StyleSheet } from "react-native";

import type { ThemeColors } from "@/context/ThemeContext";

export const createModalScreenStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: colors.background,
    },
    title: {
      fontSize: 20,
      fontWeight: "bold",
      color: colors.text,
    },
    separator: {
      marginVertical: 30,
      height: 1,
      width: "80%",
      backgroundColor: colors.border,
    },
  });
