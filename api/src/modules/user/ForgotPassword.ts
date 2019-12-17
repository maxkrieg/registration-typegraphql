import bcrypt from 'bcryptjs'
import { MyContext } from './../../types/MyContext'
import { ChangePasswordInput } from './forgotPassword/ChangePasswordInput'
import { sendResetPasswordEmail } from './../utils/email'
import { Mutation, Arg, Ctx } from 'type-graphql'
import { User } from '../../entities/User'
import redis from '../../redis'

export class ForgotPasswordResolver {
  @Mutation(() => Boolean)
  async sendResetPasswordEmail(@Arg('email') email: string): Promise<Boolean> {
    const user = await User.findOne({ where: { email } })
    if (!user) {
      throw new Error(`User account with email: "${email}" not found`)
    }
    await sendResetPasswordEmail(user.id, user.email)
    return true
  }

  @Mutation(() => User)
  async changePassword(
    @Arg('data') { token, password }: ChangePasswordInput,
    @Ctx() ctx: MyContext,
  ): Promise<User> {
    const userId = await redis.get(token)
    if (!userId) {
      throw new Error(`Could not find reset password token: "${token}" in cache`)
    }

    const user = await User.findOne(userId)
    if (!user) {
      throw new Error('Could not find user')
    }

    user.password = await bcrypt.hash(password, 12)
    await user.save()

    await redis.del(token)
    ctx.req.session!.userId = user.id

    return user
  }
}
