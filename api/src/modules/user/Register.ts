import { Resolver, Query, Mutation, Arg, Ctx } from 'type-graphql'
import bcrypt from 'bcryptjs'
import { User } from '../../entities/User'
import { RegisterInput } from './register/RegisterInput'
import { sendConfirmationEmail } from '../utils/email'
import { MyContext } from '../../types/MyContext'

@Resolver()
export class RegisterResolver {
  @Query(() => String)
  async hello() {
    return 'Hello world'
  }

  @Mutation(() => User)
  async register(
    @Arg('data') { email, firstName, lastName, password }: RegisterInput,
    @Ctx() ctx: MyContext,
  ): Promise<User> {
    const hashedPassword = await bcrypt.hash(password, 12)
    const user = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    }).save()
    await sendConfirmationEmail(user.id, user.email)
    ctx.req.session!.userId = user.id
    return user
  }
}
