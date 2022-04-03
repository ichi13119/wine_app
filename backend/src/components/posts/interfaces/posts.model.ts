import { Field, ObjectType, ID, Int, Float } from '@nestjs/graphql';

import { TypeModel } from './type.model';

@ObjectType()
export class PostModel {
  @Field((type) => ID)
  id: string;

  @Field((type) => String)
  title: string;

  @Field((type) => TypeModel)
  type: TypeModel;

  @Field((type) => String, { nullable: true })
  breed: string;

  @Field((type) => String, { nullable: true })
  country: string;

  @Field((type) => String, { nullable: true })
  area: string;

  @Field((type) => Int, { nullable: true })
  year: number;

  @Field((type) => TypeModel, { nullable: true })
  sweetness: TypeModel;

  @Field((type) => String, { nullable: true })
  acidity: string;

  @Field((type) => String, { nullable: true })
  astringency: string;

  @Field((type) => Int, { nullable: true })
  alcohol: number;

  @Field((type) => TypeModel, { nullable: true })
  body: TypeModel;

  @Field((type) => TypeModel, { nullable: true })
  taste: TypeModel;

  @Field((type) => String, { nullable: true })
  color: string;

  @Field((type) => String, { nullable: true })
  fragrance: string;

  @Field((type) => String, { nullable: true })
  flavor: string;

  @Field((type) => String, { nullable: true })
  impression: string;

  @Field((type) => Int, { nullable: true })
  date: number;

  @Field((type) => String, { nullable: true })
  conbination: string;

  @Field((type) => [String], { nullable: 'itemsAndList' })
  comments: [string];
}
