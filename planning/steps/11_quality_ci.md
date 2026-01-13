# Step 11: Quality + CI

1) **Wire ESLint + Prettier**
- Add ESLint/Prettier configs and scripts.
- Files to create/change: ESLint config, Prettier config, `package.json` scripts.
- Expected result: Linting and formatting run locally and in CI.

2) **Add Jest setup and unit tests**
- Configure Jest + React Native Testing Library and add tests for utils/components.
- Files to create/change: Jest config/setup, `components/__tests__/*`, `utils/*.test.ts`.
- Expected result: Unit tests cover core utilities and components.

3) **Add EAS config and GitHub Actions**
- Configure EAS and CI workflows (lint + test + typecheck on PR/push to main).
- Files to create/change: `eas.json`, `.github/workflows/*`.
- Expected result: CI runs reliably and builds are ready for deployment.
