import { InventoryImporter } from '../../../src/inventory/service/importer'

describe('Inventory: InventoryImporter', () => {
  let importer: InventoryImporter

  beforeAll(() => {
    importer = new InventoryImporter()
  })

  test('returns tax data', async () => {
    await expect(importer.import()).resolves.not.toThrow()
  })
})
