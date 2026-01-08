import type { Event } from "@/types/mock";
import {
  AGENDA_DAY_EVENT_CHANCE,
  AGENDA_DAYS_AFTER,
  AGENDA_DAYS_BEFORE,
  AGENDA_DURATION_OPTIONS,
  AGENDA_FALLBACK_TEMPLATES,
  AGENDA_MAX_EVENTS,
  AGENDA_MAX_PER_DAY,
  AGENDA_MIN_TODAY_EVENTS,
  AGENDA_TIME_SLOTS,
} from "@/constants/agenda";
import { timeToString } from "@/utils/timeToString";

export type EventTemplate = Pick<Event, "title" | "location" | "description">;

type GenerateAgendaOptions = {
  baseDate?: Date;
  maxEvents?: number;
  random?: () => number;
};

const addMinutes = (time: string, minutesToAdd: number) => {
  const [hours, minutes] = time.split(":").map(Number);
  if (!Number.isFinite(hours) || !Number.isFinite(minutes)) {
    return time;
  }
  const total = hours * 60 + minutes + minutesToAdd;
  const nextHours = Math.floor(total / 60);
  const nextMinutes = total % 60;
  return `${String(nextHours).padStart(2, "0")}:${String(nextMinutes).padStart(2, "0")}`;
};

const pickRandom = <T,>(items: T[], random: () => number) => {
  const index = Math.floor(random() * items.length);
  return items[Math.max(0, Math.min(items.length - 1, index))];
};

const buildDateRange = (baseDate: Date) => {
  const days: string[] = [];
  for (let i = -AGENDA_DAYS_BEFORE; i <= AGENDA_DAYS_AFTER; i += 1) {
    const date = new Date(baseDate);
    date.setDate(baseDate.getDate() + i);
    days.push(timeToString(date.getTime()));
  }
  return days;
};

export const generateAgendaEvents = (
  templates: EventTemplate[],
  options: GenerateAgendaOptions = {}
) => {
  const random = options.random ?? Math.random;
  const maxEvents = options.maxEvents ?? AGENDA_MAX_EVENTS;
  const baseDate = options.baseDate ?? new Date();
  const normalizedTemplates =
    templates.length > 0 ? templates : (AGENDA_FALLBACK_TEMPLATES as EventTemplate[]);
  const days = buildDateRange(baseDate);
  const todayKey = timeToString(baseDate.getTime());

  let total = 0;
  let templateIndex = 0;
  const events: Event[] = [];

  for (const day of days) {
    if (total >= maxEvents) {
      break;
    }

    const isToday = day === todayKey;
    const shouldIncludeDay = isToday || random() < AGENDA_DAY_EVENT_CHANCE;
    if (!shouldIncludeDay) {
      continue;
    }

    const extraEvent = random() < 0.35 ? 1 : 0;
    const desiredCount = isToday
      ? Math.max(AGENDA_MIN_TODAY_EVENTS, 1 + extraEvent)
      : 1 + extraEvent;
    const dayCount = Math.min(desiredCount, AGENDA_MAX_PER_DAY, maxEvents - total);
    if (dayCount <= 0) {
      continue;
    }

    const availableSlots = [...AGENDA_TIME_SLOTS];
    for (let i = 0; i < dayCount; i += 1) {
      if (availableSlots.length === 0) {
        break;
      }
      const slotIndex = Math.floor(random() * availableSlots.length);
      const startTime = availableSlots.splice(slotIndex, 1)[0];
      const duration = pickRandom(AGENDA_DURATION_OPTIONS, random);
      const endTime = addMinutes(startTime, duration);
      const template = normalizedTemplates[templateIndex % normalizedTemplates.length];
      templateIndex += 1;
      events.push({
        id: `event-${day}-${i}`,
        title: template.title,
        date: day,
        startTime,
        endTime,
        location: template.location,
        description: template.description,
      });
      total += 1;
      if (total >= maxEvents) {
        break;
      }
    }
  }

  return events;
};
