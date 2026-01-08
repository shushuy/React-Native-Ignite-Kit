const padTime = (value: number) => String(value).padStart(2, "0");

export const timeToString = (time: number) => {
  const date = new Date(time);
  return `${date.getFullYear()}-${padTime(date.getMonth() + 1)}-${padTime(date.getDate())}`;
};
