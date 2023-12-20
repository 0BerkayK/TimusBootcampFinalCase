import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UsersService);
    register(user: CreateUserDto): Promise<any>;
}
