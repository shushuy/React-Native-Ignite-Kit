import type { AgendaEntry } from "react-native-calendars";

type AgendaRow = AgendaEntry & {
  id?: string;
  startTime?: string;
  endTime?: string;
};

export const agendaRowHasChanged = (row1: AgendaRow, row2: AgendaRow) =>
  row1.id !== row2.id ||
  row1.name !== row2.name ||
  row1.startTime !== row2.startTime ||
  row1.endTime !== row2.endTime;
