const MINUTES_IN_DAY = 24 * 60;
type PercentValue = `${number}%`;

const parseTimeToMinutes = (value: string) => {
  const [hours, minutes] = value.split(":").map(Number);
  if (!Number.isFinite(hours) || !Number.isFinite(minutes)) {
    return null;
  }
  return hours * 60 + minutes;
};

export const getShiftBarPosition = (startTime: string, endTime: string) => {
  const startMinutes = parseTimeToMinutes(startTime);
  const endMinutes = parseTimeToMinutes(endTime);

  if (startMinutes === null || endMinutes === null) {
    return { left: "0%" as PercentValue, width: "0%" as PercentValue };
  }

  const clampedStart = Math.max(0, Math.min(MINUTES_IN_DAY, startMinutes));
  const clampedEnd = Math.max(clampedStart, Math.min(MINUTES_IN_DAY, endMinutes));
  const left = (clampedStart / MINUTES_IN_DAY) * 100;
  const width = ((clampedEnd - clampedStart) / MINUTES_IN_DAY) * 100;

  return { left: `${left}%` as PercentValue, width: `${width}%` as PercentValue };
};
