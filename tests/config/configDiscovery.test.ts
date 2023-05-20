import { z } from 'zod'

import { ConfigDiscovery } from '../../src/config/configDiscovery'

const schema = z.object({
  foo:    z.string().nonempty(),
  nested: z.object({
    foo: z.string().nonempty(),

  }),
})

describe('Unit: ConfigDiscovery', () => {
  test('discover and marshall envs directly from process ', () => {
    const source = {
      FOOBAR__FOO:         'foo1',
      FOOBAR__NESTED__FOO: 'bar2',
    } as unknown as typeof process.env

    expect(ConfigDiscovery.discover(schema, 'FOOBAR', source)).toEqual({
      foo:    'foo1',
      nested: {
        foo: 'bar2',
      },
    })
  })

  test('discover only process env that contains service prefix', () => {
    const source = {
      FOO_FOO:             'incorrect',
      BAR_BAR:             'bar',
      FOOBAR__FOO:         'foo1',
      FOOBAR__NESTED__FOO: 'bar2',
    } as unknown as typeof process.env

    expect(ConfigDiscovery.discover(schema, 'FOOBAR', source)).toEqual({
      foo:    'foo1',
      nested: {
        foo: 'bar2',
      },
    })
  })

  test('returns only properties defined in schema (reject additional properties)', () => {
    const source = {
      FOOBAR__FOO:         'baz',
      FOOBAR__NESTED__FOO: 'bar2',
    } as unknown as typeof process.env

    expect(ConfigDiscovery.discover(schema, 'FOOBAR', source)).toEqual({
      foo:    'baz',
      nested: {
        foo: 'bar2',
      },
    })
  })

  test('throws an error for invalid config', () => {
    const source = {
      FOOBAR__FOO: 'baz',
    } as unknown as typeof process.env

    expect(() => ConfigDiscovery.discover(schema, 'FOOBAR', source)).toThrowError()
  })
})
