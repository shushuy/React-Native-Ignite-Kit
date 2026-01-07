import { useMemo } from "react";
import { Text, View } from "react-native";
import { Callout, Marker } from "react-native-maps";
import MapView from "react-native-maps";
import { useRouter } from "expo-router";

import { loadLocations } from "@/services/mock";
import { useTheme } from "@/hooks/useTheme";
import { createMapScreenStyles } from "@/styles/MapScreen.styles";
import { calcMapRegion } from "@/utils/calcMapRegion";
import { ROUTES } from "@/constants/routes";

export default function MapScreen() {
  const { colors } = useTheme();
  const styles = useMemo(() => createMapScreenStyles(colors), [colors]);
  const router = useRouter();
  const locations = useMemo(() => loadLocations(), []);
  const region = useMemo(() => calcMapRegion(locations), [locations]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Map</Text>
        <Text style={styles.subtitle}>Tap a marker to view the business details.</Text>
      </View>
      <MapView style={styles.map} initialRegion={region}>
        {locations.map((location) => (
          <Marker
            key={location.id}
            coordinate={{ latitude: location.latitude, longitude: location.longitude }}
            title={location.name}
          >
            <Callout onPress={() => router.push(ROUTES.mapDetail(location.id))}>
              <View>
                <Text>{location.name}</Text>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>
    </View>
  );
}
