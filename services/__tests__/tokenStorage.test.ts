import { TOKEN_STORAGE_KEY } from "@/constants/auth";
import { getToken, removeToken, setToken } from "@/services/tokenStorage";

import * as SecureStore from "expo-secure-store";

jest.mock("expo-secure-store");

describe("tokenStorage", () => {
  const secureStoreMock = SecureStore as typeof SecureStore & { __resetStore: () => void };

  beforeEach(() => {
    secureStoreMock.__resetStore();
  });

  it("sets and gets tokens", async () => {
    await setToken("demo-token");

    await expect(getToken()).resolves.toBe("demo-token");
    expect(secureStoreMock.setItemAsync).toHaveBeenCalledWith(TOKEN_STORAGE_KEY, "demo-token");
  });

  it("removes tokens", async () => {
    await setToken("demo-token");
    await removeToken();

    await expect(getToken()).resolves.toBeNull();
    expect(secureStoreMock.deleteItemAsync).toHaveBeenCalledWith(TOKEN_STORAGE_KEY);
  });
});
