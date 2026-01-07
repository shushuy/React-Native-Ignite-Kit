import { Stack } from "expo-router";

export default function MapLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Map", headerShown: false }} />
      <Stack.Screen name="[locationId]" options={{ title: "Business" }} />
    </Stack>
  );
}
