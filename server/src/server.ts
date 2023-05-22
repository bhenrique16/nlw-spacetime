import fastify from 'fastify'
import cors from '@fastify/cors'
import { memoriesRoutes } from './routes/memories'

const app = fastify()
app.register(cors, {
  origin: true, // todas URLS de front end poderão acessar nosso backEnd
})
app.register(memoriesRoutes)

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('http server running on http://localhost:3333  ')
  })
