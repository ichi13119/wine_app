import { Field, ObjectType, ID } from '@nestjs/graphql';

@ObjectType()
export class TypeModel {
  @Field((type) => ID)
  id: string;

  @Field((type) => String)
  name: string;
}
