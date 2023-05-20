import { FastifyRequest, FastifyReply, RouteOptions } from 'fastify'
import { ImportInventoryCommand } from '../command/importInventory'

export const webhook: RouteOptions = {
  url:    '/inventory/webhook',
  method: 'POST',

  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  onResponse: async (request, reply) => {
    const command = new ImportInventoryCommand()

    await command.execute()
  },

  handler: async (req: FastifyRequest, res: FastifyReply) => {
    return res.status(204).send()
  },
}
