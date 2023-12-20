import { FactoryService } from './../factory/factory.service';
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  constructor(private readonly factoryService: FactoryService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    try {
      await this.factoryService.logToPostgres(
        `Endpoint: ${req.url}, Method: ${req.method}`,
      );
      next();
    } catch (error) {
      console.error('Logl error:', error.message);
      next();
    }
  }
}
