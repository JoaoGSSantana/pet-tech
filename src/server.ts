// Responsável por expor as configurações do servidor Web
import { env } from '@/env'
import { app } from '@/app'

app
  .listen({
    host: '0.0.0.0',
    port: env.PORT,
  })
  .then(() => {
    console.log(`Server is running on port  ${env.PORT}`)
  })
