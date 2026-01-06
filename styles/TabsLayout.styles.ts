import { StyleSheet } from "react-native";

import type { ThemeColors } from "@/context/ThemeContext";

export const createTabsLayoutStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    tabBar: {
      backgroundColor: colors.card,
      borderTopColor: colors.border,
    },
    tabBarIcon: {
      marginBottom: -3,
    },
    headerIcon: {
      marginRight: 15,
    },
    headerIconPressed: {
      opacity: 0.5,
    },
  });
