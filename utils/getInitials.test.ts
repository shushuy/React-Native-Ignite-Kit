import { getInitials } from "./getInitials";

describe("getInitials", () => {
  it("returns initials for a full name", () => {
    expect(getInitials("Dana Test")).toBe("DT");
  });

  it("returns a single letter for one word", () => {
    expect(getInitials("Prototype")).toBe("P");
  });

  it("returns fallback for empty input", () => {
    expect(getInitials("")).toBe("--");
  });
});
