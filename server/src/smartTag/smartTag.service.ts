import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { SmartTagServiceBase } from './base/smartTag.service.base';
import { Prisma, SmartTag, Recipe } from '@prisma/client';

@Injectable()
export class SmartTagService extends SmartTagServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
  async createMany<T extends Prisma.SmartTagCreateManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.SmartTagCreateManyArgs>
  ): Promise<{ count: number }> {
    return this.prisma.smartTag.createMany<T>(args);
  }
}
