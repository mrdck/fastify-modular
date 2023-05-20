import { FastifyInstance } from 'fastify'

import { routing } from './api'

export default async function (instance: FastifyInstance) {
  routing.forEach(route => instance.route(route))
}
