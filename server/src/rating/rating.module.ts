import { Module } from '@nestjs/common';
import { RatingModuleBase } from './base/rating.module.base';
import { RatingService } from './rating.service';
import { RatingController } from './rating.controller';
import { RatingResolver } from './rating.resolver';
import { PrismaService } from 'nestjs-prisma';
@Module({
  imports: [RatingModuleBase],
  controllers: [RatingController],
  providers: [RatingService, PrismaService, RatingResolver],
  exports: [RatingService],
})
export class RatingModule {}
