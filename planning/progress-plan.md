# Daily restart prompt: "Before coding, read planning/progress-plan.md for source-of-truth context and follow its steps."

# React Native Ignite Kit Progress Plan

This repo is an Expo Router + TypeScript template for repeatable mobile builds with a portfolio-ready architecture. Use this file as the overview, then drill into `planning/steps/*.md` for the detailed task lists.

## Source-of-truth context
- Rules and preferences: `planning/codex-config.md`
- Work log: `planning/history.md`
- Prompt/request log: `planning/prompt-history.md`

## App scope snapshot
- Splash gate: checks token/credentials, routes to Auth or Authed Tabs, re-checks on app foreground.
- Auth stack: Login + Forgot Password (nested view in auth stack).
- Authed tabs (4): Chat, Map, Agenda, Profile (mocked user, plan/cost, logout, dev reset button).

## Folder structure (end state)
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

## Steps overview
Each step is a shippable slice that unlocks the next. Detailed checklists live in the step files.

1) **Repo + Infra Setup** (`planning/steps/1_repo_setup.md`)
- Clone the repo, scaffold Expo Router + TypeScript, install dependencies, set up tooling, and document the base template.

2) **Routing & Splash Gate** (`planning/steps/2_routing_splash_gate.md`)
- Root stack with splash gate, SecureStore adapter, and AppState refresh.

3) **Auth Stack** (`planning/steps/3_auth_stack.md`)
- (auth) route group, login + forgot password flows, token set + routing.

4) **Tabs + Nested Stacks** (`planning/steps/4_tabs_nested_stacks.md`)
- (tabs) group with Chat, Map, Agenda, Profile tabs and nested stack layouts.

5) **Chat Feature** (`planning/steps/5_chat_feature.md`)
- Chat list, chat detail, and image viewer routes powered by mock data + assets.

6) **Map Feature** (`planning/steps/6_map_feature.md`)
- Map markers with detail screens using mocked locations and local images.

7) **Agenda Feature** (`planning/steps/7_agenda_feature.md`)
- Calendar/agenda list and event detail screens with mocked events.

8) **Mock Data + Assets** (`planning/steps/8_mock_data_assets.md`)
- Create mock datasets, typed loaders, and asset key mapping helpers.

9) **Theming + Layout Polish** (`planning/steps/9_theming_polish.md`)
- ThemeProvider + system colors, shared styles, safe-area layout polish, and consistent headers.

10) **Profile + Notifications** (`planning/steps/10_profile_notifications.md`)
- Profile screen content, test notification hooks, and throttled buttons.

11) **Quality + CI** (`planning/steps/11_quality_ci.md`)
- ESLint/Prettier, Jest, EAS config, and GitHub Actions CI wiring.

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
