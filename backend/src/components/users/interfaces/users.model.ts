import { Field, ObjectType, ID } from '@nestjs/graphql';

import { PostModel } from 'src/components/posts/interfaces/posts.model';

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

  @Field((type) => [PostModel], { nullable: 'itemsAndList' })
  posts: string;

  @Field((type) => [PostModel], { nullable: 'itemsAndList' })
  likes: string;
}
