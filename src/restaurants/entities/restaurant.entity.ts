import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class RestaurantEntity {
  @Field((type) => String)
  name: string;
  @Field((type) => Boolean)
  isVegan: boolean;
  @Field((type) => String)
  address: string;
  @Field((type) => String)
  ownersName: string;
}
