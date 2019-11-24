import { MiddlewareFn } from 'type-graphql'
import { nowISOTimestamp } from './../utils/date'

export const ErrorInterceptor: MiddlewareFn<any> = async (_, next) => {
  try {
    return await next()
  } catch (err) {
    console.error(nowISOTimestamp(), err)
    throw err
  }
}
