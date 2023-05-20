import { TaxProvider } from '../service/taxProvider'
import { CreateOrderRequest as Payload } from '../model/orderCreate'

export class CalculateTaxCommand {
  #provider: TaxProvider

  constructor() {
    this.#provider = new TaxProvider()
  }

  async execute(data: Payload) {
    console.log('Payload:', data)

    const tax = await this.#provider.estimate()

    console.log('tax:', tax)

    return Promise.resolve()
  }
}
