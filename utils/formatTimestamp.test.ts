import { formatTimestamp } from "./formatTimestamp";

describe("formatTimestamp", () => {
  it("returns a formatted time string", () => {
    const result = formatTimestamp("2026-01-07T13:00:00Z");
    expect(result.length).toBeGreaterThan(0);
  });

  it("returns an empty string for invalid dates", () => {
    expect(formatTimestamp("not-a-date")).toBe("");
  });
});
