import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { RestaurantEntity } from './entities/restaurant.entity';
import { CreateRestaurantDto } from './dtos/create-restaurant.dto';

@Resolver((of) => RestaurantEntity)
export class RestaurantResolver {
  @Query((returns) => [RestaurantEntity])
  myRestaurant(@Args('veganOnly') veganOnly: boolean): RestaurantEntity[] {
    console.log(veganOnly);
    return [];
  }
  @Mutation((returns) => Boolean)
  createRestaurant(@Args() createRestaurantDto: CreateRestaurantDto): boolean {
    console.log(createRestaurantDto);
    return true;
  }
}
