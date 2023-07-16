import { DynamicModule, Module, Global, Provider } from '@nestjs/common';
import Redis from 'ioredis';
import { RedisModuleOptions } from './redis.types';

@Global()
@Module({})
export class RedisCoreModule {
  static forRoot(options: RedisModuleOptions): DynamicModule {
    const redisConnectionProvider: Provider = {
      provide: 'REDIS_CONNECTION',
      useValue: this.redisConnection(options),
    };

    return {
      module: RedisCoreModule,
      providers: [redisConnectionProvider],
      exports: [redisConnectionProvider],
    };
  }

  private static redisConnection(options: RedisModuleOptions) {
    const { config } = options;

    if (config.url) return new Redis(config.url, config);

    return new Redis(config);
  }
}
