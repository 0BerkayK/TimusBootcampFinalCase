import { ElasticsearchService } from '@nestjs/elasticsearch';
export declare class SearchService {
    private readonly esService;
    constructor(esService: ElasticsearchService);
    search(user: string): Promise<import("@elastic/elasticsearch/lib/api/types").SearchResponse<unknown, Record<string, import("@elastic/elasticsearch/lib/api/types").AggregationsAggregate>>>;
}
