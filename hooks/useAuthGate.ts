import { useCallback } from "react";

import { useAuth } from "@/context/AuthContext";

export const useAuthGate = () => {
  const { refreshTokenState } = useAuth();

  const checkAuth = useCallback(async () => {
    const token = await refreshTokenState();
    return Boolean(token);
  }, [refreshTokenState]);

  return { checkAuth };
};
