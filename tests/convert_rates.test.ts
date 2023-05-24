import { convert_rates } from '@/utils'
import { expect } from 'chai'

describe('convert_rates', () => {
  const amount = 1

  it('it should convert rates correctly', () => {
    const from_rates = 1.0
    const to_rates = 1.5
    expect(convert_rates(amount, from_rates, to_rates)).to.equal(1.5)
  })

  it('it should convert rates correctly', () => {
    const from_rates = 1.1
    const to_rates = 2.2
    expect(convert_rates(amount, from_rates, to_rates)).to.equal(2)
  })

  it('it should convert rates correctly', () => {
    const from_rates = 1.2
    const to_rates = 2.4
    expect(convert_rates(amount, from_rates, to_rates)).to.equal(2)
  })
})
