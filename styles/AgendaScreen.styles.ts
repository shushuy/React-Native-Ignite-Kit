import { StyleSheet } from "react-native";

import type { ThemeColors } from "@/context/ThemeContext";

export const createAgendaScreenStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      paddingHorizontal: 20,
      paddingBottom: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: "700",
      color: colors.text,
      marginBottom: 4,
    },
    subtitle: {
      fontSize: 14,
      color: colors.mutedText,
      marginBottom: 16,
    },
    calendar: {
      borderRadius: 12,
      overflow: "hidden",
      borderWidth: 1,
      borderColor: colors.border,
      backgroundColor: colors.card,
    },
    listTitle: {
      marginTop: 20,
      marginBottom: 10,
      fontSize: 16,
      fontWeight: "600",
      color: colors.text,
    },
    eventRow: {
      paddingVertical: 12,
      borderBottomWidth: 1,
      borderBottomColor: colors.border,
    },
    eventTitle: {
      fontSize: 15,
      fontWeight: "600",
      color: colors.text,
      marginBottom: 4,
    },
    eventMeta: {
      fontSize: 13,
      color: colors.mutedText,
    },
  });
