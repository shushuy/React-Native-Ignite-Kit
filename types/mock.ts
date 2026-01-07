import type { AvatarKey, ImageKey } from "../constants/asset-keys";

export type User = {
  id: string;
  name: string;
  email: string;
  plan: string;
  costPerMonth: number;
  avatarKey: AvatarKey;
};

export type Chat = {
  id: string;
  title: string;
  lastMessage: string;
  avatarKey: AvatarKey;
};

export type Message = {
  id: string;
  chatId: string;
  senderName: string;
  text: string;
  timestamp: string;
  imageKey?: ImageKey;
};

export type Location = {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  category: string;
  rating: number;
  address: string;
  phone: string;
  imageKey: ImageKey;
  description?: string;
};

export type Event = {
  id: string;
  title: string;
  date: string;
  startTime: string;
  endTime: string;
  location: string;
  description: string;
};
