import { getDefaultEventDate, getEventDates, getEventsByDate } from "./eventUtils";

describe("eventUtils", () => {
  const events = [
    { id: "event-1", date: "2026-01-06" } as never,
    { id: "event-2", date: "2026-01-07" } as never,
    { id: "event-3", date: "2026-01-06" } as never,
  ];

  it("returns unique sorted dates", () => {
    expect(getEventDates(events)).toEqual(["2026-01-06", "2026-01-07"]);
  });

  it("selects today if present", () => {
    expect(getDefaultEventDate(events, "2026-01-07")).toBe("2026-01-07");
  });

  it("falls back to first date when today missing", () => {
    expect(getDefaultEventDate(events, "2026-01-10")).toBe("2026-01-06");
  });

  it("filters events by date", () => {
    expect(getEventsByDate(events, "2026-01-06").length).toBe(2);
  });
});
