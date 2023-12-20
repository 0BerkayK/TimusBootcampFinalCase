import { Injectable } from '@nestjs/common';
import { ElasticsearchService } from '@nestjs/elasticsearch';

@Injectable()
export class SearchService {
  constructor(private readonly esService: ElasticsearchService) {}

  async search(user: string) {
    const result = await this.esService.search({
      index: 'user',
      body: {
        query: {
          match: {
            user:

          },
        },
      },
    });

    return result;
  }
}
