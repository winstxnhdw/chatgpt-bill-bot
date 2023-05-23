export const convert_rates = (amount: number, from_rates: number, to_rates: number): number =>
  (amount / from_rates) * to_rates
