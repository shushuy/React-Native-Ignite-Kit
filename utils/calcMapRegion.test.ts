import { calcMapRegion } from "./calcMapRegion";

describe("calcMapRegion", () => {
  it("returns center coordinates for locations", () => {
    const result = calcMapRegion([
      { latitude: 10, longitude: 20 } as never,
      { latitude: 30, longitude: 40 } as never,
    ]);

    expect(result.latitude).toBe(20);
    expect(result.longitude).toBe(30);
  });

  it("returns defaults when no locations", () => {
    const result = calcMapRegion([]);
    expect(result.latitude).toBe(0);
    expect(result.longitude).toBe(0);
  });
});
