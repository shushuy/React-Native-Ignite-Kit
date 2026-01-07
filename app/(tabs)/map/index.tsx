import { useCallback, useMemo } from "react";
import { Text, View } from "react-native";
import { useRouter } from "expo-router";

import Button from "@/components/Button";
import { useAuth } from "@/context/AuthContext";
import { useTheme } from "@/hooks/useTheme";
import { createMapScreenStyles } from "@/styles/MapScreen.styles";

export default function MapScreen() {
  const { colors } = useTheme();
  const styles = useMemo(() => createMapScreenStyles(colors), [colors]);
  const { logout } = useAuth();
  const router = useRouter();

  const handleLogout = useCallback(async () => {
    await logout();
    router.replace("/(auth)/login");
  }, [logout, router]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Map</Text>
      <Text style={styles.description}>Markers and place details will show here.</Text>
      <View style={styles.footer}>
        <Button label="Log out" onPress={handleLogout} />
      </View>
    </View>
  );
}
