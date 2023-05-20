import fastify, { FastifyInstance } from 'fastify'

import inventory from '../../../src/inventory'

describe('Inventory: API Webhook', () => {
  let app: FastifyInstance

  beforeAll(async () => {
    app = fastify({
      logger: false,
    })

    await app.register(inventory)
  })

  test('returns 204 for valid payload', async () => {
    const response = await app.inject({
      url:    '/inventory/webhook',
      method: 'POST',
    })

    expect(response.statusCode).toEqual(204)
  })
})
