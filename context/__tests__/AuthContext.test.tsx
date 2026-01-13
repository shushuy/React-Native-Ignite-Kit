import React, { useEffect } from "react";
import { act, render, waitFor } from "@testing-library/react-native";

import { MOCK_TOKEN } from "@/constants/auth";
import { AuthProvider, useAuth } from "@/context/AuthContext";

import * as SecureStore from "expo-secure-store";

jest.mock("expo-secure-store");

type AuthSnapshot = ReturnType<typeof useAuth> | null;

type HarnessProps = {
  onReady: (value: AuthSnapshot) => void;
};

const Harness = ({ onReady }: HarnessProps) => {
  const auth = useAuth();

  useEffect(() => {
    onReady(auth);
  }, [auth, onReady]);

  return null;
};

describe("AuthContext", () => {
  const secureStoreMock = SecureStore as typeof SecureStore & { __resetStore: () => void };

  beforeEach(() => {
    secureStoreMock.__resetStore();
  });

  it("sets a token on login", async () => {
    const snapshot: { current: AuthSnapshot } = { current: null };

    render(
      <AuthProvider>
        <Harness onReady={(value) => {
          snapshot.current = value;
        }} />
      </AuthProvider>
    );

    await waitFor(() => expect(snapshot.current?.isLoading).toBe(false));

    await act(async () => {
      await snapshot.current?.login();
    });

    await waitFor(() => expect(snapshot.current?.token).toBe(MOCK_TOKEN));
  });

  it("clears the token on logout", async () => {
    const snapshot: { current: AuthSnapshot } = { current: null };

    render(
      <AuthProvider>
        <Harness onReady={(value) => {
          snapshot.current = value;
        }} />
      </AuthProvider>
    );

    await waitFor(() => expect(snapshot.current?.isLoading).toBe(false));

    await act(async () => {
      await snapshot.current?.login();
    });
    await waitFor(() => expect(snapshot.current?.token).toBe(MOCK_TOKEN));

    await act(async () => {
      await snapshot.current?.logout();
    });

    await waitFor(() => expect(snapshot.current?.token).toBeNull());
  });
});
