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
    calendar: {
      marginHorizontal: 16,
      borderRadius: 12,
      overflow: "hidden",
      borderWidth: 1,
      borderColor: colors.border,
      backgroundColor: colors.card,
    },
    agendaSection: {
      marginTop: 12,
      paddingHorizontal: 16,
      gap: 8,
    },
    agendaHeader: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    agendaHeaderTitle: {
      fontSize: 16,
      fontWeight: "600",
      color: colors.text,
    },
    agendaHeaderCount: {
      fontSize: 12,
      fontWeight: "600",
      textTransform: "uppercase",
      letterSpacing: 0.6,
      color: colors.mutedText,
    },
    agendaList: {
      gap: 8,
      paddingBottom: 12,
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
    agendaTimes: {
      gap: 4,
    },
    agendaTimeRow: {
      flexDirection: "row",
      alignItems: "center",
      gap: 6,
    },
    agendaTimeLabel: {
      fontSize: 12,
      fontWeight: "600",
      textTransform: "uppercase",
      color: colors.mutedText,
    },
    agendaTimeValue: {
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
