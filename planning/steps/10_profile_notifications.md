# Step 10: Profile + Notifications

1) **Build Profile tab content**
- Render mocked user profile details, plan/cost, and logout control.
- Files to create/change: `app/(tabs)/profile/index.tsx`, `mock/user.json`.
- Expected result: Profile tab displays user data and supports logout.

2) **Add local notifications demo**
- Create a notifications hook and wire up test buttons on Profile.
- Files to create/change: `hooks/useNotifications.ts`, `constants/notifications.ts`, `constants/profile.ts`.
- Expected result: Local notification scheduling and instant notifications work.

3) **Throttle notification buttons**
- Add cooldown to prevent repeat taps for scheduled and instant notifications.
- Files to create/change: `hooks/useNotifications.ts`, `app/(tabs)/profile/index.tsx`.
- Expected result: Buttons are throttled to prevent accidental spam.
