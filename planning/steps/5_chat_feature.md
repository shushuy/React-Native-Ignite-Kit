# Step 5: Chat Feature

1) **Render chats list**
- Use a FlatList backed by mock data and avatars.
- Files to create/change: `app/(tabs)/chat/index.tsx`, `mock/chats.json`.
- Expected result: List of chats navigates to detail screen.

2) **Build chat detail with messages and input**
- Render message list, compose input, and timestamp formatting.
- Files to create/change: `app/(tabs)/chat/[chatId].tsx`, `mock/messages.json`, `utils/formatTimestamp.ts`.
- Expected result: Messages render and input appends to list.

3) **Add image viewer route for message images**
- Full-screen image view for message attachments.
- Files to create/change: `app/(tabs)/chat/image/[imageKey].tsx`, `assets/images/*`.
- Expected result: Tapping a message image opens a full-screen viewer.
