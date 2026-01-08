import chatsData from "../mock/chats.json";
import eventsData from "../mock/events.json";
import locationsData from "../mock/locations.json";
import messagesData from "../mock/messages.json";
import userData from "../mock/user.json";
import type { Chat, Event, Location, Message, User } from "../types/mock";
import { generateAgendaEvents, type EventTemplate } from "../utils/generateAgendaEvents";

export const loadUser = (): User => userData as User;
export const loadChats = (): Chat[] => chatsData as Chat[];
export const loadMessages = (): Message[] => messagesData as Message[];
export const loadLocations = (): Location[] => locationsData as Location[];

let cachedEvents: Event[] | null = null;

export const loadEvents = (): Event[] => {
  if (!cachedEvents) {
    cachedEvents = generateAgendaEvents(eventsData as EventTemplate[]);
  }
  return cachedEvents;
};
