import { useMemo, useState } from "react";
import { FlatList, Pressable, Text, View } from "react-native";
import { Agenda } from "react-native-calendars";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

import { useTheme } from "@/hooks/useTheme";
import { createAgendaScreenStyles } from "@/styles/AgendaScreen.styles";
import { loadEvents } from "@/services/mock";
import { getDefaultEventDate, getEventDates, getEventsByDate } from "@/utils/eventUtils";
import { ROUTES } from "@/constants/routes";

export default function AgendaScreen() {
  const { colors } = useTheme();
  const styles = useMemo(() => createAgendaScreenStyles(colors), [colors]);
  const router = useRouter();
  const events = useMemo(() => loadEvents(), []);
  const today = new Date().toISOString().split("T")[0];
  const initialDate = useMemo(() => getDefaultEventDate(events, today), [events, today]);
  const [selectedDate, setSelectedDate] = useState(initialDate);

  const items = useMemo(() => {
    return getEventDates(events).reduce<Record<string, { id: string }[]>>((acc, date) => {
      acc[date] = getEventsByDate(events, date).map((event) => ({ id: event.id }));
      return acc;
    }, {});
  }, [events]);

  const selectedEvents = useMemo(() => getEventsByDate(events, selectedDate), [events, selectedDate]);
  const eventCountLabel = useMemo(() => {
    const count = selectedEvents.length;
    return `${count} event${count === 1 ? "" : "s"}`;
  }, [selectedEvents.length]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Agenda</Text>
        <Text style={styles.subtitle}>Plan your schedule and track upcoming events.</Text>
      </View>
      <View style={styles.calendar}>
        <Agenda
          selected={selectedDate}
          items={items}
          onDayPress={(day) => setSelectedDate(day.dateString)}
          theme={{
            backgroundColor: colors.card,
            calendarBackground: colors.card,
            dayTextColor: colors.text,
            monthTextColor: colors.text,
            textSectionTitleColor: colors.mutedText,
            todayTextColor: colors.primary,
            arrowColor: colors.text,
            agendaDayTextColor: colors.mutedText,
            agendaDayNumColor: colors.text,
            agendaTodayColor: colors.primary,
          }}
          renderEmptyData={() => null}
        />
      </View>
      <View style={styles.agendaSection}>
        <View style={styles.agendaHeader}>
          <Text style={styles.agendaHeaderTitle}>Events on {selectedDate}</Text>
          <Text style={styles.agendaHeaderCount}>{eventCountLabel}</Text>
        </View>
        <FlatList
          data={selectedEvents}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.agendaList}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => router.push(ROUTES.agendaDetail(item.id))}
              style={styles.agendaItem}
            >
              <Text style={styles.agendaTitle}>{item.title}</Text>
              <Text style={styles.agendaLocation}>{item.location}</Text>
              <Text style={styles.agendaTime}>
                {item.startTime} - {item.endTime}
              </Text>
              <View style={styles.agendaTimes}>
                <View style={styles.agendaTimeRow}>
                  <Text style={styles.agendaTimeLabel}>Start</Text>
                  <Text style={styles.agendaTimeValue}>{item.startTime}</Text>
                </View>
                <View style={styles.agendaTimeRow}>
                  <Text style={styles.agendaTimeLabel}>End</Text>
                  <Text style={styles.agendaTimeValue}>{item.endTime}</Text>
                </View>
              </View>
            </Pressable>
          )}
          ListEmptyComponent={
            <View style={styles.agendaEmpty}>
              <Text style={styles.agendaEmptyText}>No events scheduled for this day.</Text>
            </View>
          }
        />
      </View>
    </SafeAreaView>
  );
}
