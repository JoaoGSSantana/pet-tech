import { FastifyReply, FastifyRequest } from 'fastify'

export async function validateJwt(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  try {
    const routeFreeList = ['POST-/user', 'POST-/user/signin']
    const validateRoute = `${request.method}-${request.raw.url}`

    if (routeFreeList.includes(validateRoute)) return

    await request.jwtVerify()
  } catch (error) {
    reply.code(401).send({ message: 'Unauthorized' })
  }
}
