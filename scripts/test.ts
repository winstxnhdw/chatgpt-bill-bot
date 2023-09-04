import { bot } from '@/bot'
import { config } from '@/config'

async function main() {
  await bot.api.sendMessage(config.TELEGRAM_CHAT_ID, 'This is a test message. You may ignore it, brokie.')
}

void main()
