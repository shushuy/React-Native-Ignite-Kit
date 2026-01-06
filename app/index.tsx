import { useEffect, useMemo, useRef } from "react";
import { AppState, Text, View } from "react-native";
import { useRouter, useSegments } from "expo-router";

import { useAuth } from "@/context/AuthContext";
import { useAuthGate } from "@/hooks/useAuthGate";
import { useTheme } from "@/hooks/useTheme";
import { createSplashScreenStyles } from "@/styles/SplashScreen.styles";

export default function SplashScreen() {
  const { colors } = useTheme();
  const styles = useMemo(() => createSplashScreenStyles(colors), [colors]);
  const { token, isLoading } = useAuth();
  const { checkAuth } = useAuthGate();
  const router = useRouter();
  const segments = useSegments();
  const segmentsRef = useRef(segments);
  const hasRouted = useRef(false);

  const routeByAuth = (isAuthenticated: boolean, activeSegments = segmentsRef.current) => {
    const currentGroup = activeSegments[0];

    if (isAuthenticated && currentGroup !== "(tabs)") {
      router.replace("/(tabs)");
      return;
    }

    if (!isAuthenticated && currentGroup !== "(auth)") {
      router.replace("/(auth)/login");
    }
  };

  useEffect(() => {
    segmentsRef.current = segments;
  }, [segments]);

  useEffect(() => {
    if (hasRouted.current) {
      return;
    }

    if (isLoading) {
      return;
    }

    hasRouted.current = true;
    routeByAuth(Boolean(token));
  }, [isLoading, token, segments]);

  useEffect(() => {
    const subscription = AppState.addEventListener("change", async (nextState) => {
      if (nextState !== "active") {
        return;
      }

      const isAuthenticated = await checkAuth();
      routeByAuth(isAuthenticated);
    });

    return () => {
      subscription.remove();
    };
  }, [checkAuth, segments]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ignite Kit</Text>
      <Text style={styles.subtitle}>Checking session...</Text>
    </View>
  );
}
