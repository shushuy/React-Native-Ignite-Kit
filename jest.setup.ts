import "@testing-library/jest-native/extend-expect";

jest.mock("react-native", () => {
  const actual = jest.requireActual("react-native");
  return {
    ...actual,
    useColorScheme: () => "light",
  };
});
