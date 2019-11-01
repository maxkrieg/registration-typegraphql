import { Resolver, Query, Ctx } from 'type-graphql'
import { User } from '../../entities/User'
import { MyContext } from '../../types/MyContext'

@Resolver()
export class UserResolver {
  @Query(() => User, { nullable: true })
  async user(@Ctx() ctx: MyContext): Promise<User | null | undefined> {
    if (ctx.req.session!.userId) {
      return User.findOne(ctx.req.session!.userId)
    }
    return null
  }
}
