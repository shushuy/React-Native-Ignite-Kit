import { generateAgendaEvents } from "./generateAgendaEvents";
import { timeToString } from "./timeToString";

const templates = [
  { title: "Focus Block", location: "Studio", description: "Deep work session." },
  { title: "Design Review", location: "Main Hall", description: "UI checkpoints." },
];

describe("generateAgendaEvents", () => {
  it("always includes an event for today", () => {
    const baseDate = new Date("2026-01-08T08:00:00Z");
    const events = generateAgendaEvents(templates, {
      baseDate,
      random: () => 0.99,
    });
    const todayKey = timeToString(baseDate.getTime());
    expect(events.some((event) => event.date === todayKey)).toBe(true);
  });

  it("does not exceed the max events limit", () => {
    const baseDate = new Date("2026-01-08T08:00:00Z");
    const events = generateAgendaEvents(templates, {
      baseDate,
      maxEvents: 4,
      random: () => 0.1,
    });
    expect(events.length).toBeLessThanOrEqual(4);
  });
});
