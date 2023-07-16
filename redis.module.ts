import { DynamicModule, Module } from '@nestjs/common';
import { RedisCoreModule } from './redis.core';
import { RedisModuleOptions } from './redis.decorators';

@Module({})
export class RedisModule {
  public static forRoot(options: RedisModuleOptions): DynamicModule {
    return {
      module: RedisModule,
      imports: [RedisCoreModule.forRoot(options)],
        
      //imports: [RedisCoreModule.forRoot(options)] ==> OPTIONAL
    };
  }
}
