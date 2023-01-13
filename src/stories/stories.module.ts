import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StoriesService } from './services/stories.service';
import { StoriesController } from './controllers/stories.controller';
import { Story } from './entities/stories.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Story])],
  providers: [StoriesService],
  controllers: [StoriesController],
  exports: [TypeOrmModule],
})
export class StoriesModule {}
