import type { ExpoConfig } from "@expo/config";

const appName = process.env.EXPO_PUBLIC_APP_NAME ?? "react-native-ignite-kit";
const appSlug = process.env.EXPO_PUBLIC_APP_SLUG ?? "react-native-ignite-kit";
const appScheme = process.env.EXPO_PUBLIC_APP_SCHEME ?? "reactnativeignitekit";
const iosBundleIdentifier =
  process.env.EXPO_PUBLIC_IOS_BUNDLE_IDENTIFIER ?? "com.shushuy.ignitekit";
const androidPackage =
  process.env.EXPO_PUBLIC_ANDROID_PACKAGE ?? "com.shushuy.ignitekit";

const config: ExpoConfig = {
  name: appName,
  slug: appSlug,
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/images/icon.png",
  scheme: appScheme,
  userInterfaceStyle: "automatic",
  newArchEnabled: true,
  splash: {
    image: "./assets/images/splash-icon.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff",
  },
  ios: {
    supportsTablet: true,
    bundleIdentifier: iosBundleIdentifier,
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/images/adaptive-icon.png",
      backgroundColor: "#ffffff",
    },
    edgeToEdgeEnabled: true,
    predictiveBackGestureEnabled: false,
    package: androidPackage,
  },
  web: {
    bundler: "metro",
    output: "static",
    favicon: "./assets/images/favicon.png",
  },
  plugins: ["expo-router", "expo-secure-store"],
  experiments: {
    typedRoutes: true,
  },
};

export default config;
