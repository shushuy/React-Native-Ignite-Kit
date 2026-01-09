import { useCallback, useEffect, useRef, useState } from "react";
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
  const [isSchedulePending, setIsSchedulePending] = useState(false);
  const scheduleTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

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

  useEffect(() => {
    return () => {
      if (scheduleTimeoutRef.current) {
        clearTimeout(scheduleTimeoutRef.current);
      }
    };
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
    if (isSchedulePending) {
      return;
    }
    const status = await ensurePermission();
    if (status !== "granted") {
      return;
    }

    setIsSchedulePending(true);
    try {
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

      if (scheduleTimeoutRef.current) {
        clearTimeout(scheduleTimeoutRef.current);
      }
      scheduleTimeoutRef.current = setTimeout(() => {
        setIsSchedulePending(false);
      }, NOTIFICATION_SCHEDULE_DELAY_SECONDS * 1000);
    } catch (error) {
      setIsSchedulePending(false);
      throw error;
    }
  }, [ensurePermission]);

  return {
    permissionStatus,
    requestPermissions,
    sendInstantTestNotification,
    scheduleTestNotification,
    isSchedulePending,
  };
};
