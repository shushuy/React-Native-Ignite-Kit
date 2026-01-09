import { useCallback, useMemo } from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

import Button from "@/components/Button";
import { PROFILE_COPY, PROFILE_PERMISSION_LABELS } from "@/constants/profile";
import { useAuth } from "@/context/AuthContext";
import { useNotifications } from "@/hooks/useNotifications";
import { useTheme } from "@/hooks/useTheme";
import { createProfileScreenStyles } from "@/styles/ProfileScreen.styles";

export default function ProfileScreen() {
  const { colors } = useTheme();
  const styles = useMemo(() => createProfileScreenStyles(colors), [colors]);
  const { logout } = useAuth();
  const router = useRouter();
  const {
    permissionStatus,
    requestPermissions,
    sendInstantTestNotification,
    scheduleTestNotification,
    isSchedulePending,
    isSendPending,
  } = useNotifications();
  const permissionLabel =
    PROFILE_PERMISSION_LABELS[permissionStatus] ?? PROFILE_PERMISSION_LABELS.undetermined;

  const handleLogout = useCallback(async () => {
    await logout();
    router.replace("/(auth)/login");
  }, [logout, router]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{PROFILE_COPY.title}</Text>
      <Text style={styles.description}>{PROFILE_COPY.description}</Text>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{PROFILE_COPY.notificationsTitle}</Text>
        <View style={styles.statusRow}>
          <Text style={styles.statusLabel}>{PROFILE_COPY.notificationsStatusLabel}</Text>
          <Text style={styles.statusValue}>{permissionLabel}</Text>
        </View>
        <View style={styles.buttonStack}>
          {permissionStatus !== "granted" ? (
            <View style={styles.buttonRow}>
              <Button label={PROFILE_COPY.enableNotifications} onPress={requestPermissions} />
            </View>
          ) : null}
          <View style={styles.buttonRow}>
            <Button
              label={PROFILE_COPY.sendTestNotification}
              onPress={sendInstantTestNotification}
              disabled={isSendPending}
            />
          </View>
          <View style={styles.buttonRow}>
            <Button
              label={PROFILE_COPY.scheduleTestNotification}
              onPress={scheduleTestNotification}
              disabled={isSchedulePending}
            />
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <Button label={PROFILE_COPY.logout} onPress={handleLogout} />
      </View>
    </SafeAreaView>
  );
}
