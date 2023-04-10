import { UserService } from './users.service';
import { CreateAccountInput, CreateAccountOutput } from './dtos/create-account.dto';
import { LoginOutput, LoginInput } from './dtos/login.dto';
export declare class UserResolver {
    private readonly usersService;
    constructor(usersService: UserService);
    hi(): boolean;
    createAccount(createAccountInput: CreateAccountInput): Promise<CreateAccountOutput>;
    login(loginInput: LoginInput): Promise<LoginOutput>;
}
