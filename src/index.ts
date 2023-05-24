import { bot } from '@/bot'
import { config } from '@/config'
import { bankers_rounding, convert_money } from '@/utils'

async function main() {
  const bot_instance = bot.build()
  const bill = await convert_money(20, 'USD', 'SGD')
  const bill_per_pax = bankers_rounding(bill / 4, 2)

  await bot_instance.api.sendMessage(
    config.TELEGRAM_CHAT_ID,
    `Please pay Winston@${config.PHONE_NUMBER}\nAmount: SG$${bill_per_pax}.\nThe price is calculated based on the current exchange rate.`
  )
}

void main()
