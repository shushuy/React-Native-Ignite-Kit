import { useCallback, useMemo } from "react";
import { Text, View } from "react-native";
import { useRouter } from "expo-router";

import Button from "@/components/Button";
import { useAuth } from "@/context/AuthContext";
import { useTheme } from "@/hooks/useTheme";
import { createChatScreenStyles } from "@/styles/ChatScreen.styles";

export default function ChatScreen() {
  const { colors } = useTheme();
  const styles = useMemo(() => createChatScreenStyles(colors), [colors]);
  const { logout } = useAuth();
  const router = useRouter();

  const handleLogout = useCallback(async () => {
    await logout();
    router.replace("/(auth)/login");
  }, [logout, router]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chat</Text>
      <Text style={styles.description}>Chats and message threads will live here.</Text>
      <View style={styles.footer}>
        <Button label="Log out" onPress={handleLogout} />
      </View>
    </View>
  );
}
