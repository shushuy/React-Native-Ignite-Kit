import { timeToString } from "./timeToString";

describe("timeToString", () => {
  it("returns a YYYY-MM-DD string", () => {
    const time = new Date(2026, 0, 8).getTime();
    expect(timeToString(time)).toBe("2026-01-08");
  });
});
