import { isAuth } from './../../middleware/isAuth'
import { Resolver, Query, Ctx, UseMiddleware } from 'type-graphql'
import { User } from '../../entities/User'
import { MyContext } from '../../types/MyContext'

@Resolver()
export class UserResolver {
  @Query(() => User, { nullable: true })
  @UseMiddleware(isAuth)
  async user(@Ctx() ctx: MyContext): Promise<User | null> {
    let user
    if (ctx.req.session!.userId) {
      user = await User.findOne(ctx.req.session!.userId)
    }
    return user || null
  }
}
