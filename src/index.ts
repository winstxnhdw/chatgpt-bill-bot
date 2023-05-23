import { bot } from '@/bot'
import { config } from '@/config'
import { convert_money } from '@/utils'

async function main() {
  const bot_instance = bot.build()
  const money = await convert_money(20, 'USD', 'SGD')

  await bot_instance.api.sendMessage(
    config.TELEGRAM_CHAT_ID,
    `Please pay Winston@${config.PHONE_NUMBER}\nAmount: SG$${
      money / 4
    }.\nThe price is calculated based on the current exchange rate.`
  )
}

void main()
