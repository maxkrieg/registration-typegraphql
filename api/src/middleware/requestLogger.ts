import { MiddlewareFn } from 'type-graphql'
import { nowISOTimestamp } from './../utils/date'
import { MyContext } from '../types/MyContext'

export const requestLogger: MiddlewareFn<MyContext> = async ({ context, info }, next) => {
  const start = Date.now()
  const resolverMethod = `${info.parentType.name}.${info.fieldName}`
  console.log(' ')
  console.log(nowISOTimestamp(start), `NEW REQUEST to ${resolverMethod}`)
  console.log(context.req.session!.userId)

  await next()
  const end = Date.now()
  const resolveTime = end - start
  console.log(nowISOTimestamp(end), `Completed ${resolverMethod} [${resolveTime} ms]`)
}
