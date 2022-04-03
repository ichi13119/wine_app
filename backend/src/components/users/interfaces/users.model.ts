import { Field, ObjectType, ID } from '@nestjs/graphql';

@ObjectType()
export class UserModel {
  @Field((type) => ID)
  id: string;

  @Field((type) => String)
  name: string;

  @Field((type) => String)
  email: string;

  @Field((type) => String)
  password: string;

  @Field((type) => [ID], { nullable: 'itemsAndList' })
  posts: string;

  @Field((type) => [ID], { nullable: 'itemsAndList' })
  likes: string;
}
