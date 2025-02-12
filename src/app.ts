// Possui todas as configurações principais para a execução da API

import fastify from 'fastify'
import { personRoutes } from '@/http/controllers/person/routes'

export const app = fastify()

app.register(personRoutes)
