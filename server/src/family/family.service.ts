import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { FamilyServiceBase } from './base/family.service.base';
import { Prisma } from '@prisma/client';
@Injectable()
export class FamilyService extends FamilyServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
  async countRecipes(
    parentId: string,
    args: Prisma.RecipeFindManyArgs
  ): Promise<Number> {
    const recipes = this.prisma.family
      .findUnique({
        where: { id: parentId },
      })
      .recipes(args);
    const result = await recipes;
    if (result) {
      return result.length;
    } else {
      return 0;
    }
  }
}
