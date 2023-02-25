import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { FamilyServiceBase } from './base/family.service.base';
import { Prisma } from '@prisma/client';
import { SmartTag } from '../smartTag/base/SmartTag';
import { Recipe } from '../recipe/base/Recipe';
@Injectable()
export class FamilyService extends FamilyServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
  async countRecipes(
    parentId: string,
    args: Prisma.RecipeFindManyArgs
  ): Promise<{ count: number; smartTags: Array<SmartTag> }> {
    const recipes = this.prisma.family
      .findUnique({
        where: { id: parentId },
      })
      .recipes(args);
    try {
      const result = await recipes;
      /*if (result) {
      return result.length;
    } else {
      return 0;
    }*/
      if (result) {
        let smartTagArray: SmartTag[] = [];
        (result as Recipe[])
          .filter((recipe) => typeof recipe.smartTags !== 'undefined')
          .map((recipe) => {
            return recipe.smartTags;
          })
          .forEach((smartTags) => {
            if (Array.isArray(smartTags)) {
              smartTagArray.push(...smartTags);
            }
          });
        const current_smartTags = smartTagArray.filter(
          (value, index, self) =>
            index ===
            self.findIndex((t) => t.id === value.id && t.name === value.name)
        );
        return {
          count: result.length,
          smartTags: current_smartTags,
        };
      } else {
        return { count: 0, smartTags: [] };
      }
    } catch (err) {
      return { count: 0, smartTags: [] };
    }
  }
}
