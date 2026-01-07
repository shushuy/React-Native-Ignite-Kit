import { useMemo } from "react";
import { Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";

import { useTheme } from "@/hooks/useTheme";
import { loadEvents } from "@/services/mock";
import { createAgendaDetailScreenStyles } from "@/styles/AgendaDetailScreen.styles";

export default function AgendaDetailScreen() {
  const { eventId } = useLocalSearchParams<{ eventId: string }>();
  const { colors } = useTheme();
  const styles = useMemo(() => createAgendaDetailScreenStyles(colors), [colors]);
  const event = useMemo(() => loadEvents().find((item) => item.id === eventId), [eventId]);

  if (!event) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Event not found</Text>
        <Text style={styles.subtitle}>Return to the agenda to pick another event.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{event.title}</Text>
      <Text style={styles.subtitle}>
        {event.date} • {event.startTime} - {event.endTime}
      </Text>
      <View style={styles.card}>
        <Text style={styles.label}>Location</Text>
        <Text style={styles.value}>{event.location}</Text>
        <Text style={styles.label}>Description</Text>
        <Text style={styles.value}>{event.description}</Text>
      </View>
    </View>
  );
}
