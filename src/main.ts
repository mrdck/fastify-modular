import 'reflect-metadata'

import { bootstrapper } from './server'

import config from './config'
import order from './order'
import inventory from './inventory'

bootstrapper()
  .then(async app => {
    app.register(config)
    app.register(order)
    app.register(inventory)

    await app.start()

    process.on('SIGTERM', () => {
      app.stop().then(() => process.exit(1))
    })
  })
  .catch(error => {
    console.error(error)
    process.exit(1)
  })
