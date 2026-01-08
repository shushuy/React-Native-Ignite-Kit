import { StyleSheet } from "react-native";

import type { ThemeColors } from "@/context/ThemeContext";

export const createAgendaScreenStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      paddingTop: 16,
      paddingBottom: 16,
      gap: 8,
    },
    header: {
      paddingHorizontal: 16,
      gap: 4,
    },
    title: {
      fontSize: 22,
      fontWeight: "700",
      color: colors.text,
    },
    subtitle: {
      fontSize: 14,
      color: colors.mutedText,
    },
    agendaItem: {
      padding: 12,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: colors.border,
      backgroundColor: colors.card,
      position: "relative",
      overflow: "hidden",
      gap: 4,
    },
    agendaTime: {
      fontSize: 13,
      fontWeight: "600",
      color: colors.text,
    },
    agendaTitle: {
      fontSize: 15,
      fontWeight: "600",
      color: colors.text,
    },
    agendaLocation: {
      fontSize: 13,
      color: colors.mutedText,
    },
    agendaEmpty: {
      padding: 12,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: colors.border,
      backgroundColor: colors.background,
    },
    agendaEmptyText: {
      fontSize: 13,
      color: colors.mutedText,
    },
  });
