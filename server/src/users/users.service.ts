import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { ElasticsearchService } from '@nestjs/elasticsearch';
import { UserModel } from './users.model';

@Injectable()
export class UsersService {
  constructor(private readonly elasticsearchService: ElasticsearchService) {}

  async register(user: UserModel): Promise<CreateUserDto> {
    const result = await this.elasticsearchService.index({
      index: 'users',
      body: user,
    });

    return this.result;
  }
}
