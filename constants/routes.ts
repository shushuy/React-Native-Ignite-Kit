export const ROUTES = {
  authLogin: "/(auth)/login",
  authForgot: "/(auth)/forgot-password",
  tabsChat: "/(tabs)/chat",
  tabsMap: "/(tabs)/map",
  chatDetail: (chatId: string) => `/(tabs)/chat/${chatId}`,
  chatImage: (imageKey: string) => `/(tabs)/chat/image/${imageKey}`,
  mapDetail: (locationId: string) => `/(tabs)/map/${locationId}`,
} as const;
