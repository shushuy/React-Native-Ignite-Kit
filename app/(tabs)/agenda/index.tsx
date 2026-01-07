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

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Agenda</Text>
      <Text style={styles.subtitle}>Plan your schedule and track upcoming events.</Text>
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
      <Text style={styles.listTitle}>Events on {selectedDate}</Text>
      <FlatList
        data={selectedEvents}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => router.push(ROUTES.agendaDetail(item.id))}
            style={styles.eventRow}
          >
            <Text style={styles.eventTitle}>{item.title}</Text>
            <Text style={styles.eventMeta}>
              {item.startTime} - {item.endTime} • {item.location}
            </Text>
          </Pressable>
        )}
      />
    </SafeAreaView>
  );
}
