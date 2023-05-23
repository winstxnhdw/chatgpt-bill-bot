import { bot } from '@/bot'
import { config } from '@/config'

async function main() {
  const bot_instance = bot.build()
  await bot_instance.api.sendMessage(config.TELEGRAM_CHAT_ID, 'This is a test message. You may ignore it, brokie.')
}

void main()
