import { PrismaService } from "nestjs-prisma";
import { Prisma, Family, User } from "@prisma/client";

export class FamilyServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.FamilyFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.FamilyFindManyArgs>
  ): Promise<number> {
    return this.prisma.family.count(args);
  }

  async findMany<T extends Prisma.FamilyFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.FamilyFindManyArgs>
  ): Promise<Family[]> {
    return this.prisma.family.findMany(args);
  }
  async findOne<T extends Prisma.FamilyFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.FamilyFindUniqueArgs>
  ): Promise<Family | null> {
    return this.prisma.family.findUnique(args);
  }
  async create<T extends Prisma.FamilyCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.FamilyCreateArgs>
  ): Promise<Family> {
    return this.prisma.family.create<T>(args);
  }
  async update<T extends Prisma.FamilyUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.FamilyUpdateArgs>
  ): Promise<Family> {
    return this.prisma.family.update<T>(args);
  }
  async delete<T extends Prisma.FamilyDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.FamilyDeleteArgs>
  ): Promise<Family> {
    return this.prisma.family.delete(args);
  }

  async findMember(
    parentId: string,
    args: Prisma.UserFindManyArgs
  ): Promise<User[]> {
    return this.prisma.family
      .findUnique({
        where: { id: parentId },
      })
      .member(args);
  }
}
