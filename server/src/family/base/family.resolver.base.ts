import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import * as gqlUserRoles from "../../auth/gqlUserRoles.decorator";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { CreateFamilyArgs } from "./CreateFamilyArgs";
import { UpdateFamilyArgs } from "./UpdateFamilyArgs";
import { DeleteFamilyArgs } from "./DeleteFamilyArgs";
import { FamilyFindManyArgs } from "./FamilyFindManyArgs";
import { FamilyFindUniqueArgs } from "./FamilyFindUniqueArgs";
import { Family } from "./Family";
import { UserFindManyArgs } from "../../user/base/UserFindManyArgs";
import { User } from "../../user/base/User";
import { FamilyService } from "../family.service";

@graphql.Resolver(() => Family)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class FamilyResolverBase {
  constructor(
    protected readonly service: FamilyService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Family",
    action: "read",
    possession: "any",
  })
  async _familiesMeta(
    @graphql.Args() args: FamilyFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @graphql.Query(() => [Family])
  @nestAccessControl.UseRoles({
    resource: "Family",
    action: "read",
    possession: "any",
  })
  async families(
    @graphql.Args() args: FamilyFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Family[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Family",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => Family, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Family",
    action: "read",
    possession: "own",
  })
  async family(
    @graphql.Args() args: FamilyFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Family | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Family",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => Family)
  @nestAccessControl.UseRoles({
    resource: "Family",
    action: "create",
    possession: "any",
  })
  async createFamily(
    @graphql.Args() args: CreateFamilyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Family> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "Family",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"Family"} creation is forbidden for roles: ${roles}`
      );
    }
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Family)
  @nestAccessControl.UseRoles({
    resource: "Family",
    action: "update",
    possession: "any",
  })
  async updateFamily(
    @graphql.Args() args: UpdateFamilyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Family | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Family",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"Family"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      // @ts-ignore
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Family)
  @nestAccessControl.UseRoles({
    resource: "Family",
    action: "delete",
    possession: "any",
  })
  async deleteFamily(
    @graphql.Args() args: DeleteFamilyArgs
  ): Promise<Family | null> {
    try {
      // @ts-ignore
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [User])
  @nestAccessControl.UseRoles({
    resource: "Family",
    action: "read",
    possession: "any",
  })
  async member(
    @graphql.Parent() parent: Family,
    @graphql.Args() args: UserFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<User[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "User",
    });
    const results = await this.service.findMember(parent.id, args);

    if (!results) {
      return [];
    }

    return results.map((result) => permission.filter(result));
  }
}
