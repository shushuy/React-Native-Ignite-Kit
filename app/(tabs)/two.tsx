import { useMemo } from "react";
import { Text, View } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { useTheme } from "@/hooks/useTheme";
import { createTabTwoScreenStyles } from "@/styles/TabTwoScreen.styles";

export default function TabTwoScreen() {
  const { colors } = useTheme();
  const styles = useMemo(() => createTabTwoScreenStyles(colors), [colors]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>
      <View style={styles.separator} />
      <EditScreenInfo path="app/(tabs)/two.tsx" />
    </View>
  );
}
