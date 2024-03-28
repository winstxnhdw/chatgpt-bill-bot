import { bot } from '@/bot'

async function main() {
  const updates = await bot.api.getUpdates()
  const chat_indices = updates.map(({ my_chat_member }) => console.log(my_chat_member?.chat.id))

  chat_indices.length > 0 || console.log('No chat indices found. Please ping the bot first.')
}

void main()
