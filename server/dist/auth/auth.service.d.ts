import { ElasticsearchService } from '@nestjs/elasticsearch';
import { JwtService } from '../jwt/jwt.service';
import { RefreshTokenService } from '../jwt/refresh-token.service';
export declare class AuthService {
    private readonly elasticsearchService;
    private readonly jwtService;
    private readonly refreshTokenService;
    constructor(elasticsearchService: ElasticsearchService, jwtService: JwtService, refreshTokenService: RefreshTokenService);
    login(username: string, password: string): Promise<any>;
}
