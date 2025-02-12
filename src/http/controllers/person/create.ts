import { PersonRepository } from '@/repositories/person.repository'
import { CreatePersonUseCase } from '@/use-cases/create-person'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function create(request: FastifyRequest, reply: FastifyReply) {
  const registerBodySchema = z.object({
    cpf: z.string(),
    name: z.string(),
    birthday: z.coerce.date(),
    email: z.string().email(),
  })

  const { cpf, name, birthday, email } = registerBodySchema.parse(request.body)

  try {
    const personRepository = new PersonRepository()
    const createPersonUseCase = new CreatePersonUseCase(personRepository)

    await createPersonUseCase.handler({ cpf, name, birthday, email })

    return reply.status(201).send()
  } catch (error) {
    console.error(error)

    throw new Error('Internal Server Error')
  }
}
