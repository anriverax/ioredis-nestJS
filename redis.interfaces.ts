import * as Redis from 'ioredis';

export type IRedis = Redis.Redis;

export interface RedisModuleOptions {
  config: Redis.RedisOptions & { url?: string };
}
