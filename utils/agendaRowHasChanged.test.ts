import { agendaRowHasChanged } from "./agendaRowHasChanged";

describe("agendaRowHasChanged", () => {
  it("returns false when rows match", () => {
    const row = { id: "1", name: "Meeting", startTime: "09:00", endTime: "10:00" };
    expect(agendaRowHasChanged(row, row)).toBe(false);
  });

  it("returns true when id differs", () => {
    const row1 = { id: "1", name: "Meeting", startTime: "09:00", endTime: "10:00" };
    const row2 = { id: "2", name: "Meeting", startTime: "09:00", endTime: "10:00" };
    expect(agendaRowHasChanged(row1, row2)).toBe(true);
  });

  it("returns true when time differs", () => {
    const row1 = { id: "1", name: "Meeting", startTime: "09:00", endTime: "10:00" };
    const row2 = { id: "1", name: "Meeting", startTime: "09:30", endTime: "10:00" };
    expect(agendaRowHasChanged(row1, row2)).toBe(true);
  });
});
