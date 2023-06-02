import { config } from '@/config'
import { Settings } from '@/settings'
import type { Context } from 'grammy'
import { Bot as GrammyBot } from 'grammy'
import type { UserFromGetMe } from 'grammy/types'

class Bot {
  private readonly bot: GrammyBot

  constructor(token: string, settings: UserFromGetMe) {
    this.bot = new GrammyBot<Context>(token, {
      botInfo: settings,
      client: {
        canUseWebhookReply: (method) => method === 'sendChatAction'
      }
    })
  }

  get internal(): GrammyBot {
    return this.bot
  }

  private set_conversations(): this {
    return this
  }

  private set_plugins(): this {
    this.set_conversations()
    return this
  }

  private set_middlewares(): this {
    return this
  }

  build(): GrammyBot {
    this.set_plugins().set_middlewares()
    return this.bot
  }
}

export const bot = new Bot(config.TELEGRAM_BOT_TOKEN, Settings)
