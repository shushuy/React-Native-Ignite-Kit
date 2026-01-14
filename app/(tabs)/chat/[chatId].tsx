import { useCallback, useLayoutEffect, useMemo, useState } from "react";
import {
  FlatList,
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";
import { useLocalSearchParams, useNavigation, useRouter } from "expo-router";

import { getImageSource } from "@/services/assets";
import { loadChats, loadMessages } from "@/services/mock";
import { useTheme } from "@/hooks/useTheme";
import { createChatDetailScreenStyles } from "@/styles/ChatDetailScreen.styles";
import { formatTimestamp } from "@/utils/formatTimestamp";
import { ROUTES } from "@/constants/routes";

type MessageItem = ReturnType<typeof loadMessages>[number];

export default function ChatDetailScreen() {
  const { chatId } = useLocalSearchParams<{ chatId: string | string[] }>();
  const router = useRouter();
  const navigation = useNavigation();
  const { colors } = useTheme();
  const styles = useMemo(() => createChatDetailScreenStyles(colors), [colors]);
  const [inputValue, setInputValue] = useState("");
  const chatIdValue = Array.isArray(chatId) ? chatId[0] : chatId;
  const chatTitle = useMemo(() => {
    if (!chatIdValue) {
      return "Chat";
    }
    const chat = loadChats().find((item) => item.id === chatIdValue);
    return chat?.title ?? "Chat";
  }, [chatIdValue]);
  const [messages, setMessages] = useState(() =>
    loadMessages().filter((message) => message.chatId === chatIdValue)
  );

  useLayoutEffect(() => {
    navigation.setOptions({ title: chatTitle });
  }, [chatTitle, navigation]);

  const handleSend = useCallback(() => {
    const trimmed = inputValue.trim();
    if (!trimmed) {
      return;
    }

    const nextMessage: MessageItem = {
      id: `msg-${Date.now()}`,
      chatId: chatIdValue ?? "unknown",
      senderName: "You",
      text: trimmed,
      timestamp: new Date().toISOString(),
    };

    setMessages((prev) => [nextMessage, ...prev]);
    setInputValue("");
  }, [chatId, inputValue]);

  const handleImagePress = useCallback(
    (imageKey: string) => {
      router.push(ROUTES.chatImage(imageKey));
    },
    [router]
  );

  const renderItem = useCallback(
    ({ item }: { item: MessageItem }) => (
      <View style={styles.messageCard}>
        <Text style={styles.sender}>{item.senderName}</Text>
        <Text style={styles.messageText}>{item.text}</Text>
        {item.imageKey ? (
          <Pressable onPress={() => handleImagePress(item.imageKey)}>
            <Image source={getImageSource(item.imageKey)} style={styles.messageImage} />
          </Pressable>
        ) : null}
        <Text style={styles.timestamp}>{formatTimestamp(item.timestamp)}</Text>
      </View>
    ),
    [handleImagePress, styles]
  );

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 0}
    >
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
        style={styles.list}
        inverted
      />
      <View style={styles.composer}>
        <View style={styles.composerRow}>
          <TextInput
            style={styles.input}
            value={inputValue}
            onChangeText={setInputValue}
            placeholder="Type a message"
            placeholderTextColor={colors.mutedText}
            multiline
            textAlignVertical="top"
          />
          <Pressable onPress={handleSend} style={styles.sendButton}>
            <Text style={styles.sendButtonText}>Send</Text>
          </Pressable>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
