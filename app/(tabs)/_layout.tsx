import React, { useMemo } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Pressable } from "react-native";

import { useClientOnlyValue } from "@/components/useClientOnlyValue";
import { useTheme } from "@/hooks/useTheme";
import { createTabsLayoutStyles } from "@/styles/TabsLayout.styles";

export default function TabLayout() {
  const { colors } = useTheme();
  const styles = useMemo(() => createTabsLayoutStyles(colors), [colors]);
  const TabBarIcon = (props: {
    name: React.ComponentProps<typeof FontAwesome>["name"];
    color: string;
  }) => <FontAwesome size={28} style={styles.tabBarIcon} {...props} />;

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.mutedText,
        tabBarStyle: styles.tabBar,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Tab One',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={colors.text}
                    style={[styles.headerIcon, pressed && styles.headerIconPressed]}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'Tab Two',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
    </Tabs>
  );
}
