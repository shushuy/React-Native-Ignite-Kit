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
};

const imageSourceMap: Record<ImageKey, ImageSourcePropType> = {
  "img-1": require("../assets/images/img-1.png"),
  "img-2": require("../assets/images/img-2.png"),
  "img-3": require("../assets/images/img-3.png"),
  "img-4": require("../assets/images/img-4.png"),
};

export const avatarKeys = AVATAR_KEYS;
export const imageKeys = IMAGE_KEYS;

export const getAvatarSource = (key: string): ImageSourcePropType => {
  if (!AVATAR_KEYS.includes(key as AvatarKey)) {
    return avatarSourceMap[DEFAULT_AVATAR_KEY];
  }

  return avatarSourceMap[key as AvatarKey] ?? avatarSourceMap[DEFAULT_AVATAR_KEY];
};

export const getImageSource = (key: string): ImageSourcePropType => {
  if (!IMAGE_KEYS.includes(key as ImageKey)) {
    return imageSourceMap[DEFAULT_IMAGE_KEY];
  }

  return imageSourceMap[key as ImageKey] ?? imageSourceMap[DEFAULT_IMAGE_KEY];
};
