import type { ImageSourcePropType } from "react-native";
import {
  AVATAR_KEYS,
  DEFAULT_AVATAR_KEY,
  DEFAULT_IMAGE_KEY,
  IMAGE_KEYS,
  type AvatarKey,
  type ImageKey,
} from "../constants/asset-keys";

const fallbackAvatar = require("../assets/images/icon.png");
const fallbackImage = require("../assets/images/splash-icon.png");

// TODO: Add avatar files in /assets/avatars (avatar-1.png, avatar-2.png, avatar-3.png)
// TODO: Add image files in /assets/images (img-1.jpg, img-2.jpg, img-3.jpg, img-4.jpg)
// TODO: Replace placeholder mappings below once assets exist.

const avatarSourceMap: Record<AvatarKey, ImageSourcePropType> = {
  "avatar-1": fallbackAvatar,
  "avatar-2": fallbackAvatar,
  "avatar-3": fallbackAvatar,
};

const imageSourceMap: Record<ImageKey, ImageSourcePropType> = {
  "img-1": fallbackImage,
  "img-2": fallbackImage,
  "img-3": fallbackImage,
  "img-4": fallbackImage,
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
