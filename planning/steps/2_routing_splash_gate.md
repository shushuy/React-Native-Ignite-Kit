# Step 2: Routing & Splash Gate

1) **Define root stack and route groups**
- Create root layout with the splash gate and `(auth)` / `(tabs)` groups.
- Files to create/change: `app/_layout.tsx`.
- Expected result: Root stack routes to auth or tabs based on gate state.

2) **Implement token gate hook + storage adapter**
- Add token storage adapter using SecureStore and an auth gate hook.
- Files to create/change: `hooks/useAuthGate.ts`, `services/tokenStorage.ts`.
- Expected result: Token checks route to auth or tabs; SecureStore used with comments for AsyncStorage swap.

3) **Re-check token on app foreground**
- Add AppState listener to refresh auth when returning to the foreground.
- Files to create/change: `hooks/useAuthGate.ts` (or `services/tokenStorage.ts`).
- Expected result: Auth state refreshes on background-to-foreground transitions.
