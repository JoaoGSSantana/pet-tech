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

export const app = fastify()

app.register(personRoutes)
app.register(userRoutes)
app.register(addressRoutes)
app.register(productRoutes)
app.register(categoryRoutes)

app.setErrorHandler(globalErrorHandler)
