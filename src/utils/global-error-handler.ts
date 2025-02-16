import { FastifyReply, FastifyRequest } from 'fastify'
import { ZodError } from 'zod'

import { env } from '@/env'

interface ErrorHandleMap {
  [key: string]: (
    error: Error | ZodError,
    request: FastifyRequest,
    reply: FastifyReply,
  ) => void
}

const errorHandlerMap: ErrorHandleMap = {
  ZodError: (error: Error, _: FastifyRequest, reply: FastifyReply) => {
    return reply.status(400).send({
      message: 'Validation Error',
      ...(error instanceof ZodError && { errors: error.format() }),
    })
  },
  ResourceNotFoundError: (
    error: Error,
    _: FastifyRequest,
    reply: FastifyReply,
  ) => {
    return reply.status(404).send({ message: error.message })
  },
}

export const globalErrorHandler = (
  error: Error,
  _: FastifyRequest,
  reply: FastifyReply,
) => {
  const handler = errorHandlerMap[error.constructor.name]

  if (handler) return handler(error, _, reply)

  if (env.NODE_ENV === 'development') {
    console.error(error)
  }

  return reply.status(500).send({ message: 'Internal Server Error' })
}
