import { FastifyRequest, FastifyReply, RouteOptions } from 'fastify'
import { JSONSchemaType } from 'ajv'

import { CalculateTaxCommand } from '../command/calculateTax'
import { CreateOrderRequest } from '../model/orderCreate'

const CreateOrderRequestSchema: JSONSchemaType<CreateOrderRequest> = {
  type:     'object',
  required: ['id', 'price'],

  additionalProperties: false,

  properties: {
    id: {
      type: 'string',
    },
    price: {
      type: 'number',
    },
  },
}

export const createOrder: RouteOptions = {
  url:    '/order',
  method: 'POST',
  schema: {
    body: CreateOrderRequestSchema,
  },

  handler: async (req: FastifyRequest, res: FastifyReply) => {
    const payload = req.body as CreateOrderRequest
    const command = new CalculateTaxCommand()

    /**
     * This command potentially estimate and set tax rate for Order
     */
    await command.execute(payload)

    return res.status(204).send()
  },
}
