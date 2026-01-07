import { useCallback, useMemo, useState } from "react";
import { KeyboardAvoidingView, Platform, Pressable, Text, View } from "react-native";
import { useRouter } from "expo-router";

import Button from "@/components/Button";
import Input from "@/components/Input";
import { useAuth } from "@/context/AuthContext";
import { useTheme } from "@/hooks/useTheme";
import { createLoginScreenStyles } from "@/styles/LoginScreen.styles";

export default function LoginScreen() {
  const { login } = useAuth();
  const { colors } = useTheme();
  const styles = useMemo(() => createLoginScreenStyles(colors), [colors]);
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = useCallback(async () => {
    await login();
    router.replace("/(tabs)");
  }, [login, router]);

  const isDisabled = email.trim().length === 0 || password.trim().length === 0;

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View style={styles.inner}>
        <Text style={styles.title}>Welcome back</Text>
        <Text style={styles.subtitle}>Sign in to continue to Ignite Kit.</Text>
        <View style={styles.form}>
          <Input
            label="Email"
            value={email}
            onChangeText={setEmail}
            placeholder="you@example.com"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <Input
            label="Password"
            value={password}
            onChangeText={setPassword}
            placeholder="••••••••"
            secureTextEntry
          />
          <View style={styles.actionRow}>
            <Pressable onPress={() => router.push("/(auth)/forgot-password")}>
              <Text style={styles.linkText}>Forgot Password?</Text>
            </Pressable>
          </View>
          <Button label="Login" onPress={handleLogin} disabled={isDisabled} />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
