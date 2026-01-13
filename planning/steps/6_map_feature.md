# Step 6: Map Feature

1) **Render map and markers from mock data**
- Use react-native-maps with markers from mocked locations.
- Files to create/change: `app/(tabs)/map/index.tsx`, `mock/locations.json`.
- Expected result: Map shows markers and handles taps.

2) **Create business detail route**
- Show business details with local images and metadata.
- Files to create/change: `app/(tabs)/map/[locationId].tsx`, `assets/images/*`.
- Expected result: Marker tap navigates to detail with local image and data.
