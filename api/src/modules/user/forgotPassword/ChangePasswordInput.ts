import { InputType, Field } from 'type-graphql'
import { MinLength } from 'class-validator'

@InputType()
export class ChangePasswordInput {
  @Field()
  token: string

  @Field()
  @MinLength(5)
  password: string
}
