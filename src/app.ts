// Possui todas as configurações principais para a execução da API

import 'reflect-metadata'
import '@/lib/typeorm/typeorm'

import fastify from 'fastify'

import { addressRoutes } from '@/http/controllers/address/routes'
import { categoryRoutes } from '@/http/controllers/category/routes'
import { personRoutes } from '@/http/controllers/person/routes'
import { productRoutes } from '@/http/controllers/product/routes'
import { userRoutes } from '@/http/controllers/user/routes'
import { globalErrorHandler } from '@/utils/global-error-handler'
import fastifyJwt from '@fastify/jwt'
import { env } from '@/env'
import { validateJwt } from '@/http/middleware/jwt-validate'

export const app = fastify()

app.register(fastifyJwt, {
  secret: env.JWT_SECRET,
  sign: {
    expiresIn: '10m',
  },
})

app.addHook('onRequest', validateJwt)

app.register(personRoutes)
app.register(userRoutes)
app.register(addressRoutes)
app.register(productRoutes)
app.register(categoryRoutes)

app.setErrorHandler(globalErrorHandler)
