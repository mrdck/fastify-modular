import { MemoryStorage } from '../../src/storage'

describe('Storage: Memory', () => {
  let memory: MemoryStorage

  beforeAll(() => {
    memory = new MemoryStorage(3600)
  })

  test('test lifecycle', () => {
    const data = {
      foo: 'bar',
    }

    expect(() => memory.save('foo', data)).not.toThrow()
    expect(memory.get('foo')).toEqual(data)
  })
})
