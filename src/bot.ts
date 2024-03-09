import { config } from '@/config'
import { Bot } from 'grammy'
import type { UserFromGetMe } from 'grammy/types'

export const bot = new Bot(config.TELEGRAM_BOT_TOKEN, {
  botInfo: {
    is_bot: true,
    first_name: 'ChatGPTBillBot',
    username: 'ChatGPTBillBot',
    language_code: 'en',
    can_join_groups: true,
    can_read_all_group_messages: true,
    supports_inline_queries: true
  } as UserFromGetMe
})
