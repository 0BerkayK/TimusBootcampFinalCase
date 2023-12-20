import { CreateUserDto } from './dto/create-user.dto';
import { ElasticsearchService } from '@nestjs/elasticsearch';
import { UserModel } from './users.model';
export declare class UsersService {
    private readonly elasticsearchService;
    constructor(elasticsearchService: ElasticsearchService);
    register(user: UserModel): Promise<CreateUserDto>;
}
