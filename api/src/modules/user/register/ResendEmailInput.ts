import { IsEmail } from 'class-validator'
import { InputType, Field, ID } from 'type-graphql'

@InputType()
export class ResendEmailInput {
  @Field(() => ID)
  id: number

  @Field()
  @IsEmail()
  email: string
}
