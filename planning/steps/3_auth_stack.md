# Step 3: Auth Stack

1) **Create (auth) group layout**
- Define the auth stack group layout and header behavior.
- Files to create/change: `app/(auth)/_layout.tsx`.
- Expected result: Auth stack routes are grouped and isolated.

2) **Build Login and Forgot Password screens**
- Build login and forgot password flows with simple validation and token set.
- Files to create/change: `app/(auth)/login.tsx`, `app/(auth)/forgot-password.tsx`.
- Expected result: Fake login succeeds, sets token, routes to tabs; forgot password nested in auth stack.
