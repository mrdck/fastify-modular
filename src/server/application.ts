import fastify from 'fastify'

export const bootstrapper = async () => {
  const app = fastify({
    logger: true,
  })

  return {
    instance: app,
    register: app.register,
    start:    async () => {
      await app.ready()
      await app.listen({ port: app.config.port })
    },
    stop: async () => app.close(),
  }
}
