import type { Event } from "@/types/mock";

export const getEventDates = (events: Event[]) => {
  const unique = Array.from(new Set(events.map((event) => event.date)));
  unique.sort();
  return unique;
};

export const getDefaultEventDate = (events: Event[], today: string) => {
  const dates = getEventDates(events);
  if (dates.includes(today)) {
    return today;
  }

  return dates[0] ?? today;
};

export const getEventsByDate = (events: Event[], date: string) =>
  events.filter((event) => event.date === date);
