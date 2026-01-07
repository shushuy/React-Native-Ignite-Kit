import { useMemo } from "react";
import { Image, View } from "react-native";
import { useLocalSearchParams } from "expo-router";

import { getImageSource } from "@/services/assets";
import { useTheme } from "@/hooks/useTheme";
import { createChatImageScreenStyles } from "@/styles/ChatImageScreen.styles";

export default function ChatImageScreen() {
  const { imageKey } = useLocalSearchParams<{ imageKey: string }>();
  const { colors } = useTheme();
  const styles = useMemo(() => createChatImageScreenStyles(colors), [colors]);

  return (
    <View style={styles.container}>
      <Image source={getImageSource(imageKey ?? "")} style={styles.image} resizeMode="contain" />
    </View>
  );
}
