import { bot } from '@/bot'
import { config } from '@/config'
import { bankers_rounding, convert_money } from '@/utils'
import { InputFile } from 'grammy'
import type { Amount, NumberString } from 'sgqr'
import { generate_code } from 'sgqr'

async function main() {
  const member_count = await bot.api.getChatMemberCount(config.TELEGRAM_CHAT_ID)
  const bill = await convert_money(21, 'USD', 'SGD')
  const bill_per_pax = bankers_rounding(bill / (member_count - 1), 2).toFixed(2) as Amount
  const phone_number = config.PHONE_NUMBER as unknown as NumberString

  const data = await generate_code({
    number: `+65${phone_number}`,
    amount: bill_per_pax,
    comments: 'Payment for ChatGPT',
    days_before_expiry: 5,
    type: 'image/webp'
  })

  if (!data) {
    throw new Error('Failed to generate the QR code!')
  }

  await bot.api.sendPhoto(config.TELEGRAM_CHAT_ID, new InputFile(data), {
    caption: `Please pay Winston@${config.PAYLAH_LINK}\nAmount: SG$${bill_per_pax}\n\nThe price is calculated based on the current exchange rate.`
  })

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
