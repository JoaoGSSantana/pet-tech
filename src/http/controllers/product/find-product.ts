import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

import { makeFindProductUseCase } from '@/use-cases/factory/make-find-product-use-case'

export async function findProduct(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const registerParamsSchema = z.object({
    id: z.string(),
  })

  const { id } = registerParamsSchema.parse(request.params)

  const findProductUseCase = makeFindProductUseCase()

  const product = await findProductUseCase.handler(id)

  return reply.status(200).send(product)
}
