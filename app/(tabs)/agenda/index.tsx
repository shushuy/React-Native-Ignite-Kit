import { useCallback, useMemo, useState } from "react";
import { Pressable, Text, View } from "react-native";
import { Agenda, type AgendaEntry, type AgendaSchedule, type DateData } from "react-native-calendars";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

import { ShiftBar } from "@/components/ShiftBar";
import { useTheme } from "@/hooks/useTheme";
import { createAgendaScreenStyles } from "@/styles/AgendaScreen.styles";
import { loadEvents } from "@/services/mock";
import { getDefaultEventDate } from "@/utils/eventUtils";
import { agendaRowHasChanged } from "@/utils/agendaRowHasChanged";
import { getInitials } from "@/utils/getInitials";
import { timeToString } from "@/utils/timeToString";
import { ROUTES } from "@/constants/routes";

type AgendaItem = AgendaEntry & {
  id: string;
  day: string;
  startTime: string;
  endTime: string;
  location: string;
  description: string;
};

export default function AgendaScreen() {
  const { colors } = useTheme();
  const styles = useMemo(() => createAgendaScreenStyles(colors), [colors]);
  const router = useRouter();
  const events = useMemo(() => loadEvents(), []);
  const today = new Date().toISOString().split("T")[0];
  const initialDate = useMemo(() => getDefaultEventDate(events, today), [events, today]);
  const [selectedDate, setSelectedDate] = useState(initialDate);
  const [items, setItems] = useState<AgendaSchedule>({});

  const eventsByDate = useMemo(
    () =>
      events.reduce<Record<string, AgendaItem[]>>((acc, event) => {
        const item: AgendaItem = {
          id: event.id,
          name: event.title,
          day: event.date,
          startTime: event.startTime,
          endTime: event.endTime,
          location: event.location,
          description: event.description,
        };
        acc[event.date] = [...(acc[event.date] ?? []), item];
        return acc;
      }, {}),
    [events]
  );

  const loadItemsForMonth = useCallback(
    (day: DateData) => {
      setItems((prev) => {
        const next: AgendaSchedule = { ...prev };
        for (let i = -15; i < 85; i += 1) {
          const time = day.timestamp + i * 24 * 60 * 60 * 1000;
          const dateKey = timeToString(time);
          if (!next[dateKey]) {
            next[dateKey] = eventsByDate[dateKey] ?? [];
          }
        }
        return next;
      });
    },
    [eventsByDate]
  );

  const handleDayPress = useCallback((day: DateData) => setSelectedDate(day.dateString), []);

  const renderItem = useCallback(
    (item: AgendaItem) => (
      <Pressable
        onPress={() => router.push(ROUTES.agendaDetail(item.id))}
        style={styles.agendaItem}
      >
        <ShiftBar startTime={item.startTime} endTime={item.endTime} />
        <View style={styles.agendaRow}>
          <Text style={styles.agendaTime}>
            {item.startTime} - {item.endTime}
          </Text>
          <View style={styles.agendaChip}>
            <Text style={styles.agendaChipText}>{getInitials(item.name)}</Text>
          </View>
        </View>
        <Text style={styles.agendaTitle}>{item.name}</Text>
        <Text style={styles.agendaLocation}>{item.location}</Text>
      </Pressable>
    ),
    [router, styles]
  );

  const renderEmptyData = useCallback(
    () => (
      <View style={styles.agendaEmpty}>
        <Text style={styles.agendaEmptyText}>No events scheduled for this day.</Text>
      </View>
    ),
    [styles]
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Agenda</Text>
        <Text style={styles.subtitle}>Plan your schedule and track upcoming events.</Text>
      </View>
      <Agenda
        items={items}
        loadItemsForMonth={loadItemsForMonth}
        selected={selectedDate}
        onDayPress={handleDayPress}
        renderItem={renderItem}
        renderEmptyData={renderEmptyData}
        rowHasChanged={agendaRowHasChanged}
        showClosingKnob
        theme={{
          backgroundColor: colors.background,
          calendarBackground: colors.background,
          dayTextColor: colors.text,
          monthTextColor: colors.text,
          textSectionTitleColor: colors.mutedText,
          todayTextColor: colors.primary,
          arrowColor: colors.text,
          agendaDayTextColor: colors.mutedText,
          agendaDayNumColor: colors.text,
          agendaTodayColor: colors.primary,
          selectedDayBackgroundColor: colors.primary,
          selectedDayTextColor: colors.card,
          agendaKnobColor: colors.border,
        }}
      />
    </SafeAreaView>
  );
}
