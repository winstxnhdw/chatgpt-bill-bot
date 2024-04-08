import { coerce, object, string } from 'zod'

export const config = object({
  TELEGRAM_BOT_TOKEN: string().regex(/^[0-9]+:[a-zA-Z0-9]+-.[\s\S]+/, {
    message: 'Invalid token.',
  }),
  TELEGRAM_CHAT_ID: coerce.number(),
  FIXER_API_KEY: string(),
  PHONE_NUMBER: coerce.number(),
  PAYLAH_LINK: string().url(),
  PROXY_LINK: string().url(),
}).parse(Bun.env)
