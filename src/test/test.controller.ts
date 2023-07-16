import { Controller, Post } from '@nestjs/common';
import { IRedis, InjectRedis } from '../redis/redis.decorators';

@Controller('test')
export class TestController {
  constructor(
    @InjectRedis() private readonly redis: IRedis,
  ) {}

  @Post('redis')
  async redis() {
    await this.redis.set('key', 'Redis data!');
    const redisData = await this.redis.get('key');
    return redisData;
  }
}
