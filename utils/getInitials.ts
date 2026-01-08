const pickLetters = (value: string) =>
  value
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((chunk) => chunk[0]?.toUpperCase())
    .join("");

export const getInitials = (value: string) => {
  if (!value) {
    return "--";
  }

  const letters = pickLetters(value);
  return letters || "--";
};
