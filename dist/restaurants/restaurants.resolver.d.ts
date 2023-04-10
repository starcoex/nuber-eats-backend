import { RestaurantEntity } from './entities/restaurant.entity';
import { CreateRestaurantDto } from './dtos/create-restaurant.dto';
import { RestaurantsService } from './restaurants.service';
import { UpdateRestaurantDto } from './dtos/update-restaurant.dto';
export declare class RestaurantResolver {
    private readonly restaurantService;
    constructor(restaurantService: RestaurantsService);
    restaurants(): Promise<RestaurantEntity[]>;
    createRestaurant(createRestaurantDto: CreateRestaurantDto): Promise<boolean>;
    updateRestaurant(updateRestaurantDto: UpdateRestaurantDto): Promise<boolean>;
}
