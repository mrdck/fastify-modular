import { TaxProvider } from '../../../src/order/service/taxProvider'

describe('Order: TaxProvider', () => {
  let taxProvider: TaxProvider

  beforeAll(() => {
    taxProvider = new TaxProvider()
  })

  test('returns tax data', async () => {
    await expect(taxProvider.estimate()).resolves.toEqual({
      country: 'US',
      tax:     23,
    })
  })
})
