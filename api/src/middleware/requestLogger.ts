import { MiddlewareFn } from 'type-graphql'
import { nowISOTimestamp } from './../utils/date'

export const requestLogger: MiddlewareFn = async ({ info }, next) => {
  const start = Date.now()
  const resolverMethod = `${info.parentType.name}.${info.fieldName}`
  console.log(' ')
  console.log(`${nowISOTimestamp(start)} [API]: NEW REQUEST to ${resolverMethod}`)

  await next()
  const end = Date.now()
  const resolveTime = end - start
  console.log(`${nowISOTimestamp(end)} [API]: Completed ${resolverMethod} [${resolveTime} ms]`)
}
