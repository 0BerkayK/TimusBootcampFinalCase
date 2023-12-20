import { Injectable } from '@nestjs/common';
import * as crypto from 'crypto';

@Injectable()
export class RefreshTokenService {
  generateToken(): string {
    return crypto.randomBytes(40).toString('hex');
  }
}
