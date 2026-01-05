# Progress Plan

## Folder Structure (End State)
```
/app/(auth)
/app/(tabs)
/components
/context
/hooks
/services
/mock
/assets
/planning
```

## Phase 0 — Repo Setup
- [ ] Step 0.1
  - Goal: Clone the repo and enter the project directory.
  - Commands:
    ```bash
    git clone git@github.com:shushuy/React-Native-Ignite-Kit.git
    cd React-Native-Ignite-Kit
    ```
  - Files to create/change: None
  - Expected result: Local repo ready for setup.

- [ ] Step 0.2
  - Goal: Initialize an Expo Router + TypeScript project in-place.
  - Commands:
    ```bash
    npx create-expo-app . --template
    ```
  - Files to create/change: Expo starter files under /app and config files.
  - Expected result: Base Expo Router Tabs + TypeScript template created.

- [ ] Step 0.3
  - Goal: Install Codex CLI for project automation.
  - Commands:
    ```bash
    npm install -g @openai/codex
    ```
  - Files to create/change: None
  - Expected result: Codex CLI available globally.

- [ ] Step 0.4
  - Goal: Install dependencies used by the repo.
  - Commands:
    ```bash
    npx expo install expo-router react-native-safe-area-context react-native-screens
    npx expo install expo-secure-store
    npx expo install react-native-maps
    npm install react-native-calendars
    npx expo install expo-notifications
    npm install nativewind
    npm install --save-dev tailwindcss
    npx tailwindcss init
    npm install --save-dev eslint prettier eslint-config-prettier eslint-plugin-prettier
    npm install --save-dev @typescript-eslint/eslint-plugin @typescript-eslint/parser
    npm install --save-dev jest jest-expo
    npm install --save-dev @testing-library/react-native @testing-library/jest-native
    npm install --save-dev react-test-renderer
    ```
  - Files to create/change: package.json, package-lock.json, tailwind.config.js
  - Expected result: All dependencies installed and Tailwind config created.

- [ ] Step 0.5
  - Goal: Set up ESLint and Prettier configuration.
  - Commands: None
  - Files to create/change: eslint config file, prettier config file.
  - Expected result: Linting and formatting configured.

- [ ] Step 0.6
  - Goal: Add environment files for local development.
  - Commands: None
  - Files to create/change: .env, .env.example
  - Expected result: Local env file present with example template.

- [ ] Step 0.7
  - Goal: Update ignore rules for Expo, macOS, and drafts.
  - Commands: None
  - Files to create/change: .gitignore
  - Expected result: .env, BLOG_POST.md, and Expo/macOS artifacts ignored.

- [ ] Step 0.8
  - Goal: Create planning docs for Codex execution.
  - Commands: None
  - Files to create/change: /planning/codex-config.md, /planning/history.md, /planning/progress-plan.md
  - Expected result: Planning docs available for repeatable guidance.

- [ ] Step 0.9
  - Goal: Create README with screenshot placeholders.
  - Commands: None
  - Files to create/change: README.md
  - Expected result: README includes install/run steps and image placeholders.

- [ ] Step 0.10
  - Goal: Commit and push to GitHub.
  - Commands:
    ```bash
    git remote -v
    git remote set-url origin git@github.com:shushuy/React-Native-Ignite-Kit.git
    git branch -M main
    git add .
    git commit -m "chore: initial commit"
    git push -u origin main
    ```
  - Files to create/change: None
  - Expected result: Remote repo updated on main.
  - Note: Use force push only when intentionally overwriting remote history.
    ```bash
    git push -u origin main --force
    ```

## Phase 1 — Routing & Splash Gate
- [ ] Step 1.1
  - Goal: Define root stack and route groups.
  - Commands: None
  - Files to create/change: /app/_layout.tsx
  - Expected result: Root stack with splash gate and (auth)/(tabs) groups.

- [ ] Step 1.2
  - Goal: Implement token gate hook and storage adapter.
  - Commands: None
  - Files to create/change: /hooks/useAuthGate.ts, /services/token-storage.ts
  - Expected result: Token checks route to auth or tabs; SecureStore used with comments for AsyncStorage swap.

- [ ] Step 1.3
  - Goal: Re-check token on app foreground.
  - Commands: None
  - Files to create/change: /hooks/useAuthGate.ts or /services/token-storage.ts
  - Expected result: AppState listener refreshes auth when returning to foreground.

## Phase 2 — Auth Stack
- [ ] Step 2.1
  - Goal: Create (auth) group layout.
  - Commands: None
  - Files to create/change: /app/(auth)/_layout.tsx
  - Expected result: Auth stack routes are grouped and isolated.

- [ ] Step 2.2
  - Goal: Build Login and Forgot Password screens.
  - Commands: None
  - Files to create/change: /app/(auth)/login.tsx, /app/(auth)/forgot-password.tsx
  - Expected result: Fake login always succeeds, sets token, routes to tabs; forgot password nested in auth stack.

## Phase 3 — Tabs + Nested Stacks
- [ ] Step 3.1
  - Goal: Create (tabs) group and four tab stacks.
  - Commands: None
  - Files to create/change: /app/(tabs)/_layout.tsx and per-tab stack layouts
  - Expected result: Chat, Map, Agenda, Profile tabs with nested stack routes (no modals).

## Phase 4 — Chat Feature
- [ ] Step 4.1
  - Goal: Render chats list with FlatList and mock data.
  - Commands: None
  - Files to create/change: /app/(tabs)/chat/index.tsx, /mock/chats.json
  - Expected result: List of chats navigates to detail screen.

- [ ] Step 4.2
  - Goal: Build chat detail with messages and input.
  - Commands: None
  - Files to create/change: /app/(tabs)/chat/[id].tsx, /mock/messages.json
  - Expected result: Messages render and input appends to list.

- [ ] Step 4.3
  - Goal: Add image viewer route for message images.
  - Commands: None
  - Files to create/change: /app/(tabs)/chat/image-viewer.tsx, /assets/images
  - Expected result: Tapping image opens full-screen viewer.

## Phase 5 — Map Feature
- [ ] Step 5.1
  - Goal: Render map and markers from mock data.
  - Commands: None
  - Files to create/change: /app/(tabs)/map/index.tsx, /mock/locations.json
  - Expected result: Map shows markers and handles taps.

- [ ] Step 5.2
  - Goal: Create business detail route.
  - Commands: None
  - Files to create/change: /app/(tabs)/map/[id].tsx, /assets/images
  - Expected result: Marker tap navigates to detail with local image and data.

## Phase 6 — Agenda Feature
- [ ] Step 6.1
  - Goal: Render calendar with mock events.
  - Commands: None
  - Files to create/change: /app/(tabs)/agenda/index.tsx, /mock/events.json
  - Expected result: Calendar displays event data.

- [ ] Step 6.2
  - Goal: Create event detail route.
  - Commands: None
  - Files to create/change: /app/(tabs)/agenda/[id].tsx
  - Expected result: Selecting event navigates to detail screen.

## Phase 7 — Profile Feature
- [ ] Step 7.1
  - Goal: Load user data from local JSON.
  - Commands: None
  - Files to create/change: /app/(tabs)/profile/index.tsx, /mock/user.json
  - Expected result: Profile shows name, email, plan, cost/month, avatar.

- [ ] Step 7.2
  - Goal: Implement logout and dev reset.
  - Commands: None
  - Files to create/change: /context/AuthContext.tsx, /app/(tabs)/profile/index.tsx
  - Expected result: Logout clears token and returns to auth; dev-only reset button shows confirm alert.

## Phase 8 — Polish + Reusability
- [ ] Step 8.1
  - Goal: Implement system theme with provider and hook.
  - Commands: None
  - Files to create/change: /context/ThemeProvider.tsx, /hooks/useTheme.ts
  - Expected result: Tabs and screens consume theme colors via useTheme.

- [ ] Step 8.2
  - Goal: Define local assets strategy with key mapping helper.
  - Commands: None
  - Files to create/change: /assets/avatars, /assets/images, /services/asset-map.ts
  - Expected result: Assets referenced via key to require() mapping helper.

- [ ] Step 8.3
  - Goal: Add local notification demo.
  - Commands: None
  - Files to create/change: /services/notifications.ts, /app/(tabs)/profile/index.tsx
  - Expected result: Profile button triggers test notification; comments note remote push extension points.

## Phase 9 — Quality, Automation & Shipping
- [ ] Step 9.1
  - Goal: Add unit tests for auth and login flows.
  - Commands: None
  - Files to create/change: /context/AuthContext.test.tsx, /services/token-storage.test.ts, /app/(auth)/login.test.tsx
  - Expected result: Tests cover login sets token, token storage works, login screen renders and triggers login.

- [ ] Step 9.2
  - Goal: Add EAS config and instructions.
  - Commands: None
  - Files to create/change: eas.json, README.md
  - Expected result: EAS profiles documented for local and CI builds.

- [ ] Step 9.3
  - Goal: Add GitHub Actions CI for lint, tests, typecheck.
  - Commands: None
  - Files to create/change: .github/workflows/ci.yml
  - Expected result: CI runs on PR/push to main.

- [ ] Step 9.4
  - Goal: Perform final QA pass.
  - Commands: None
  - Files to create/change: None
  - Expected result: App launches, all routes navigable, tests and lint pass.

## Definition of Done
- [ ] App launches and routes correctly through splash, auth, and tabs.
- [ ] Chat, Map, Agenda, and Profile flows function with mocked data.
- [ ] Theme, assets, and notifications behave as defined.
- [ ] Jest tests pass and CI is green.
- [ ] README includes setup, run, and screenshots placeholders.

## Common Issues & Fixes
- [ ] Maps not rendering: confirm iOS/Android permissions and rebuild if needed.
- [ ] SecureStore errors on web: add platform checks and fallback to memory.
- [ ] Notifications not firing: verify permissions and device settings.
- [ ] Calendar styles off: ensure react-native-calendars theme is applied.

## How to Reuse This Template
- [ ] Duplicate the repo, update the app name/slug, and replace mock data first.
- [ ] Keep the routing and auth gate intact, then swap in new feature data/models.
- [ ] Update assets and theme colors to match the new brand.

## Links
- Expo Router: https://docs.expo.dev/router/introduction/
- SecureStore: https://docs.expo.dev/versions/latest/sdk/securestore/
- Maps: https://docs.expo.dev/versions/latest/sdk/map-view/
- Calendars: https://github.com/wix/react-native-calendars
- Notifications: https://docs.expo.dev/versions/latest/sdk/notifications/
- EAS: https://docs.expo.dev/eas/
- GitHub Actions: https://docs.github.com/en/actions
- Jest: https://jestjs.io/docs/getting-started
