import { Resolver, Mutation, Arg, Ctx } from 'type-graphql'
import bcrypt from 'bcryptjs'
import { User } from '../../entities/User'
import { MyContext } from '../../types/MyContext'

@Resolver()
export class LoginResolver {
  @Mutation(() => User)
  async login(
    @Arg('email') email: string,
    @Arg('password') password: string,
    @Ctx() ctx: MyContext,
  ): Promise<User> {
    const user = await User.findOne({
      where: { email },
    })
    if (!user) {
      throw new Error('No user account is associated with that email address')
    }

    const valid = await bcrypt.compare(password, user.password)
    if (!valid) {
      throw new Error('Password is invalid')
    }

    ctx.req.session!.userId = user.id

    return user
  }
}
