import 'dotenv/config'
import { cleanEnv, makeValidator, str } from 'envalid'
import { env } from 'process'

export const token = makeValidator((token) => {
  if (typeof token !== 'string') throw new Error('Token must be a string.')
  if (!/^[0-9]+:[a-zA-Z0-9]+-.[\s\S]+/.test(token)) throw new Error('Invalid token.')
  return token
})

export const config = cleanEnv(env, {
  TELEGRAM_BOT_TOKEN: token(),
  TELEGRAM_CHAT_ID: str(),
  FIXER_API_KEY: str(),
  PHONE_NUMBER: str()
})
