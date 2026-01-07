import { Stack } from "expo-router";

export default function ChatLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Chat", headerShown: false }} />
      <Stack.Screen name="[chatId]" options={{ title: "Chat Detail" }} />
      <Stack.Screen name="image/[imageKey]" options={{ title: "Image" }} />
    </Stack>
  );
}
