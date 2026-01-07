import { StyleSheet } from "react-native";

import type { ThemeColors } from "@/context/ThemeContext";

export const createChatDetailScreenStyles = (colors: ThemeColors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    listContent: {
      padding: 20,
      paddingBottom: 120,
    },
    messageCard: {
      padding: 12,
      borderRadius: 12,
      backgroundColor: colors.card,
      borderWidth: 1,
      borderColor: colors.border,
      marginBottom: 12,
    },
    sender: {
      fontSize: 12,
      color: colors.mutedText,
      marginBottom: 6,
    },
    messageText: {
      fontSize: 15,
      color: colors.text,
      marginBottom: 8,
    },
    timestamp: {
      fontSize: 11,
      color: colors.mutedText,
      textAlign: "right",
    },
    messageImage: {
      width: "100%",
      height: 180,
      borderRadius: 10,
      marginBottom: 8,
    },
    composer: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      padding: 16,
      borderTopWidth: 1,
      borderTopColor: colors.border,
      backgroundColor: colors.card,
    },
    composerRow: {
      flexDirection: "row",
      alignItems: "center",
    },
    input: {
      flex: 1,
      borderWidth: 1,
      borderColor: colors.border,
      borderRadius: 10,
      paddingHorizontal: 12,
      paddingVertical: 10,
      backgroundColor: colors.background,
      color: colors.text,
      marginRight: 10,
    },
    sendButton: {
      paddingHorizontal: 16,
      paddingVertical: 10,
      borderRadius: 10,
      backgroundColor: colors.primary,
    },
    sendButtonText: {
      color: colors.card,
      fontWeight: "600",
    },
  });
