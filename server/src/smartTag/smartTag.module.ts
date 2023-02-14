import { Module } from '@nestjs/common';
import { SmartTagModuleBase } from './base/smartTag.module.base';
import { SmartTagService } from './smartTag.service';
import { SmartTagController } from './smartTag.controller';
import { SmartTagResolver } from './smartTag.resolver';
import { PrismaService } from 'nestjs-prisma';

@Module({
  imports: [SmartTagModuleBase],
  controllers: [SmartTagController],
  providers: [SmartTagService, PrismaService, SmartTagResolver],
  exports: [SmartTagService],
})
export class SmartTagModule {}
