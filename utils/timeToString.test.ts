import { timeToString } from "./timeToString";

describe("timeToString", () => {
  it("returns a YYYY-MM-DD string", () => {
    const time = new Date("2026-01-08T00:00:00Z").getTime();
    expect(timeToString(time)).toBe("2026-01-08");
  });
});
