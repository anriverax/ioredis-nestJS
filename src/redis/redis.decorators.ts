import { Inject } from '@nestjs/common';
import * as Redis from 'ioredis';

export type IRedis = Redis.Redis;

export interface RedisModuleOptions {
  config: Redis.RedisOptions & { url?: string };
}

export const InjectRedis = () => {
  return Inject('REDIS_CONNECTION');
};
