# Codex Config

## Project identity
- Name: react-native-ignite-kit
- Purpose: Expo Router + TS template built with Codex for replicable mobile app builds.
- Goal: Portfolio-ready architecture and a documented agent-assisted build story for the blog post.

## App states
- Splash gate: checks token/credentials, routes to Auth or Authed Tabs, re-checks token when app returns from background (AppState).
- Auth stack: Login + Forgot Password (nested view inside auth stack).
- Authed tabs (4):
  - Chat (FlatList chats/messages, nested chat detail + input, image viewer route)
  - Map (react-native-maps markers, business detail nested route)
  - Agenda (react-native-calendars, event detail nested route)
  - Profile (mocked user from JSON, plan/cost, logout, dev reset button)

## Architecture preferences
- Expo Router with route groups: (auth) and (tabs).
- Nested stack routes inside each tab.
- Functional components + hooks.
- React Context only for global state (AuthContext + AppProvider).
- Mocked data stored in /mock JSON files.
- Local images in /assets, referenced via key mapping helper.

## Theming
- System theme only (colors only) using useColorScheme.
- ThemeProvider + useTheme() hook.
- Tabs + screens use theme colors.

## Notifications
- Local notifications demo using expo-notifications.
- Profile includes "Send Test Notification" button.
- No remote push token behavior (only comments for future extension).

## Quality + tooling
- ESLint + Prettier.
- Jest unit tests (basic but real).
- EAS config.
- GitHub Actions CI (lint + test + typecheck on PR/push to main).

## Codex output rules
- Keep changes small & incremental.
- Avoid huge diffs in one step.
- Show updated file tree.
- Only output created/changed files.
- Always update /planning/change-log.md after meaningful work.
- Use comments for future devs (but don't over-comment).
- At the end of any big step code change, add the commit message to simplify the push.

## Codex coding rules
- Use const files to avoid magic strings.
- Create unit tests for all the component files.
- Component files should be camel case e.g. <Button /> file: Button.ts.
- Use React hooks as much as possible (useMemo, UseCallback).
- Avoid inline styles, create a file name match in /styles folder.
- Keep all the functions in its own files within /utils folder with test files along like: get-string.ts + get-string.test.js.

## Planning context (read this first)
- `planning/progress-plan.md` is the source-of-truth build plan.
- `planning/steps/*.md` contains step-by-step task lists.
- `planning/change-log.md` shows what already changed and why.
- `planning/prompt-history.md` records past prompts/requests.
- The planning structure is designed to be copied or used as a cloneable template for new projects.
- When updating `planning/prompt-history.md`, append the relevant `planning/steps/*.md` file(s) in parentheses at the end of the entry. If no matching step exists, create it first.

## Required context prompt
When starting any new task, always load these files first:
1) `planning/progress-plan.md`
2) `planning/codex-config.md`
3) `planning/change-log.md`
4) `planning/prompt-history.md`

Prompt template:
"Read `planning/progress-plan.md`, then `planning/codex-config.md`, `planning/change-log.md`, and `planning/prompt-history.md` for full context and rules. After that, [your task]."
