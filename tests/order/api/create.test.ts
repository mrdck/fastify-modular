import fastify, { FastifyInstance } from 'fastify'

import order from '../../../src/order'

describe('Order: API Create', () => {
  let app: FastifyInstance

  beforeAll(async () => {
    app = fastify({
      logger: false,
    })

    await app.register(order)
  })

  test('returns 400 for invalid payload', async () => {
    const response = await app.inject({
      url:     '/order',
      method:  'POST',
      payload: {
        id:  '759bcd5e-40d6-4208-8b7c-7656dbaa3d4d',
        foo: 1234,
      },
    })

    expect(response.statusCode).toEqual(400)
  })

  test('returns 204 for valid payload', async () => {
    const response = await app.inject({
      url:     '/order',
      method:  'POST',
      payload: {
        id:    '759bcd5e-40d6-4208-8b7c-7656dbaa3d4d',
        price: 1234,
      },
    })

    expect(response.statusCode).toEqual(204)
  })
})
