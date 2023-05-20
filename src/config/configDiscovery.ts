import * as R from 'ramda'
import { camelCase } from 'camel-case'
import { z } from 'zod'

import { InvalidConfigError } from './error'

export class ConfigDiscovery {
  static #Delimiter = '__'

  static discover<T = unknown>(schema: z.Schema, prefix: string, source = process.env) {
    let config = {}

    for (const [key, value] of Object.entries(source)) {
      if (!key.startsWith(prefix)) {
        continue
      }

      const path = key
        .substring(prefix.length)
        .split(ConfigDiscovery.#Delimiter)
        .filter(part => !R.isEmpty(part))
        .map(part => camelCase(part))

      config = R.mergeDeepLeft(R.assocPath(path, value, config), config)
    }

    try {
      schema.parse(config)
    } catch {
      throw new InvalidConfigError()
    }

    return config
  }
}
