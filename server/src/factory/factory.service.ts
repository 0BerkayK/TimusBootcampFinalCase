import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FactoryList, FactoryDetail, FactoryLog } from './factory.entity';

@Injectable()
export class FactoryService {
  constructor(
    @InjectRepository(FactoryList)
    private factoryListRepository: Repository<FactoryList>,
    @InjectRepository(FactoryDetail)
    private factoryDetailRepository: Repository<FactoryDetail>,
    @InjectRepository(FactoryLog)
    private factoryLogRepository: Repository<FactoryLog>,
  ) {}

  async getFabrikaListesi(): Promise<FactoryList[]> {
    return this.factoryListRepository.find();
  }

  async getFabrikaDetay(): Promise<FactoryDetail[]> {
    return this.factoryDetailRepository.find();
  }

  async logToPostgres(action: string): Promise<void> {
    try {
      const log = this.factoryLogRepository.create({ action });
      await this.factoryLogRepository.save(log);
    } catch (error) {
      console.error('PostgreSQL error:', error.message);
    }
  }
}
