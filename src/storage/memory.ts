import NodeCache from 'node-cache'

export class MemoryStorage {
  private store: NodeCache

  constructor(ttl: number) {
    this.store = new NodeCache({
      stdTTL: ttl,
    })
  }

  get<T>(key: string) {
    return this.store.get<T>(key)
  }

  save<T>(key: string, data: unknown) {
    this.store.set(key, data)
  }
}
