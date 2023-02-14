/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateSmartTagArgs } from "./CreateSmartTagArgs";
import { UpdateSmartTagArgs } from "./UpdateSmartTagArgs";
import { DeleteSmartTagArgs } from "./DeleteSmartTagArgs";
import { SmartTagFindManyArgs } from "./SmartTagFindManyArgs";
import { SmartTagFindUniqueArgs } from "./SmartTagFindUniqueArgs";
import { SmartTag } from "./SmartTag";
import { RecipeFindManyArgs } from "../../recipe/base/RecipeFindManyArgs";
import { Recipe } from "../../recipe/base/Recipe";
import { Family } from "../../family/base/Family";
import { SmartTagService } from "../smartTag.service";

@graphql.Resolver(() => SmartTag)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class SmartTagResolverBase {
  constructor(
    protected readonly service: SmartTagService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "SmartTag",
    action: "read",
    possession: "any",
  })
  async _smartTagsMeta(
    @graphql.Args() args: SmartTagFindManyArgs
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

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [SmartTag])
  @nestAccessControl.UseRoles({
    resource: "SmartTag",
    action: "read",
    possession: "any",
  })
  async smartTags(
    @graphql.Args() args: SmartTagFindManyArgs
  ): Promise<SmartTag[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => SmartTag, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "SmartTag",
    action: "read",
    possession: "own",
  })
  async smartTag(
    @graphql.Args() args: SmartTagFindUniqueArgs
  ): Promise<SmartTag | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => SmartTag)
  @nestAccessControl.UseRoles({
    resource: "SmartTag",
    action: "create",
    possession: "any",
  })
  async createSmartTag(
    @graphql.Args() args: CreateSmartTagArgs
  ): Promise<SmartTag> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        family: args.data.family
          ? {
              connect: args.data.family,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => SmartTag)
  @nestAccessControl.UseRoles({
    resource: "SmartTag",
    action: "update",
    possession: "any",
  })
  async updateSmartTag(
    @graphql.Args() args: UpdateSmartTagArgs
  ): Promise<SmartTag | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          family: args.data.family
            ? {
                connect: args.data.family,
              }
            : undefined,
        },
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

  @graphql.Mutation(() => SmartTag)
  @nestAccessControl.UseRoles({
    resource: "SmartTag",
    action: "delete",
    possession: "any",
  })
  async deleteSmartTag(
    @graphql.Args() args: DeleteSmartTagArgs
  ): Promise<SmartTag | null> {
    try {
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

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Recipe])
  @nestAccessControl.UseRoles({
    resource: "Recipe",
    action: "read",
    possession: "any",
  })
  async recipe(
    @graphql.Parent() parent: SmartTag,
    @graphql.Args() args: RecipeFindManyArgs
  ): Promise<Recipe[]> {
    const results = await this.service.findRecipe(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Family, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Family",
    action: "read",
    possession: "any",
  })
  async family(@graphql.Parent() parent: SmartTag): Promise<Family | null> {
    const result = await this.service.getFamily(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
