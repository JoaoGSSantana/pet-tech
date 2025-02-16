// Possui todas as configurações principais para a execução da API

import fastify from 'fastify'
import { personRoutes } from '@/http/controllers/person/routes'
import { userRoutes } from './http/controllers/user/routes'
import { ZodError } from 'zod'
import { env } from './env'
import { ResourceNotFoundError } from './use-cases/errors/resource-not-found'

export const app = fastify()

app.register(personRoutes)
app.register(userRoutes)

app.setErrorHandler((error, _, reply) => {
  if (error instanceof ZodError) {
    return reply
      .status(400)
      .send({ message: 'Validation Error', errors: error.errors })
  }

  if (error instanceof ResourceNotFoundError) {
    return reply.status(404).send({ message: 'Resource Not Found' })
  }

  if (env.NODE_ENV === 'development') {
    console.error(error)
  }

  return reply.status(500).send({ message: 'Internal Server Error' })
})
