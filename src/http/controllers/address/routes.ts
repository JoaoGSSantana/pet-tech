import { FastifyInstance } from 'fastify'
import { create } from './create'
import { findAddressByPerson } from './find-address'

export function addressRoutes(app: FastifyInstance) {
  app.post('/address', create)
  app.get('/address/person/:personId', findAddressByPerson)
}
