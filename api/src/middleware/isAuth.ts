import { MiddlewareFn } from 'type-graphql'
import { MyContext } from '../types/MyContext'
import { nowISOTimestamp } from './../utils/date'

export const isAuth: MiddlewareFn<MyContext> = async ({ context }, next) => {
  if (!context.req.session!.userId) {
    console.log(`${nowISOTimestamp()} Error: user is unauthenticated`)
    throw new Error('not authenticated')
  }
  return next()
}
