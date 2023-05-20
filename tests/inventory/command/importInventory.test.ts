import { ImportInventoryCommand } from '../../../src/inventory/command/importInventory'

describe('Order: ImportInventoryCommand', () => {
  let command: ImportInventoryCommand

  beforeAll(() => {
    command = new ImportInventoryCommand()
  })

  test('resolves and import inventory', async () => {
    await expect(command.execute()).resolves.not.toThrow()
  })
})
