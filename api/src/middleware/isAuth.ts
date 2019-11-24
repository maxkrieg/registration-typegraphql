import { MiddlewareFn } from 'type-graphql'
import { MyContext } from '../types/MyContext'
import { nowISOTimestamp } from './../utils/date'

export const isAuth: MiddlewareFn<MyContext> = async ({ context }, next) => {
  console.log(nowISOTimestamp(), 'Authenticating user')
  console.log(nowISOTimestamp(), 'Auth middleware', context.req.session)
  if (!context.req.session!.userId) {
    throw new Error('User is not authenticated')
  }
  return next()
}
