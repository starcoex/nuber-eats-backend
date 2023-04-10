import { User } from '../entities/user.entity';
import { MutationOutput } from 'src/common/dtos/output.dto';
declare const LoginInput_base: import("@nestjs/common").Type<Pick<User, "email" | "password">>;
export declare class LoginInput extends LoginInput_base {
}
export declare class LoginOutput extends MutationOutput {
    token?: string;
}
export {};
