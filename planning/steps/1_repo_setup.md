# Step 1: Repo + Infra Setup

1) **Clone the repo and enter the project**
- Commands:
  ```bash
  git clone git@github.com:shushuy/React-Native-Ignite-Kit.git
  cd React-Native-Ignite-Kit
  ```
- Expected result: Local repo ready for setup.
- Blog note: this is the recommended starting point for readers who want to clone and immediately build on the template.

2) **Initialize Expo Router + TypeScript**
- Command:
  ```bash
  npx create-expo-app . --template
  ```
- Files to create/change: Expo starter files under `/app` and config files.
- Expected result: Base Expo Router Tabs + TypeScript template created.

3) **Install Codex CLI (optional helper)**
- Command:
  ```bash
  npm install -g @openai/codex
  ```
- Expected result: Codex CLI available globally.

4) **Install dependencies used by the repo**
- Commands:
  ```bash
  npx expo install expo-router react-native-safe-area-context react-native-screens
  npx expo install expo-secure-store
  npx expo install react-native-maps
  npm install react-native-calendars
  npx expo install expo-notifications
  npm install nativewind
  npm install --save-dev tailwindcss
  npx tailwindcss init
  npm install --save-dev eslint prettier eslint-config-prettier eslint-plugin-prettier
  npm install --save-dev @typescript-eslint/eslint-plugin @typescript-eslint/parser
  npm install --save-dev jest jest-expo
  npm install --save-dev @testing-library/react-native @testing-library/jest-native
  npm install --save-dev react-test-renderer
  ```
- Files to create/change: `package.json`, `package-lock.json`, `tailwind.config.js`.
- Expected result: All dependencies installed and Tailwind config created.

5) **Set up ESLint and Prettier**
- Files to create/change: ESLint config file, Prettier config file.
- Expected result: Linting and formatting configured.

6) **Add environment files**
- Files to create/change: `.env`, `.env.example`.
- Expected result: Local env file present with example template.

7) **Update ignore rules**
- Files to create/change: `.gitignore`.
- Expected result: `.env`, `BLOG_POST.md`, and Expo/macOS artifacts ignored.

8) **Create planning docs**
- Files to create/change: `planning/codex-config.md`, `planning/change-log.md`, `planning/progress-plan.md`, `planning/steps/*.md`.
- Expected result: Planning docs available for repeatable guidance.

9) **Create README with screenshot placeholders**
- Files to create/change: `README.md`.
- Expected result: README includes install/run steps and image placeholders.

10) **Commit and push to GitHub**
- Commands:
  ```bash
  git remote -v
  git remote set-url origin git@github.com:shushuy/React-Native-Ignite-Kit.git
  git branch -M main
  git add .
  git commit -m "chore: initial commit"
  git push -u origin main
  ```
- Expected result: Remote repo updated on main.
- Note: Use force push only when intentionally overwriting remote history.
  ```bash
  git push -u origin main --force
  ```
