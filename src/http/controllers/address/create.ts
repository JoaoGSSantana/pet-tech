import { makeCreateAddressUseCase } from '@/use-cases/factory/make-create-address-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function create(request: FastifyRequest, reply: FastifyReply) {
  const registerBodySchema = z.object({
    street: z.string(),
    city: z.string(),
    state: z.string(),
    zip_code: z.string(),
    person_id: z.coerce.number(),
  })

  const { street, city, state, zip_code, person_id } = registerBodySchema.parse(
    request.body,
  )

  const createAddressUseCase = makeCreateAddressUseCase()

  await createAddressUseCase.handler({
    street,
    city,
    state,
    zip_code,
    person_id,
  })

  return reply.status(201).send()
}
