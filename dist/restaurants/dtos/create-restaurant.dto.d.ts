import { RestaurantEntity } from '../entities/restaurant.entity';
declare const CreateRestaurantDto_base: import("@nestjs/common").Type<Omit<RestaurantEntity, "id">>;
export declare class CreateRestaurantDto extends CreateRestaurantDto_base {
}
export {};
