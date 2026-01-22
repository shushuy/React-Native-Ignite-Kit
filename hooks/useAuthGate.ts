import { useCallback } from "react";

import { useAuth } from "@/context/AuthContext";

export const useAuthGate = () => {
  const { refreshTokenState } = useAuth();

  const checkAuth = useCallback(async () => {
    try {
      const token = await refreshTokenState();
      return Boolean(token);
    } catch (error) {
      console.warn("auth.checkAuth failed", error);
      return false;
    }
  }, [refreshTokenState]);

  return { checkAuth };
};
