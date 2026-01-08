import { StyleSheet } from "react-native";

import type { ThemeColors } from "@/context/ThemeContext";

export const createShiftBarStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    container: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: 6,
    },
    bar: {
      position: "absolute",
      top: 0,
      height: 6,
      backgroundColor: colors.primary,
      opacity: 0.2,
    },
  });
