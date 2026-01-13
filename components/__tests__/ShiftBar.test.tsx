import React from "react";
import renderer, { act } from "react-test-renderer";

import { ThemeProvider } from "../../context/ThemeContext";
import { ShiftBar } from "../ShiftBar";

describe("ShiftBar", () => {
  it("renders correctly", () => {
    let tree: renderer.ReactTestRendererJSON | renderer.ReactTestRendererJSON[] | null = null;
    let instance: renderer.ReactTestRenderer | null = null;

    act(() => {
      instance = renderer.create(
        <ThemeProvider>
          <ShiftBar startTime="09:00" endTime="17:00" />
        </ThemeProvider>
      );
      tree = instance.toJSON();
    });

    expect(tree).toMatchSnapshot();
    act(() => {
      instance?.unmount();
    });
  });
});
