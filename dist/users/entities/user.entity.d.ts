import { CoreEntity } from './../../common/entities/core.entity';
declare enum UserRole {
    Client = 0,
    Owner = 1,
    Delivery = 2
}
export declare class User extends CoreEntity {
    email: string;
    password: string;
    role: UserRole;
    hashPassword(): Promise<any>;
    checkPassword(aPassword: string): Promise<boolean>;
}
export {};
