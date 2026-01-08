import React from "react";
import renderer from "react-test-renderer";

import { ThemeProvider } from "../../context/ThemeContext";
import { ShiftBar } from "../ShiftBar";

describe("ShiftBar", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <ThemeProvider>
          <ShiftBar startTime="09:00" endTime="17:00" />
        </ThemeProvider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
