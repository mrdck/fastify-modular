import fp from 'fastify-plugin'
import { FastifyInstance, FastifyPluginOptions } from 'fastify'

import { MemoryStorage } from './memory'

export * from './memory'

declare module 'fastify' {
  interface FastifyInstance {
    drivers: {
      memory: MemoryStorage
    }
  }
}

const drivers = async (fastify: FastifyInstance, options: FastifyPluginOptions) => {
  const config = fastify.config.storage
  const memory = new MemoryStorage(config.ttl)

  fastify.decorate('drivers', { memory })
}

export default fp(drivers)
