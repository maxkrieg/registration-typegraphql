import { MiddlewareFn } from 'type-graphql'

const nowISOTimestamp = (dt: number) => {
  return new Date(dt).toISOString()
}

export const logger: MiddlewareFn = async ({ info }, next) => {
  const start = Date.now()
  const resolverMethod = `${info.parentType.name}.${info.fieldName}`
  console.log(' ')
  console.log(`${nowISOTimestamp(start)} [API]: NEW REQUEST to ${resolverMethod}`)

  await next()
  const end = Date.now()
  const resolveTime = end - start
  console.log(`${nowISOTimestamp(end)} [API]: Completed ${resolverMethod} [${resolveTime} ms]`)
}
