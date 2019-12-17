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

const PORT = process.env.PORT
const PATH = '/graphql'

const main = async () => {
  await createConnection()

  const schema = await buildSchema({
    resolvers: [__dirname + '/modules/**/*.ts'],
    globalMiddlewares: [ErrorInterceptor, requestLogger],
  })

  const server = new ApolloServer({
    schema,
    context: ({ req }: MyContext) => ({ req }),
  })

  const app = Express()

  app.use(
    cors({
      credentials: true,
      origin: 'http://localhost:3000',
    }),
  )

  const RedisStore = connectRedis(session)
  app.use(
    session({
      store: new RedisStore({ client: redis as any }),
      name: 'qid',
      secret: process.env.SESSION_SECRET || '',
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 1000 * 60 * 60 * 24 * 7 * 365, // 7 years
      },
    }),
  )

  server.applyMiddleware({
    app,
    path: PATH,
    cors: {
      origin: true,
      allowedHeaders: ['Authorization', 'Content-Type', 'http://localhost:3000'],
    },
  })

  app.listen(PORT, () => {
    console.log(`🚀 Server start at http://localhost:${PORT}${server.graphqlPath} 🚀`)
  })
}

main()
