# chatgpt-bill-bot

[![main.yml](https://github.com/winstxnhdw/chatgpt-bill-bot/actions/workflows/main.yml/badge.svg)](https://github.com/winstxnhdw/chatgpt-bill-bot/actions/workflows/main.yml)
[![release.yml](https://github.com/winstxnhdw/chatgpt-bill-bot/actions/workflows/release.yml/badge.svg)](https://github.com/winstxnhdw/chatgpt-bill-bot/actions/workflows/release.yml)
[![announce.yml](https://github.com/winstxnhdw/chatgpt-bill-bot/actions/workflows/announce.yml/badge.svg)](https://github.com/winstxnhdw/chatgpt-bill-bot/actions/workflows/announce.yml)

A scheduled Telegram bot for announcing the bill to members in a chat group.

## Commands

### Setup

Populate the `.env` file.

```bash
{
  echo "TELEGRAM_BOT_TOKEN=$TELEGRAM_BOT_TOKEN"
  echo "TELEGRAM_CHAT_ID=$TELEGRAM_CHAT_ID"
  echo "FIXER_API_KEY=$FIXER_API_KEY"
  echo "PHONE_NUMBER=$PHONE_NUMBER"
  echo "PAYLAH_LINK=$PAYLAH_LINK"
} >> .env
```

Install all dependencies.

```bash
bun install
```

Run your application.

```bash
bun dev
```

### Build

Build a non-minified binary of your Bun application. For debugging purposes.

```bash
bun run build
```

Build a production-ready binary of your Bun application.

```bash
bun run build --minify
```

### Test

Run your tests with hot reloading.

```bash
bun run test
```

Run your tests without hot reloading. For testing in a CI pipeline.

```bash
bun test
```

You can run an end-to-end test with the following command.

```bash
bun e2e
```

You can get the chat ID of a active Telegram chat group with the following command.

```bash
bun chat
```
