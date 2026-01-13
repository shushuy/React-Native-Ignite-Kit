import "@testing-library/jest-native/extend-expect";

jest.mock("react-native/Libraries/Utilities/useColorScheme", () => ({
  default: () => "light",
}));
