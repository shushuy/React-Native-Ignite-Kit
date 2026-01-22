import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

import { MOCK_TOKEN } from "@/constants/auth";
import { getToken, removeToken, setToken } from "@/services/tokenStorage";

type AuthContextValue = {
  token: string | null;
  isLoading: boolean;
  login: () => Promise<void>;
  logout: () => Promise<void>;
  refreshTokenState: () => Promise<string | null>;
};

const AuthContext = createContext<AuthContextValue | null>(null);

type AuthProviderProps = {
  children: React.ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [token, setTokenState] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const refreshTokenState = useCallback(async () => {
    setIsLoading(true);
    try {
      const storedToken = await getToken();
      setTokenState(storedToken);
      return storedToken;
    } catch (error) {
      console.warn("auth.refreshTokenState failed", error);
      setTokenState(null);
      return null;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const login = useCallback(async () => {
    await setToken(MOCK_TOKEN);
    await refreshTokenState();
  }, [refreshTokenState]);

  const logout = useCallback(async () => {
    await removeToken();
    await refreshTokenState();
  }, [refreshTokenState]);

  useEffect(() => {
    refreshTokenState();
  }, [refreshTokenState]);

  const value = useMemo(
    () => ({
      token,
      isLoading,
      login,
      logout,
      refreshTokenState,
    }),
    [token, isLoading, login, logout, refreshTokenState]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }

  return context;
};
