import { InventoryImporter } from '../service/importer'

export class ImportInventoryCommand {
  #importer: InventoryImporter

  constructor() {
    this.#importer = new InventoryImporter()
  }

  async execute() {
    await Promise.resolve()
  }
}
