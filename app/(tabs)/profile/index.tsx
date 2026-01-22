import { useCallback, useMemo } from "react";
import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { type Href, useRouter } from "expo-router";

import Button from "@/components/Button";
import { PROFILE_COPY, PROFILE_PERMISSION_LABELS } from "@/constants/profile";
import { useAuth } from "@/context/AuthContext";
import { useNotifications } from "@/hooks/useNotifications";
import { useTheme } from "@/hooks/useTheme";
import { getAvatarSource } from "@/services/assets";
import { loadUser } from "@/services/mock";
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
  const user = useMemo(() => {
    try {
      return loadUser();
    } catch (error) {
      console.warn("profile.loadUser failed", error);
      return null;
    }
  }, []);
  const displayUser = {
    name: user?.name ?? "Guest User",
    email: user?.email ?? "guest@ignitekit.dev",
    plan: user?.plan ?? "Starter",
    costPerMonth: user?.costPerMonth ?? 0,
    avatarKey: user?.avatarKey ?? "avatar-1",
  };
  const planCostLabel = displayUser.costPerMonth
    ? `$${displayUser.costPerMonth}/mo`
    : "N/A";

  const handleLogout = useCallback(async () => {
    await logout();
    router.replace("/(auth)/login" as Href);
  }, [logout, router]);

  const handleRequestPermissions = useCallback(async () => {
    await requestPermissions();
  }, [requestPermissions]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{PROFILE_COPY.title}</Text>
      <Text style={styles.description}>{PROFILE_COPY.description}</Text>
      <View style={styles.profileCard}>
        <Image source={getAvatarSource(displayUser.avatarKey)} style={styles.avatar} />
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>{displayUser.name}</Text>
          <Text style={styles.profileEmail}>{displayUser.email}</Text>
        </View>
      </View>
      <View style={styles.planRow}>
        <Text style={styles.planLabel}>Plan</Text>
        <Text style={styles.planValue}>{displayUser.plan}</Text>
      </View>
      <View style={styles.planRow}>
        <Text style={styles.planLabel}>Cost</Text>
        <Text style={styles.planValue}>{planCostLabel}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>{PROFILE_COPY.notificationsTitle}</Text>
        <View style={styles.statusRow}>
          <Text style={styles.statusLabel}>{PROFILE_COPY.notificationsStatusLabel}</Text>
          <Text style={styles.statusValue}>{permissionLabel}</Text>
        </View>
        <View style={styles.buttonStack}>
          {permissionStatus !== "granted" ? (
            <View style={styles.buttonRow}>
              <Button label={PROFILE_COPY.enableNotifications} onPress={handleRequestPermissions} />
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
