import { Controller, Get, UseGuards } from '@nestjs/common';
import { FactoryService } from './factory.service;
import { AuthGuard } from '../auth-factory/';

@Controller('factory')
@UseGuards(AuthGuard)
export class FactoryController {
  constructor(private readonly fabrikaService: FactoryService) {}

  @Get('/list')
  getFabrikaListesi(): Promise<any[]> {
    return this.fabrikaService.getFabrikaListesi();
  }

  @Get('/details')
  getFabrikaDetay(): Promise<any[]> {
    return this.fabrikaService.getFabrikaDetay();
  }
}
