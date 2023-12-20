import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SearchModule } from './elastic/search.module';
import { UsersModule } from './users/users.module';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { UsersService } from './users/users.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UsersModule, SearchModule, JwtModule, AuthModule],
  controllers: [AppController],
  providers: [AppService, JwtService, UsersService],
})
export class AppModule {}
