export const AVATAR_KEYS = ["avatar-1", "avatar-2", "avatar-3", "avatar-4"] as const;
export type AvatarKey = (typeof AVATAR_KEYS)[number];

export const IMAGE_KEYS = ["img-1", "img-2", "img-3", "img-4"] as const;
export type ImageKey = (typeof IMAGE_KEYS)[number];

export const DEFAULT_AVATAR_KEY: AvatarKey = "avatar-1";
export const DEFAULT_IMAGE_KEY: ImageKey = "img-1";
