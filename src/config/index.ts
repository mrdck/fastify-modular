import * as dotenv from 'dotenv'

import fp from 'fastify-plugin'
import { z } from 'zod'
import { FastifyInstance } from 'fastify'

import { ConfigDiscovery } from './configDiscovery'

const schema = z.object({
  port:    z.string().transform(port => Number(port)),
  storage: z.object({
    ttl: z.string().transform(ttl => Number(ttl)),
  }),
})

type ConfigType = z.infer<typeof schema>

declare module 'fastify' {
  interface FastifyInstance {
    config: ConfigType
  }
}

async function config(fastify: FastifyInstance) {
  dotenv.config()

  const config = ConfigDiscovery.discover(schema, 'FOO__')

  fastify.decorate('config', config)
}

export default fp(config)
