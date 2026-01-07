import { useMemo } from "react";
import { Image, Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";

import { getImageSource } from "@/services/assets";
import { loadLocations } from "@/services/mock";
import { useTheme } from "@/hooks/useTheme";
import { createMapDetailScreenStyles } from "@/styles/MapDetailScreen.styles";

export default function MapDetailScreen() {
  const { locationId } = useLocalSearchParams<{ locationId: string }>();
  const { colors } = useTheme();
  const styles = useMemo(() => createMapDetailScreenStyles(colors), [colors]);
  const location = useMemo(
    () => loadLocations().find((item) => item.id === locationId),
    [locationId]
  );

  if (!location) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Location not found</Text>
        <Text style={styles.subtitle}>Try going back and selecting a different marker.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={getImageSource(location.imageKey)} style={styles.image} />
      <Text style={styles.title}>{location.name}</Text>
      <Text style={styles.subtitle}>
        {location.category} • {location.rating.toFixed(1)} stars
      </Text>
      <View style={styles.card}>
        <Text style={styles.label}>Address</Text>
        <Text style={styles.value}>{location.address}</Text>
        <Text style={styles.label}>Phone</Text>
        <Text style={styles.value}>{location.phone}</Text>
        <Text style={styles.label}>About</Text>
        <Text style={styles.value}>
          {location.description ?? "More details will be added in a later build."}
        </Text>
      </View>
    </View>
  );
}
