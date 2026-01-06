import React, { createContext, useMemo } from "react";
import { useColorScheme } from "react-native";

export type ThemeColors = {
  background: string;
  card: string;
  text: string;
  mutedText: string;
  border: string;
  primary: string;
  danger: string;
};

export type ThemeContextValue = {
  isDark: boolean;
  colors: ThemeColors;
};

const lightColors: ThemeColors = {
  background: "#F8FAFC",
  card: "#FFFFFF",
  text: "#0F172A",
  mutedText: "#64748B",
  border: "#E2E8F0",
  primary: "#2563EB",
  danger: "#DC2626",
};

const darkColors: ThemeColors = {
  background: "#0B1220",
  card: "#111827",
  text: "#E5E7EB",
  mutedText: "#9CA3AF",
  border: "#1F2937",
  primary: "#60A5FA",
  danger: "#F87171",
};

export const ThemeContext = createContext<ThemeContextValue | null>(null);

type ThemeProviderProps = {
  children: React.ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const scheme = useColorScheme();
  const isDark = scheme === "dark";
  const colors = useMemo(() => (isDark ? darkColors : lightColors), [isDark]);
  const value = useMemo(() => ({ isDark, colors }), [isDark, colors]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
