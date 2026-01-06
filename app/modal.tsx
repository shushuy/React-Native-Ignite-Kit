import { StatusBar } from "expo-status-bar";
import { useMemo } from "react";
import { Platform, Text, View } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { useTheme } from "@/hooks/useTheme";
import { createModalScreenStyles } from "@/styles/ModalScreen.styles";

export default function ModalScreen() {
  const { colors } = useTheme();
  const styles = useMemo(() => createModalScreenStyles(colors), [colors]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Modal</Text>
      <View style={styles.separator} />
      <EditScreenInfo path="app/modal.tsx" />

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
}
