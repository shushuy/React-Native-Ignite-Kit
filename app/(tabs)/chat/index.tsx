import { useCallback, useMemo } from "react";
import { FlatList, Image, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { type Href, useRouter } from "expo-router";

import { getAvatarSource } from "@/services/assets";
import { loadChats } from "@/services/mock";
import { useTheme } from "@/hooks/useTheme";
import { createChatListScreenStyles } from "@/styles/ChatListScreen.styles";
import { ROUTES } from "@/constants/routes";

type ChatItem = ReturnType<typeof loadChats>[number];

export default function ChatScreen() {
  const { colors } = useTheme();
  const styles = useMemo(() => createChatListScreenStyles(colors), [colors]);
  const router = useRouter();
  const chats = useMemo(() => loadChats(), []);

  const handlePress = useCallback(
    (chatId: string) => {
      router.push(ROUTES.chatDetail(chatId) as Href);
    },
    [router]
  );

  const renderItem = useCallback(
    ({ item }: { item: ChatItem }) => (
      <Pressable onPress={() => handlePress(item.id)} style={styles.row}>
        <Image source={getAvatarSource(item.avatarKey)} style={styles.avatar} />
        <View style={styles.rowBody}>
          <Text style={styles.rowTitle}>{item.title}</Text>
          <Text style={styles.rowSubtitle}>{item.lastMessage}</Text>
        </View>
      </Pressable>
    ),
    [handlePress, styles]
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Chat</Text>
        <Text style={styles.subtitle}>Pick a thread to continue the conversation.</Text>
      </View>
      <FlatList
        data={chats}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
}
