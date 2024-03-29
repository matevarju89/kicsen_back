/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { ImageService } from "../image.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { ImageCreateInput } from "./ImageCreateInput";
import { ImageWhereInput } from "./ImageWhereInput";
import { ImageWhereUniqueInput } from "./ImageWhereUniqueInput";
import { ImageFindManyArgs } from "./ImageFindManyArgs";
import { ImageUpdateInput } from "./ImageUpdateInput";
import { Image } from "./Image";
@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class ImageControllerBase {
  constructor(
    protected readonly service: ImageService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Image",
    action: "create",
    possession: "any",
  })
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Image })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(@common.Body() data: ImageCreateInput): Promise<Image> {
    return await this.service.create({
      data: {
        ...data,

        recipe: data.recipe
          ? {
              connect: data.recipe,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        height: true,
        id: true,

        recipe: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
        url: true,
        width: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Image",
    action: "read",
    possession: "any",
  })
  @common.Get()
  @swagger.ApiOkResponse({ type: [Image] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(ImageFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<Image[]> {
    const args = plainToClass(ImageFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        createdAt: true,
        height: true,
        id: true,

        recipe: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
        url: true,
        width: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Image",
    action: "read",
    possession: "own",
  })
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Image })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: ImageWhereUniqueInput
  ): Promise<Image | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,
        height: true,
        id: true,

        recipe: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
        url: true,
        width: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Image",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Image })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: ImageWhereUniqueInput,
    @common.Body() data: ImageUpdateInput
  ): Promise<Image | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          recipe: data.recipe
            ? {
                connect: data.recipe,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          height: true,
          id: true,

          recipe: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
          url: true,
          width: true,
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

  @nestAccessControl.UseRoles({
    resource: "Image",
    action: "delete",
    possession: "any",
  })
  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Image })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: ImageWhereUniqueInput
  ): Promise<Image | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,
          height: true,
          id: true,

          recipe: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
          url: true,
          width: true,
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
