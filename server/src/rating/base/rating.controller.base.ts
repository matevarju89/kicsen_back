import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestMorgan from "nest-morgan";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { RatingService } from "../rating.service";
import { RatingCreateInput } from "./RatingCreateInput";
import { RatingWhereInput } from "./RatingWhereInput";
import { RatingWhereUniqueInput } from "./RatingWhereUniqueInput";
import { RatingFindManyArgs } from "./RatingFindManyArgs";
import { RatingUpdateInput } from "./RatingUpdateInput";
import { Rating } from "./Rating";
@swagger.ApiBasicAuth()
export class RatingControllerBase {
  constructor(
    protected readonly service: RatingService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Post()
  @nestAccessControl.UseRoles({
    resource: "Rating",
    action: "create",
    possession: "any",
  })
  @swagger.ApiCreatedResponse({ type: Rating })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(
    @common.Body() data: RatingCreateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Rating> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "Rating",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new errors.ForbiddenException(
        `providing the properties: ${properties} on ${"Rating"} creation is forbidden for roles: ${roles}`
      );
    }
    return await this.service.create({
      data: {
        ...data,

        postedBy: {
          connect: data.postedBy,
        },

        recipe: {
          connect: data.recipe,
        },
      },
      select: {
        comment: true,
        createdAt: true,
        id: true,

        postedBy: {
          select: {
            id: true,
          },
        },

        recipe: {
          select: {
            id: true,
          },
        },

        stars: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Get()
  @nestAccessControl.UseRoles({
    resource: "Rating",
    action: "read",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: [Rating] })
  @swagger.ApiForbiddenResponse()
  @swagger.ApiQuery({
    type: () => RatingFindManyArgs,
    style: "deepObject",
    explode: true,
  })
  async findMany(
    @common.Req() request: Request,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Rating[]> {
    const args = plainToClass(RatingFindManyArgs, request.query);

    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Rating",
    });
    const results = await this.service.findMany({
      ...args,
      select: {
        comment: true,
        createdAt: true,
        id: true,

        postedBy: {
          select: {
            id: true,
          },
        },

        recipe: {
          select: {
            id: true,
          },
        },

        stars: true,
        updatedAt: true,
      },
    });
    return results.map((result) => permission.filter(result));
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Get("/:id")
  @nestAccessControl.UseRoles({
    resource: "Rating",
    action: "read",
    possession: "own",
  })
  @swagger.ApiOkResponse({ type: Rating })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: RatingWhereUniqueInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Rating | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Rating",
    });
    const result = await this.service.findOne({
      where: params,
      select: {
        comment: true,
        createdAt: true,
        id: true,

        postedBy: {
          select: {
            id: true,
          },
        },

        recipe: {
          select: {
            id: true,
          },
        },

        stars: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return permission.filter(result);
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Patch("/:id")
  @nestAccessControl.UseRoles({
    resource: "Rating",
    action: "update",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: Rating })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: RatingWhereUniqueInput,
    @common.Body()
    data: RatingUpdateInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Rating | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Rating",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(permission, data);
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new errors.ForbiddenException(
        `providing the properties: ${properties} on ${"Rating"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          postedBy: {
            connect: data.postedBy,
          },

          recipe: {
            connect: data.recipe,
          },
        },
        select: {
          comment: true,
          createdAt: true,
          id: true,

          postedBy: {
            select: {
              id: true,
            },
          },

          recipe: {
            select: {
              id: true,
            },
          },

          stars: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(nestMorgan.MorganInterceptor("combined"))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Delete("/:id")
  @nestAccessControl.UseRoles({
    resource: "Rating",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiOkResponse({ type: Rating })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: RatingWhereUniqueInput
  ): Promise<Rating | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          comment: true,
          createdAt: true,
          id: true,

          postedBy: {
            select: {
              id: true,
            },
          },

          recipe: {
            select: {
              id: true,
            },
          },

          stars: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
