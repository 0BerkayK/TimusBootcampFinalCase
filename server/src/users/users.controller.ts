import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UsersService) {}

  @Post('register')
  async register(@Body() user: CreateUserDto): Promise<any> {
    return this.userService.register(user);
}
