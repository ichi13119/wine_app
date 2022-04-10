import { Field, ObjectType, ID } from '@nestjs/graphql';

import { UserModel } from 'src/components/users/interfaces/users.model';

@ObjectType()
export class CommentsModel {
  @Field((type) => ID)
  id: string;

  @Field((type) => UserModel)
  user: UserModel;

  @Field((type) => String)
  comment: string;

  @Field((type) => Number)
  sendDate: number;
}
