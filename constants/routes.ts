export const ROUTES = {
  authLogin: "/(auth)/login",
  authForgot: "/(auth)/forgot-password",
  tabsChat: "/(tabs)/chat",
  chatDetail: (chatId: string) => `/(tabs)/chat/${chatId}`,
  chatImage: (imageKey: string) => `/(tabs)/chat/image/${imageKey}`,
} as const;
