import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { RestaurantEntity } from './entities/restaurant.entity';
import { CreateRestaurantDto } from './dtos/create-restaurant.dto';
import { RestaurantsService } from './restaurants.service';
import {
  UpdateRestaurantDto,
  UpdateRestaurantInputType,
} from './dtos/update-restaurant.dto';

@Resolver((of) => RestaurantEntity)
export class RestaurantResolver {
  constructor(private readonly restaurantService: RestaurantsService) {}
  @Query((returns) => [RestaurantEntity])
  restaurants(): Promise<RestaurantEntity[]> {
    return this.restaurantService.getAll();
  }
  @Mutation((returns) => Boolean)
  async createRestaurant(
    @Args('Inputs') createRestaurantDto: CreateRestaurantDto,
  ): Promise<boolean> {
    try {
      await this.restaurantService.createRestaurant(createRestaurantDto);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
  @Mutation((returns) => Boolean)
  async updateRestaurant(
    @Args('input') updateRestaurantDto: UpdateRestaurantDto,
  ): Promise<boolean> {
    try {
      await this.restaurantService.updateRestaurant(updateRestaurantDto);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}
