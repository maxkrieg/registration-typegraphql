import 'reflect-metadata'
import { ApolloServer } from 'apollo-server-express'
import Express from 'express'
import { buildSchema } from 'type-graphql'
import { createConnection } from 'typeorm'

import { RegisterResolver } from './modules/user/Register'

const main = async () => {
  await createConnection()

  const schema = await buildSchema({
    resolvers: [RegisterResolver],
  })
  const apolloServer = new ApolloServer({ schema })

  const app = Express()

  apolloServer.applyMiddleware({ app })

  const PORT = process.env.PORT
  app.listen(PORT, () => {
    console.log(`server start localhost:${PORT}/graphql`)
  })
}

main()
