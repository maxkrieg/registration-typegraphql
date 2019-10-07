import 'reflect-metadata'
import cors from 'cors'
import Express from 'express'
import session from 'express-session'
import connectRedis from 'connect-redis'
import { ApolloServer } from 'apollo-server-express'
import { buildSchema } from 'type-graphql'
import { createConnection } from 'typeorm'

import redis from './redis'
import { RegisterResolver } from './modules/user/Register'
import { LoginResolver } from './modules/user/Login'

const main = async () => {
  await createConnection()

  const schema = await buildSchema({
    resolvers: [RegisterResolver, LoginResolver],
  })
  const apolloServer = new ApolloServer({
    schema,
    context: ({ req }: any) => ({ req }),
  })

  const app = Express()

  app.use(
    cors({
      credentials: true,
      origin: 'https://localhost:3000',
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

  apolloServer.applyMiddleware({ app })

  const PORT = process.env.PORT
  app.listen(PORT, () => {
    console.log(`server start localhost:${PORT}/graphql`)
  })
}

main()
