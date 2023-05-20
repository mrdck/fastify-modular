/**
 * TaxProvider is fake service that provide mocked tax tier
 */
export class TaxProvider {
  async estimate() {
    return {
      country: 'US',
      tax:     23,
    }
  }
}
