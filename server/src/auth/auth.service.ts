// auth.service.ts
import { Injectable } from '@nestjs/common';
import { ElasticsearchService } from '@nestjs/elasticsearch';
import { JwtService } from '../jwt/jwt.service';
import { RefreshTokenService } from '../jwt/refresh-token.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly elasticsearchService: ElasticsearchService,
    private readonly jwtService: JwtService,
    private readonly refreshTokenService: RefreshTokenService,
  ) {}

  async login(username: string, password: string): Promise<any> {
    const user = {
      id: 1,
      username: 'user123',
      password: 'user456',
    };

    const jwtToken = this.jwtService.generateToken({
      sub: user.id,
      username: user.username,
    });
    const refreshToken = this.refreshTokenService.generateToken();

    return { jwtToken, refreshToken };
  }
}
