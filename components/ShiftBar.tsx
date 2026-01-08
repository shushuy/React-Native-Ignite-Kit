import { useMemo } from "react";
import { View } from "react-native";

import { useTheme } from "@/hooks/useTheme";
import { createShiftBarStyles } from "@/styles/ShiftBar.styles";
import { getShiftBarPosition } from "@/utils/getShiftBarPosition";

type ShiftBarProps = {
  startTime: string;
  endTime: string;
};

export function ShiftBar({ startTime, endTime }: ShiftBarProps) {
  const { colors } = useTheme();
  const styles = useMemo(() => createShiftBarStyles(colors), [colors]);
  const barStyle = useMemo(() => getShiftBarPosition(startTime, endTime), [startTime, endTime]);

  return (
    <View style={styles.container} pointerEvents="none">
      <View style={[styles.bar, barStyle]} />
    </View>
  );
}
