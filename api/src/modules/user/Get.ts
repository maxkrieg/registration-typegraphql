import { Resolver, Query, Ctx } from 'type-graphql'
import { User } from '../../entities/User'
import { MyContext } from '../../types/MyContext'

@Resolver()
export class GetUserResolver {
  @Query(() => User, { nullable: true })
  async getUser(@Ctx() ctx: MyContext) {
    if (!ctx.req.session!.userId) {
      return null
    }
    return 'Hello world'
  }
}
