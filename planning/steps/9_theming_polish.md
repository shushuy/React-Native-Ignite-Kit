# Step 9: Theming + Layout Polish

1) **Add system theming foundation**
- Create ThemeContext, `useTheme` hook, and apply system colors.
- Files to create/change: `context/ThemeContext.tsx`, `hooks/useTheme.ts`.
- Expected result: Theme colors available to tabs and screens.

2) **Move styles into shared files**
- Create per-screen `*.styles.ts` files and remove inline styles.
- Files to create/change: `styles/*.styles.ts`, relevant screen components.
- Expected result: Styles are centralized and reusable.

3) **Polish layouts and headers**
- Apply safe area padding, hide headers on main screens, and keep detail headers.
- Files to create/change: `app/(tabs)/_layout.tsx`, `app/(tabs)/*/_layout.tsx`, `app/(tabs)/*/index.tsx`.
- Expected result: Tabs look consistent and main screens have clean headers.
