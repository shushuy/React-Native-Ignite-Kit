import { getShiftBarPosition } from "./getShiftBarPosition";

describe("getShiftBarPosition", () => {
  it("returns percentages for a time range", () => {
    const result = getShiftBarPosition("09:00", "17:00");
    expect(parseFloat(result.left)).toBeCloseTo(37.5, 1);
    expect(parseFloat(result.width)).toBeCloseTo(33.3, 1);
  });

  it("returns zero width for invalid times", () => {
    const result = getShiftBarPosition("bad", "time");
    expect(result.left).toBe("0%");
    expect(result.width).toBe("0%");
  });
});
