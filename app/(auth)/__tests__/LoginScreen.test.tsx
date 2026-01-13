import React from "react";
import { act, fireEvent, render } from "@testing-library/react-native";

import { ROUTES } from "@/constants/routes";
import LoginScreen from "@/app/(auth)/login";

const mockReplace = jest.fn();
const mockPush = jest.fn();
const mockLogin = jest.fn().mockResolvedValue(undefined);

jest.mock("expo-router", () => ({
  useRouter: () => ({
    replace: mockReplace,
    push: mockPush,
  }),
}));

jest.mock("@/context/AuthContext", () => ({
  useAuth: () => ({
    login: mockLogin,
  }),
}));

jest.mock("@/hooks/useTheme", () => ({
  useTheme: () => ({
    colors: {
      background: "#FFFFFF",
      card: "#FFFFFF",
      text: "#0F172A",
      mutedText: "#64748B",
      border: "#E2E8F0",
      primary: "#2563EB",
      danger: "#DC2626",
    },
  }),
}));

describe("LoginScreen", () => {
  beforeEach(() => {
    mockReplace.mockClear();
    mockPush.mockClear();
    mockLogin.mockClear();
  });

  it("renders inputs and triggers login", async () => {
    const { getByPlaceholderText, getByText } = render(<LoginScreen />);

    fireEvent.changeText(getByPlaceholderText("you@example.com"), "demo@example.com");
    fireEvent.changeText(getByPlaceholderText("••••••••"), "password123");

    await act(async () => {
      fireEvent.press(getByText("Login"));
    });

    expect(mockLogin).toHaveBeenCalledTimes(1);
    expect(mockReplace).toHaveBeenCalledWith(ROUTES.tabsChat);
  });
});
