import { RestaurantEntity } from './entities/restaurant.entity';
import { Repository } from 'typeorm';
import { CreateRestaurantDto } from './dtos/create-restaurant.dto';
import { UpdateRestaurantDto } from './dtos/update-restaurant.dto';
export declare class RestaurantsService {
    private readonly restaurants;
    constructor(restaurants: Repository<RestaurantEntity>);
    getAll(): Promise<RestaurantEntity[]>;
    createRestaurant(createRestaurantDto: CreateRestaurantDto): Promise<RestaurantEntity>;
    updateRestaurant({ id, data }: UpdateRestaurantDto): Promise<import("typeorm").UpdateResult>;
}
