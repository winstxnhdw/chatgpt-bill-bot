import { bankers_rounding } from '@/utils/round'
import { expect } from 'chai'

describe('round', () => {
  it('it should return a number', () => expect(bankers_rounding(0.0, 2)).to.be.a('number'))

  it('it should always round floats correctly', () => {
    const test_cases = {
      '5.6723': 5.67,
      '-7.4567': -7.46,
      '10.1245': 10.12,
      '-18.9956': -19.0,
      '3.1415': 3.14,
      '-1.2345': -1.23,
      '8.7654': 8.77,
      '-0.0912': -0.09,
      '20.5876': 20.59,
      '-30.1298': -30.13,
      '15.3741': 15.37,
      '-24.6587': -24.66,
      '50.8846': 50.88,
      '-37.7459': -37.75,
      '44.2398': 44.24,
      '-56.9084': -56.91,
      '64.3869': 64.39,
      '-72.5473': -72.55,
      '80.6145': 80.61,
      '-88.8395': -88.84
    }

    for (const [input, expected_output] of Object.entries(test_cases)) {
      expect(bankers_rounding(Number(input), 2)).to.equal(expected_output)
    }
  })
})
