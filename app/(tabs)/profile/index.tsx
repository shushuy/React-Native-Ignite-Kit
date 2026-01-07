import { useCallback, useMemo } from "react";
import { Text, View } from "react-native";
import { useRouter } from "expo-router";

import Button from "@/components/Button";
import { useAuth } from "@/context/AuthContext";
import { useTheme } from "@/hooks/useTheme";
import { createProfileScreenStyles } from "@/styles/ProfileScreen.styles";

export default function ProfileScreen() {
  const { colors } = useTheme();
  const styles = useMemo(() => createProfileScreenStyles(colors), [colors]);
  const { logout } = useAuth();
  const router = useRouter();

  const handleLogout = useCallback(async () => {
    await logout();
    router.replace("/(auth)/login");
  }, [logout, router]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <Text style={styles.description}>
        Account settings, plan info, and notifications will be managed here.
      </Text>
      <View style={styles.footer}>
        <Button label="Log out" onPress={handleLogout} />
      </View>
    </View>
  );
}
