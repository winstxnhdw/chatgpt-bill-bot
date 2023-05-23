import { Decimal } from 'decimal.js'

export const bankers_rounding = (number: number, decimal_place: number): number =>
  Number(new Decimal(number).toDecimalPlaces(decimal_place, Decimal.ROUND_HALF_EVEN))
