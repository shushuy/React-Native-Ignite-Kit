import type { ImageSourcePropType } from "react-native";
import {
  AVATAR_KEYS,
  DEFAULT_AVATAR_KEY,
  DEFAULT_IMAGE_KEY,
  IMAGE_KEYS,
  type AvatarKey,
  type ImageKey,
} from "../constants/asset-keys";

// TODO: Replace placeholder assets in /assets/avatars and /assets/images with real brand imagery.

const avatarSourceMap: Record<AvatarKey, ImageSourcePropType> = {
  "avatar-1": require("../assets/avatars/avatar-1.png"),
  "avatar-2": require("../assets/avatars/avatar-2.png"),
  "avatar-3": require("../assets/avatars/avatar-3.png"),
  "avatar-4": require("../assets/avatars/avatar-4.png"),
};

const imageSourceMap: Record<ImageKey, ImageSourcePropType> = {
  "img-1": require("../assets/images/img-1.png"),
  "img-2": require("../assets/images/img-2.png"),
  "img-3": require("../assets/images/img-3.png"),
  "img-4": require("../assets/images/img-4.png"),
};

const getFallbackSource = <T extends string>(
  sourceMap: Record<T, ImageSourcePropType>,
  defaultKey: T
) => sourceMap[defaultKey] ?? Object.values(sourceMap)[0];

export const avatarKeys = AVATAR_KEYS;
export const imageKeys = IMAGE_KEYS;

export const getAvatarSource = (key: string): ImageSourcePropType => {
  const fallback = getFallbackSource(avatarSourceMap, DEFAULT_AVATAR_KEY);
  if (!AVATAR_KEYS.includes(key as AvatarKey)) {
    return fallback;
  }

  return avatarSourceMap[key as AvatarKey] ?? fallback;
};

export const getImageSource = (key: string): ImageSourcePropType => {
  const fallback = getFallbackSource(imageSourceMap, DEFAULT_IMAGE_KEY);
  if (!IMAGE_KEYS.includes(key as ImageKey)) {
    return fallback;
  }

  return imageSourceMap[key as ImageKey] ?? fallback;
};
