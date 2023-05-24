import { config } from '@/config'

interface Rates {
  USD: number
  SGD: number
}

interface ExchangeRatesRequest {
  rates: Rates
}

type Currency = keyof Rates

const get_all_exchange_rates = async (): Promise<ExchangeRatesRequest> => {
  const request = await fetch(`http://data.fixer.io/api/latest?access_key=${config.FIXER_API_KEY}`)
  return request.json() as Promise<ExchangeRatesRequest>
}

export const convert_rates = (amount: number, from_rates: number, to_rates: number) => (amount / from_rates) * to_rates

export const convert_money = async (amount: number, from: Currency, to: Currency) => {
  const exchange_rates = await get_all_exchange_rates()
  return convert_rates(amount, exchange_rates.rates[from], exchange_rates.rates[to])
}
