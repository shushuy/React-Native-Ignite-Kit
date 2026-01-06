import { useCallback, useMemo } from "react";
import { Pressable, Text, View } from "react-native";
import { useRouter } from "expo-router";

import { useAuth } from "@/context/AuthContext";
import { useTheme } from "@/hooks/useTheme";
import { createLoginScreenStyles } from "@/styles/LoginScreen.styles";

export default function LoginScreen() {
  const { login } = useAuth();
  const { colors } = useTheme();
  const styles = useMemo(() => createLoginScreenStyles(colors), [colors]);
  const router = useRouter();

  const handleLogin = useCallback(async () => {
    await login();
    router.replace("/(tabs)");
  }, [login, router]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome back</Text>
      <Text style={styles.subtitle}>Sign in to continue to Ignite Kit.</Text>
      <Pressable onPress={handleLogin} style={styles.button}>
        <Text style={styles.buttonText}>Continue</Text>
      </Pressable>
    </View>
  );
}
