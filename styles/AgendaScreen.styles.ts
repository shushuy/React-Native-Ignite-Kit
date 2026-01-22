import { StyleSheet } from "react-native";

import type { ThemeColors } from "@/context/ThemeContext";

export const createAgendaScreenStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      paddingTop: 20,
      paddingBottom: 16,
      gap: 12,
    },
    header: {
      paddingHorizontal: 20,
      gap: 4,
    },
    title: {
      fontSize: 24,
      fontWeight: "700",
      color: colors.text,
    },
    subtitle: {
      fontSize: 14,
      color: colors.mutedText,
      lineHeight: 20,
    },
    emptyNotice: {
      marginHorizontal: 20,
      padding: 12,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: colors.border,
      backgroundColor: colors.card,
    },
    emptyNoticeText: {
      fontSize: 13,
      color: colors.mutedText,
      textAlign: "center",
      lineHeight: 18,
    },
    agendaItem: {
      padding: 14,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: colors.border,
      backgroundColor: colors.card,
      position: "relative",
      overflow: "hidden",
      gap: 4,
    },
    agendaRow: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    agendaTime: {
      fontSize: 13,
      fontWeight: "600",
      color: colors.text,
    },
    agendaChip: {
      height: 32,
      width: 32,
      borderRadius: 16,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: colors.primary,
    },
    agendaChipText: {
      fontSize: 12,
      fontWeight: "700",
      color: colors.card,
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
