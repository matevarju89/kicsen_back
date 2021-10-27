import { PrismaService } from "nestjs-prisma";
import { Prisma, Recipe, Image, User, Rating } from "@prisma/client";

export class RecipeServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.RecipeFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.RecipeFindManyArgs>
  ): Promise<number> {
    return this.prisma.recipe.count(args);
  }

  async findMany<T extends Prisma.RecipeFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.RecipeFindManyArgs>
  ): Promise<Recipe[]> {
    return this.prisma.recipe.findMany(args);
  }
  async findOne<T extends Prisma.RecipeFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.RecipeFindUniqueArgs>
  ): Promise<Recipe | null> {
    return this.prisma.recipe.findUnique(args);
  }
  async create<T extends Prisma.RecipeCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.RecipeCreateArgs>
  ): Promise<Recipe> {
    return this.prisma.recipe.create<T>(args);
  }
  async update<T extends Prisma.RecipeUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.RecipeUpdateArgs>
  ): Promise<Recipe> {
    return this.prisma.recipe.update<T>(args);
  }
  async delete<T extends Prisma.RecipeDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.RecipeDeleteArgs>
  ): Promise<Recipe> {
    return this.prisma.recipe.delete(args);
  }

  async findImages(
    parentId: string,
    args: Prisma.ImageFindManyArgs
  ): Promise<Image[]> {
    return this.prisma.recipe
      .findUnique({
        where: { id: parentId },
      })
      .images(args);
  }

  async findLikedBy(
    parentId: string,
    args: Prisma.UserFindManyArgs
  ): Promise<User[]> {
    return this.prisma.recipe
      .findUnique({
        where: { id: parentId },
      })
      .likedBy(args);
  }

  async findRatings(
    parentId: string,
    args: Prisma.RatingFindManyArgs
  ): Promise<Rating[]> {
    return this.prisma.recipe
      .findUnique({
        where: { id: parentId },
      })
      .ratings(args);
  }

  async getPostedBy(parentId: string): Promise<User | null> {
    return this.prisma.recipe
      .findUnique({
        where: { id: parentId },
      })
      .postedBy();
  }
}
