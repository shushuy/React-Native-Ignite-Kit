import { useEffect, useMemo, useRef } from "react";
import { AppState, Text, View } from "react-native";
import { useRouter, useSegments } from "expo-router";

import { useAuth } from "@/context/AuthContext";
import { useAuthGate } from "@/hooks/useAuthGate";
import { useTheme } from "@/hooks/useTheme";
import { createSplashScreenStyles } from "@/styles/SplashScreen.styles";
import { ROUTES } from "@/constants/routes";

export default function SplashScreen() {
  const { colors } = useTheme();
  const styles = useMemo(() => createSplashScreenStyles(colors), [colors]);
  const { token, isLoading } = useAuth();
  const { checkAuth } = useAuthGate();
  const router = useRouter();
  const segments = useSegments();
  const segmentsRef = useRef(segments);
  const hasRouted = useRef(false);
  const isCheckingAuth = useRef(false);
  const lastAuthCheckAt = useRef(0);
  const isLoadingRef = useRef(isLoading);

  const routeByAuth = (isAuthenticated: boolean, activeSegments = segmentsRef.current) => {
    const currentGroup = activeSegments[0];

    if (isAuthenticated && currentGroup !== "(tabs)") {
      router.replace(ROUTES.tabsChat);
      return;
    }

    if (!isAuthenticated && currentGroup !== "(auth)") {
      router.replace(ROUTES.authLogin);
    }
  };

  useEffect(() => {
    segmentsRef.current = segments;
  }, [segments]);

  useEffect(() => {
    isLoadingRef.current = isLoading;
  }, [isLoading]);

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

      if (isLoadingRef.current || isCheckingAuth.current) {
        return;
      }

      const now = Date.now();
      if (now - lastAuthCheckAt.current < 1000) {
        return;
      }

      isCheckingAuth.current = true;
      lastAuthCheckAt.current = now;

      try {
        const isAuthenticated = await checkAuth();
        routeByAuth(isAuthenticated);
      } finally {
        isCheckingAuth.current = false;
      }
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
