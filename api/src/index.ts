import 'reflect-metadata'
import cors from 'cors'
import Express from 'express'
import session from 'express-session'
import connectRedis from 'connect-redis'
import { ApolloServer } from 'apollo-server-express'
import { buildSchema } from 'type-graphql'
import { createConnection } from 'typeorm'
import { MyContext } from './types/MyContext'

import redis from './redis'
import { requestLogger } from './middleware/requestLogger'
import { ErrorInterceptor } from './middleware/errors'

const SESSION_COOKIE_NAME = 'qid'
const SESSION_SECRET = process.env.SESSION_SECRET || ''
const PATH = '/graphql'
const isProduction = process.env.NODE_ENV === 'production'
const HOST = process.env.HOST
const PORT = process.env.PORT
const SERVER_ADDRESS = `${HOST}:${PORT}`

const main = async () => {
  await createConnection()

  const schema = await buildSchema({
    resolvers: [__dirname + '/modules/**/*.ts'],
    globalMiddlewares: [ErrorInterceptor, requestLogger],
  })

  const server = new ApolloServer({
    schema,
    context: ({ req, res }: MyContext) => ({ req, res }),
  })

  const app = Express()

  app.use(
    cors({
      credentials: true,
      origin: SERVER_ADDRESS,
    }),
  )

  const RedisStore = connectRedis(session)
  app.use(
    session({
      store: new RedisStore({ client: redis as any }),
      name: SESSION_COOKIE_NAME,
      secret: SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        secure: isProduction,
        maxAge: 1000 * 60 * 60 * 24 * 7 * 365, // 7 years
      },
    }),
  )

  server.applyMiddleware({
    app,
    path: PATH,
    cors: {
      origin: true,
      allowedHeaders: ['Authorization', 'Content-Type', SERVER_ADDRESS],
    },
  })

  app.listen(PORT, () => {
    console.log(`🚀 Server start at ${SERVER_ADDRESS}${server.graphqlPath} 🚀`)
  })
}

main()
