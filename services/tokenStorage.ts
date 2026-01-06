import * as SecureStore from "expo-secure-store";

import { TOKEN_STORAGE_KEY } from "@/constants/auth";

export const getToken = async (): Promise<string | null> => {
  try {
    return await SecureStore.getItemAsync(TOKEN_STORAGE_KEY);
  } catch (error) {
    console.warn("tokenStorage.getToken failed", error);
    return null;
  }
};

export const setToken = async (token: string): Promise<void> => {
  try {
    await SecureStore.setItemAsync(TOKEN_STORAGE_KEY, token);
  } catch (error) {
    console.warn("tokenStorage.setToken failed", error);
  }
};

export const removeToken = async (): Promise<void> => {
  try {
    await SecureStore.deleteItemAsync(TOKEN_STORAGE_KEY);
  } catch (error) {
    console.warn("tokenStorage.removeToken failed", error);
  }
};

// AsyncStorage swap guide:
// 1) Install @react-native-async-storage/async-storage.
// 2) Replace SecureStore calls with AsyncStorage.getItem/setItem/removeItem.
// 3) Keep this module API the same so the rest of the app stays unchanged.
