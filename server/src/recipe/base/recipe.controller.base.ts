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
import { RecipeService } from "../recipe.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { RecipeCreateInput } from "./RecipeCreateInput";
import { RecipeWhereInput } from "./RecipeWhereInput";
import { RecipeWhereUniqueInput } from "./RecipeWhereUniqueInput";
import { RecipeFindManyArgs } from "./RecipeFindManyArgs";
import { RecipeUpdateInput } from "./RecipeUpdateInput";
import { Recipe } from "./Recipe";
import { ImageFindManyArgs } from "../../image/base/ImageFindManyArgs";
import { Image } from "../../image/base/Image";
import { ImageWhereUniqueInput } from "../../image/base/ImageWhereUniqueInput";
import { UserFindManyArgs } from "../../user/base/UserFindManyArgs";
import { User } from "../../user/base/User";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
import { RatingFindManyArgs } from "../../rating/base/RatingFindManyArgs";
import { Rating } from "../../rating/base/Rating";
import { RatingWhereUniqueInput } from "../../rating/base/RatingWhereUniqueInput";
import { SmartTagFindManyArgs } from "../../smartTag/base/SmartTagFindManyArgs";
import { SmartTag } from "../../smartTag/base/SmartTag";
import { SmartTagWhereUniqueInput } from "../../smartTag/base/SmartTagWhereUniqueInput";
@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class RecipeControllerBase {
  constructor(
    protected readonly service: RecipeService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Recipe",
    action: "create",
    possession: "any",
  })
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Recipe })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(@common.Body() data: RecipeCreateInput): Promise<Recipe> {
    return await this.service.create({
      data: {
        ...data,

        family: data.family
          ? {
              connect: data.family,
            }
          : undefined,

        postedBy: data.postedBy
          ? {
              connect: data.postedBy,
            }
          : undefined,
      },
      select: {
        category1: true,
        category2: true,
        category3: true,
        category4: true,
        createdAt: true,
        description: true,
        difficulty: true,

        family: {
          select: {
            id: true,
          },
        },

        id: true,
        ingredients: true,

        postedBy: {
          select: {
            id: true,
          },
        },

        title: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Recipe",
    action: "read",
    possession: "any",
  })
  @common.Get()
  @swagger.ApiOkResponse({ type: [Recipe] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(RecipeFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<Recipe[]> {
    const args = plainToClass(RecipeFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        category1: true,
        category2: true,
        category3: true,
        category4: true,
        createdAt: true,
        description: true,
        difficulty: true,

        family: {
          select: {
            id: true,
          },
        },

        id: true,
        ingredients: true,

        postedBy: {
          select: {
            id: true,
          },
        },

        title: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Recipe",
    action: "read",
    possession: "own",
  })
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Recipe })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: RecipeWhereUniqueInput
  ): Promise<Recipe | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        category1: true,
        category2: true,
        category3: true,
        category4: true,
        createdAt: true,
        description: true,
        difficulty: true,

        family: {
          select: {
            id: true,
          },
        },

        id: true,
        ingredients: true,

        postedBy: {
          select: {
            id: true,
          },
        },

        title: true,
        updatedAt: true,
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
    resource: "Recipe",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Recipe })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: RecipeWhereUniqueInput,
    @common.Body() data: RecipeUpdateInput
  ): Promise<Recipe | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          family: data.family
            ? {
                connect: data.family,
              }
            : undefined,

          postedBy: data.postedBy
            ? {
                connect: data.postedBy,
              }
            : undefined,
        },
        select: {
          category1: true,
          category2: true,
          category3: true,
          category4: true,
          createdAt: true,
          description: true,
          difficulty: true,

          family: {
            select: {
              id: true,
            },
          },

          id: true,
          ingredients: true,

          postedBy: {
            select: {
              id: true,
            },
          },

          title: true,
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

  @nestAccessControl.UseRoles({
    resource: "Recipe",
    action: "delete",
    possession: "any",
  })
  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Recipe })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: RecipeWhereUniqueInput
  ): Promise<Recipe | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          category1: true,
          category2: true,
          category3: true,
          category4: true,
          createdAt: true,
          description: true,
          difficulty: true,

          family: {
            select: {
              id: true,
            },
          },

          id: true,
          ingredients: true,

          postedBy: {
            select: {
              id: true,
            },
          },

          title: true,
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

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Image",
    action: "read",
    possession: "any",
  })
  @common.Get("/:id/images")
  @ApiNestedQuery(ImageFindManyArgs)
  async findManyImages(
    @common.Req() request: Request,
    @common.Param() params: RecipeWhereUniqueInput
  ): Promise<Image[]> {
    const query = plainToClass(ImageFindManyArgs, request.query);
    const results = await this.service.findImages(params.id, {
      ...query,
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
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @nestAccessControl.UseRoles({
    resource: "Recipe",
    action: "update",
    possession: "any",
  })
  @common.Post("/:id/images")
  async connectImages(
    @common.Param() params: RecipeWhereUniqueInput,
    @common.Body() body: ImageWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      images: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @nestAccessControl.UseRoles({
    resource: "Recipe",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id/images")
  async updateImages(
    @common.Param() params: RecipeWhereUniqueInput,
    @common.Body() body: ImageWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      images: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @nestAccessControl.UseRoles({
    resource: "Recipe",
    action: "update",
    possession: "any",
  })
  @common.Delete("/:id/images")
  async disconnectImages(
    @common.Param() params: RecipeWhereUniqueInput,
    @common.Body() body: ImageWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      images: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  @common.Get("/:id/likedBy")
  @ApiNestedQuery(UserFindManyArgs)
  async findManyLikedBy(
    @common.Req() request: Request,
    @common.Param() params: RecipeWhereUniqueInput
  ): Promise<User[]> {
    const query = plainToClass(UserFindManyArgs, request.query);
    const results = await this.service.findLikedBy(params.id, {
      ...query,
      select: {
        createdAt: true,
        firstName: true,
        id: true,
        lastName: true,

        ownFamily: {
          select: {
            id: true,
          },
        },

        roles: true,
        updatedAt: true,
        username: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @nestAccessControl.UseRoles({
    resource: "Recipe",
    action: "update",
    possession: "any",
  })
  @common.Post("/:id/likedBy")
  async connectLikedBy(
    @common.Param() params: RecipeWhereUniqueInput,
    @common.Body() body: UserWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      likedBy: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @nestAccessControl.UseRoles({
    resource: "Recipe",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id/likedBy")
  async updateLikedBy(
    @common.Param() params: RecipeWhereUniqueInput,
    @common.Body() body: UserWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      likedBy: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @nestAccessControl.UseRoles({
    resource: "Recipe",
    action: "update",
    possession: "any",
  })
  @common.Delete("/:id/likedBy")
  async disconnectLikedBy(
    @common.Param() params: RecipeWhereUniqueInput,
    @common.Body() body: UserWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      likedBy: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Rating",
    action: "read",
    possession: "any",
  })
  @common.Get("/:id/ratings")
  @ApiNestedQuery(RatingFindManyArgs)
  async findManyRatings(
    @common.Req() request: Request,
    @common.Param() params: RecipeWhereUniqueInput
  ): Promise<Rating[]> {
    const query = plainToClass(RatingFindManyArgs, request.query);
    const results = await this.service.findRatings(params.id, {
      ...query,
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
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @nestAccessControl.UseRoles({
    resource: "Recipe",
    action: "update",
    possession: "any",
  })
  @common.Post("/:id/ratings")
  async connectRatings(
    @common.Param() params: RecipeWhereUniqueInput,
    @common.Body() body: RatingWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      ratings: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @nestAccessControl.UseRoles({
    resource: "Recipe",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id/ratings")
  async updateRatings(
    @common.Param() params: RecipeWhereUniqueInput,
    @common.Body() body: RatingWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      ratings: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @nestAccessControl.UseRoles({
    resource: "Recipe",
    action: "update",
    possession: "any",
  })
  @common.Delete("/:id/ratings")
  async disconnectRatings(
    @common.Param() params: RecipeWhereUniqueInput,
    @common.Body() body: RatingWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      ratings: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "SmartTag",
    action: "read",
    possession: "any",
  })
  @common.Get("/:id/smartTags")
  @ApiNestedQuery(SmartTagFindManyArgs)
  async findManySmartTags(
    @common.Req() request: Request,
    @common.Param() params: RecipeWhereUniqueInput
  ): Promise<SmartTag[]> {
    const query = plainToClass(SmartTagFindManyArgs, request.query);
    const results = await this.service.findSmartTags(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,
        lang: true,
        name: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @nestAccessControl.UseRoles({
    resource: "Recipe",
    action: "update",
    possession: "any",
  })
  @common.Post("/:id/smartTags")
  async connectSmartTags(
    @common.Param() params: RecipeWhereUniqueInput,
    @common.Body() body: SmartTagWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      smartTags: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @nestAccessControl.UseRoles({
    resource: "Recipe",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id/smartTags")
  async updateSmartTags(
    @common.Param() params: RecipeWhereUniqueInput,
    @common.Body() body: SmartTagWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      smartTags: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @nestAccessControl.UseRoles({
    resource: "Recipe",
    action: "update",
    possession: "any",
  })
  @common.Delete("/:id/smartTags")
  async disconnectSmartTags(
    @common.Param() params: RecipeWhereUniqueInput,
    @common.Body() body: SmartTagWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      smartTags: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }
}
