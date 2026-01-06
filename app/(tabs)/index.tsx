import { useMemo } from "react";
import { Text, View } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { useTheme } from "@/hooks/useTheme";
import { createTabOneScreenStyles } from "@/styles/TabOneScreen.styles";

export default function TabOneScreen() {
  const { colors } = useTheme();
  const styles = useMemo(() => createTabOneScreenStyles(colors), [colors]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
    </View>
  );
}
