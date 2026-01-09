import { useCallback, useEffect, useState } from "react";
import { Platform } from "react-native";
import * as Notifications from "expo-notifications";

import {
  NOTIFICATION_DEFAULT_SOUND,
  NOTIFICATION_SCHEDULE_DELAY_SECONDS,
  NOTIFICATION_TEST_BODY,
  NOTIFICATION_TEST_CHANNEL_ID,
  NOTIFICATION_TEST_TITLE,
} from "@/constants/notifications";

type PermissionStatus = Notifications.PermissionStatus;

export const useNotifications = () => {
  const [permissionStatus, setPermissionStatus] = useState<PermissionStatus>("undetermined");

  useEffect(() => {
    Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: NOTIFICATION_DEFAULT_SOUND,
        shouldSetBadge: false,
      }),
    });

    if (Platform.OS === "android") {
      Notifications.setNotificationChannelAsync("default", {
        name: "default",
        importance: Notifications.AndroidImportance.DEFAULT,
      });
    }
  }, []);

  const refreshPermissions = useCallback(async () => {
    const { status } = await Notifications.getPermissionsAsync();
    setPermissionStatus(status);
    return status;
  }, []);

  useEffect(() => {
    void refreshPermissions();
  }, [refreshPermissions]);

  const requestPermissions = useCallback(async () => {
    const { status } = await Notifications.requestPermissionsAsync();
    setPermissionStatus(status);

    // TODO: Register remote push tokens here (expo push token + backend registration).
    return status;
  }, []);

  const ensurePermission = useCallback(async () => {
    if (permissionStatus === "granted") {
      return permissionStatus;
    }
    return requestPermissions();
  }, [permissionStatus, requestPermissions]);

  const sendInstantTestNotification = useCallback(async () => {
    const status = await ensurePermission();
    if (status !== "granted") {
      return;
    }

    await Notifications.scheduleNotificationAsync({
      content: {
        title: NOTIFICATION_TEST_TITLE,
        body: NOTIFICATION_TEST_BODY,
        sound: NOTIFICATION_DEFAULT_SOUND,
        ...(Platform.OS === "android" ? { channelId: NOTIFICATION_TEST_CHANNEL_ID } : null),
      },
      trigger: null,
    });
  }, [ensurePermission]);

  const scheduleTestNotification = useCallback(async () => {
    const status = await ensurePermission();
    if (status !== "granted") {
      return;
    }

    await Notifications.scheduleNotificationAsync({
      content: {
        title: NOTIFICATION_TEST_TITLE,
        body: NOTIFICATION_TEST_BODY,
        sound: NOTIFICATION_DEFAULT_SOUND,
        ...(Platform.OS === "android" ? { channelId: NOTIFICATION_TEST_CHANNEL_ID } : null),
      },
      trigger: {
        type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
        seconds: NOTIFICATION_SCHEDULE_DELAY_SECONDS,
      },
    });
  }, [ensurePermission]);

  return {
    permissionStatus,
    requestPermissions,
    sendInstantTestNotification,
    scheduleTestNotification,
  };
};
