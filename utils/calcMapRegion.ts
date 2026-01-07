import type { Location } from "@/types/mock";
import { MAP_REGION_DELTA } from "@/constants/map";

export const calcMapRegion = (locations: Location[]) => {
  if (locations.length === 0) {
    return {
      latitude: 0,
      longitude: 0,
      ...MAP_REGION_DELTA,
    };
  }

  const totals = locations.reduce(
    (acc, location) => ({
      latitude: acc.latitude + location.latitude,
      longitude: acc.longitude + location.longitude,
    }),
    { latitude: 0, longitude: 0 }
  );

  return {
    latitude: totals.latitude / locations.length,
    longitude: totals.longitude / locations.length,
    ...MAP_REGION_DELTA,
  };
};
