// auth.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() credentials): Promise<any> {
    const { username, password } = credentials;
    const tokens = await this.authService.login(username, password);
    return tokens;
  }
}
