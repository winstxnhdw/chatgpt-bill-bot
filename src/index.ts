import { bot } from '@/bot'
import { config } from '@/config'
import { bankers_rounding, convert_money } from '@/utils'

async function main() {
  const member_count = await bot.api.getChatMemberCount(config.TELEGRAM_CHAT_ID)
  const bill = await convert_money(21, 'USD', 'SGD')
  const bill_per_pax = bankers_rounding(bill / (member_count - 1), 2)

  await bot.api.sendMessage(
    config.TELEGRAM_CHAT_ID,
    `Please pay Winston@${config.PHONE_NUMBER}\nAmount: SG$${bill_per_pax}\n\nThe price is calculated based on the current exchange rate.`
  )

  const poll_options = {
    is_anonymous: false,
    type: 'quiz',
    correct_option_id: 0
  } as const

  await bot.api.sendPoll(
    config.TELEGRAM_CHAT_ID,
    'Have you paid?',
    ['Paid 🤩', 'I am a stupid brokie who has not paid 😭'],
    poll_options
  )
}

void main()
