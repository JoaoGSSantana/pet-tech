import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

import { makeCreateUserUseCase } from '@/use-cases/factory/make-create-user-use-case'

export async function create(request: FastifyRequest, reply: FastifyReply) {
  const registerBodySchema = z.object({
    username: z.string(),
    password: z.string(),
  })

  const { username, password } = registerBodySchema.parse(request.body)

  try {
    const createUserUseCase = makeCreateUserUseCase()

    const user = await createUserUseCase.handle({ username, password })

    return reply.status(201).send(user)
  } catch (error) {
    console.error(`Error on trying create user: ${error}`)

    throw new Error(`Error on trying create user: ${error}`)
  }
}
