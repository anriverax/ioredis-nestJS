import { Module } from '@nestjs/common';
import { RedisModule } from './redis/redis.module';

@Module({
  imports: [
    RedisModule.forRoot({
      config: {
        url: 'redis://localhost:6379',
      },
    }),
    RedisModule,
  ],
  controllers: [],
  providers: [],
})
  
export class AppModule {}
