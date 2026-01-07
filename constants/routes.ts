export const ROUTES = {
  authLogin: "/(auth)/login",
  authForgot: "/(auth)/forgot-password",
  tabsChat: "/(tabs)/chat",
  tabsMap: "/(tabs)/map",
  tabsAgenda: "/(tabs)/agenda",
  chatDetail: (chatId: string) => `/(tabs)/chat/${chatId}`,
  chatImage: (imageKey: string) => `/(tabs)/chat/image/${imageKey}`,
  mapDetail: (locationId: string) => `/(tabs)/map/${locationId}`,
  agendaDetail: (eventId: string) => `/(tabs)/agenda/${eventId}`,
} as const;
