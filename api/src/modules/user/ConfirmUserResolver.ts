import { Mutation, Arg } from 'type-graphql'
import redis from '../../redis'
import { User } from '../../entities/User'

export class ConfirmUserResolver {
  @Mutation(() => User)
  async confirmUser(@Arg('token') token: string): Promise<User> {
    console.log('INSIDE confirmUser')
    const userId = await redis.get(token)
    if (!userId) {
      throw new Error(`Could not find confirmation token: "${token}" in cache`)
    }

    const user = await User.findOne(userId)
    if (!user) {
      throw new Error(`Could not find user with id: "${userId}"`)
    }
    user.confirmed = true
    // const user = await User.update({ id: parseInt(userId, 10) }, { confirmed: true })
    await redis.del(token)
    return user.save()
  }
}
