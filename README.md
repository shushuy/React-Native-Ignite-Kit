# React Native Ignite Kit

Blog Post Draft: `BLOG_POST.md` is gitignored and used for drafting.

## App Demo
![App demo](assets/readme/appDemo.gif)

## Project Structure
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
/docs/screenshots
```

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

## Navigation
Each tab uses a nested stack to present native detail screens like chat threads, business details, event details, and the image viewer.

## Chat
Chat flows from list → detail → image viewer, using mocked JSON data and local asset key mapping.

## Map
Map markers come from mock locations; tapping a marker opens the detail screen.

## Agenda
Calendar shows marked dates; selecting a day lists events, and tapping one opens the detail view.

## Notifications (Local Demo)
The Profile tab includes a local notifications demo using `expo-notifications`. Remote push requires extra setup (including device tokens and server-side delivery) and a physical device.

## Reuse This Template
1) Clone or fork the repo.
2) Rename the app by updating `app.config.ts` (name/slug/scheme) or set the `EXPO_PUBLIC_*` env vars.
3) Update bundle identifiers: `EXPO_PUBLIC_IOS_BUNDLE_IDENTIFIER` and `EXPO_PUBLIC_ANDROID_PACKAGE`.
4) Replace mock data in `/mock` and swap assets in `/assets`.
5) Replace tabs/features by editing routes in `/app/(tabs)`.
6) Run checks: `npm run lint`, `npm run test`, `npm run typecheck`.
7) Build with EAS:
   - `eas login`
   - `eas init`
   - `eas build --profile preview --platform ios`
   - `eas build --profile preview --platform android`

## Testing
- `npm test`
- `npm run test:watch`

## CI
Runs on pushes to `main` and pull requests targeting `main`. Executes lint and `test:ci` (typecheck is available but commented out).

## Troubleshooting
- Clear Metro cache: `npx expo start -c`
- Reinstall dependencies: `rm -rf node_modules package-lock.json && npm install`
- Maps not rendering: confirm permissions and rebuild native binaries for iOS/Android.
- Calendar issues: verify `react-native-calendars` setup and re-run `npm install` if patches are missing.

## Linting & Formatting
- `npm run lint`
- `npm run lint:fix`
- `npm run format`
- `npm run typecheck`

## EAS Build & Deploy
- Install EAS CLI: `npm install -g eas-cli`
- Authenticate: `eas login`
- Initialize: `eas init`
- Preview builds:
  - `eas build --profile preview --platform ios`
  - `eas build --profile preview --platform android`
- Notes: production builds require Apple/Google store setup; preview builds are great for sharing with stakeholders.
