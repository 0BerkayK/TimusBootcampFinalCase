import { JwtService } from '@nestjs/jwt';
export declare class JwtService {
    private readonly jwtService;
    constructor(jwtService: JwtService);
    generateToken(payload: any): string;
}
