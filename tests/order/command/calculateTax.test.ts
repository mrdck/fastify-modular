import { CalculateTaxCommand } from '../../../src/order/command/calculateTax'

describe('Order: CalculateTaxCommand', () => {
  let command: CalculateTaxCommand

  beforeAll(() => {
    command = new CalculateTaxCommand()
  })

  test('resolves for valid payload', async () => {
    const payload = {
      id:    'foo',
      price: 1234,
    }

    await expect(command.execute(payload)).resolves.not.toThrow()
  })
})
