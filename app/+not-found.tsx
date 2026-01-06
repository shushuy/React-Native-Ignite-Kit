import { Link, Stack } from "expo-router";
import { useMemo } from "react";
import { Text, View } from "react-native";

import { useTheme } from "@/hooks/useTheme";
import { createNotFoundScreenStyles } from "@/styles/NotFoundScreen.styles";

export default function NotFoundScreen() {
  const { colors } = useTheme();
  const styles = useMemo(() => createNotFoundScreenStyles(colors), [colors]);

  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <View style={styles.container}>
        <Text style={styles.title}>This screen doesn't exist.</Text>

        <Link href="/" style={styles.link}>
          <Text style={styles.linkText}>Go to home screen!</Text>
        </Link>
      </View>
    </>
  );
}
