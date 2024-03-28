import { config } from '@/config'
import { Bot } from 'grammy'

export const bot = new Bot(config.TELEGRAM_BOT_TOKEN)
