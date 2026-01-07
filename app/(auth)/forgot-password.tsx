import { useCallback, useMemo, useState } from "react";
import { Alert, KeyboardAvoidingView, Platform, Pressable, Text, View } from "react-native";
import { useRouter } from "expo-router";

import Button from "@/components/Button";
import Input from "@/components/Input";
import { useTheme } from "@/hooks/useTheme";
import { createForgotPasswordScreenStyles } from "@/styles/ForgotPasswordScreen.styles";

export default function ForgotPasswordScreen() {
  const { colors } = useTheme();
  const styles = useMemo(() => createForgotPasswordScreenStyles(colors), [colors]);
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleSubmit = useCallback(() => {
    Alert.alert("Reset link sent", "If an account exists, a reset link was sent.");
    router.replace("/(auth)/login");
  }, [router]);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View style={styles.inner}>
        <Text style={styles.title}>Reset Password</Text>
        <Text style={styles.subtitle}>We'll email you a link to reset your password.</Text>
        <Input
          label="Email"
          value={email}
          onChangeText={setEmail}
          placeholder="you@example.com"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Button label="Send Reset Link" onPress={handleSubmit} disabled={email.trim().length === 0} />
        <Pressable onPress={() => router.replace("/(auth)/login")}>
          <Text style={styles.linkText}>Back to Login</Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
}
