# React Native Ignite Kit

Blog Post Draft: `BLOG_POST.md` is gitignored and used for drafting.

## Mock Data
Mock JSON lives in `/mock`. Asset keys in the JSON map to local images via `/services/assets.ts`, with fallbacks to template placeholders until real assets are added.

## Theming
System theme only (light/dark) using `useColorScheme`. Extend the palette in `/context/ThemeContext.tsx` when new colors are needed.

## Auth Flow
The app boots into a splash gate (`/app/index.tsx`) that checks stored auth state and routes to `(auth)` or `(tabs)`. Token storage uses SecureStore via `/services/tokenStorage.ts`, with a refresh on AppState foreground.

## Auth Screens
Login and Forgot Password are themed screens with mocked auth behavior. Login sets a fake token; Forgot Password shows a confirmation alert.

## Tabs Structure
The authenticated experience uses four tabs (Chat, Map, Agenda, Profile) with a nested stack inside each tab for future detail routes.

## Chat
Chat flows from list → detail → image viewer, using mocked JSON data and local asset key mapping.

## Map
Map markers come from mock locations; tapping a marker opens the detail screen.

## Agenda
Calendar shows marked dates; selecting a day lists events, and tapping one opens the detail view.

## Notifications (Local Demo)
The Profile tab includes a local notifications demo using `expo-notifications`. Remote push requires extra setup (including device tokens and server-side delivery) and a physical device.

## Testing
- `npm test`
- `npm run test:watch`
