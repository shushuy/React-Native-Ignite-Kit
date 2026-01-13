# Step 11: Quality + CI

1) **Wire ESLint + Prettier**
- Add ESLint/Prettier configs and scripts.
- Files to create/change: ESLint config, Prettier config, `package.json` scripts.
- Expected result: Linting and formatting run locally and in CI.

2) **Add Jest setup and unit tests**
- Configure Jest + React Native Testing Library and add tests for utils/components.
- Files to create/change: Jest config/setup, `components/__tests__/*`, `utils/*.test.ts`.
- Expected result: Unit tests cover core utilities and components.

3) **Add basic unit testing (Auth + login)**
- Configure jest-expo preset, add `jest.setup.ts`, and add CI-friendly scripts.
- Mock SecureStore for deterministic token storage tests.
- Create tests for AuthContext, token storage adapter, and the Login screen.
- Files to create/change: `jest.config.js`, `jest.setup.ts`, `__mocks__/expo-secure-store.ts`, `context/__tests__/AuthContext.test.tsx`, `services/__tests__/tokenStorage.test.ts`, `app/(auth)/__tests__/LoginScreen.test.tsx`, `package.json`, `README.md`.
- Expected result: Auth and login tests pass locally and in CI.

4) **Add EAS config and GitHub Actions**
- Configure EAS and CI workflows (lint + test + typecheck on PR/push to main).
- Files to create/change: `eas.json`, `.github/workflows/*`.
- Expected result: CI runs reliably and builds are ready for deployment.

5) **Document template usage for the blog post**
- Capture how to reuse this repo: clone the template, copy the planning structure, and follow the steps.
- Files to create/change: `BLOG_POST.md`, `README.md`, `planning/progress-plan.md` (if needed).
- Expected result: Blog readers can recreate the repo or reuse the planning system for new projects.
