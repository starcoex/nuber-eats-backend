import { RestaurantEntity } from './entities/restaurant.entity';
import { CreateRestaurantDto } from './dtos/create-restaurant.dto';
export declare class RestaurantResolver {
    myRestaurant(veganOnly: boolean): RestaurantEntity[];
    createRestaurant(createRestaurantDto: CreateRestaurantDto): boolean;
}
