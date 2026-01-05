# Codex Config

## Project Identity
Name: react-native-ignite-kit
Purpose: Expo Router + TS template built with Codex for replicable mobile app builds.
Portfolio-ready architecture.

## App States
Splash gate:
- checks token/credentials
- routes to Auth or Authed Tabs
- re-checks token when app returns from background (AppState)

Auth stack:
- Login
- Forgot Password (nested view inside auth stack)

Authed Tabs (4):
- Chat (FlatList chats/messages, nested chat detail + input, image viewer route)
- Map (react-native-maps markers, business detail nested route)
- Agenda (react-native-calendars, event detail nested route)
- Profile (mocked user from JSON, plan/cost, logout, dev reset button)

## Architecture Preferences
- Expo Router with route groups: (auth) and (tabs)
- Nested stack routes inside each tab
- Functional components + hooks
- React Context only for global state (AuthContext + AppProvider)
- Mocked data stored in /mock JSON files
- Local images in /assets, referenced via key mapping helper

## Theming
- System theme only (colors only) using useColorScheme
- ThemeProvider + useTheme() hook
- Tabs + screens use theme colors

## Notifications
- Local notifications demo using expo-notifications
- Profile includes "Send Test Notification" button
- No remote push token behavior (only comments for future extension)

## Quality + Tooling
- ESLint + Prettier
- Jest unit tests (basic but real)
- EAS config
- GitHub Actions CI (lint + test + typecheck on PR/push to main)

## Codex Output Rules
- Keep changes small & incremental
- Avoid huge diffs in one step
- Show updated file tree
- Only output created/changed files
- Always update /planning/history.md after meaningful work
- Use comments for future devs (but don't over-comment)

## Codex Coding Rules
- Use const files to avoid magic strings
- Create unit tests for all the component files
- Component files should be camel case e.g. `<Button />` file: Button.ts
- Use React hooks as much as possible (useMemo, UseCallback)
- Avoid inline styles, create a file name match in /styles folder
- Keep all the functions in its own files within /utils folder with test files along like: get-string.ts + get-string.test.js

## Required Context Prompt
When starting any new task, always load these files first:
1) `planning/README.md`
2) `planning/codex-config.md`
3) `planning/progress-plan.md`
4) `planning/history.md`

Prompt template:
\"Read `planning/README.md`, then `planning/codex-config.md`, `planning/progress-plan.md`, and `planning/history.md` for full context and rules. After that, [your task].\"
