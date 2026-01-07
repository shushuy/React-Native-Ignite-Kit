import React, { useMemo } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";

import { useTheme } from "@/hooks/useTheme";
import { createTabsLayoutStyles } from "@/styles/TabsLayout.styles";

export default function TabLayout() {
  const { colors } = useTheme();
  const styles = useMemo(() => createTabsLayoutStyles(colors), [colors]);
  const TabBarIcon = (props: {
    name: React.ComponentProps<typeof FontAwesome>["name"];
    color: string;
  }) => <FontAwesome size={26} style={styles.tabBarIcon} {...props} />;

  return (
    <Tabs
      initialRouteName="chat"
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.mutedText,
        tabBarStyle: styles.tabBar,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="chat"
        options={{
          title: "Chat",
          tabBarIcon: ({ color }) => <TabBarIcon name="comments" color={color} />,
        }}
      />
      <Tabs.Screen
        name="map"
        options={{
          title: "Map",
          tabBarIcon: ({ color }) => <TabBarIcon name="map" color={color} />,
        }}
      />
      <Tabs.Screen
        name="agenda"
        options={{
          title: "Agenda",
          tabBarIcon: ({ color }) => <TabBarIcon name="calendar" color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
        }}
      />
    </Tabs>
  );
}
