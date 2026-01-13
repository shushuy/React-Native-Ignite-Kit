# Step 8: Mock Data + Assets

1) **Create mock datasets**
- Add JSON mocks for user, chats, messages, locations, and events.
- Files to create/change: `mock/user.json`, `mock/chats.json`, `mock/messages.json`, `mock/locations.json`, `mock/events.json`.
- Expected result: All feature flows have stable mock data.

2) **Add asset mapping helpers**
- Create asset key constants and image lookup helpers for local assets.
- Files to create/change: `constants/asset-keys.ts`, `services/assets.ts`.
- Expected result: Screens can reference assets by key instead of importing directly.

3) **Add typed mock loaders**
- Centralize mock fetch helpers and type exports.
- Files to create/change: `services/mock.ts`, `types/mock.ts`.
- Expected result: Mock data access is typed and reusable.

4) **Add placeholder image assets**
- Add avatars and sample images to assets.
- Files to create/change: `assets/avatars/*`, `assets/images/*`.
- Expected result: UI has placeholder images for chats and locations.
