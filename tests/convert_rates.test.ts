import { convert_rates } from '@/utils/convert_rates'
import { expect, test } from 'bun:test'

const amount = 1

test('can convert rates correctly', () => {
  const from_rates = 1.0
  const to_rates = 1.5
  expect(convert_rates(amount, from_rates, to_rates)).toBe(1.5)
})

test('can convert rates correctly', () => {
  const from_rates = 1.1
  const to_rates = 2.2
  expect(convert_rates(amount, from_rates, to_rates)).toBe(2)
})

test('can convert rates correctly', () => {
  const from_rates = 1.2
  const to_rates = 2.4
  expect(convert_rates(amount, from_rates, to_rates)).toBe(2)
})
