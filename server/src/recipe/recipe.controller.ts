import * as common from '@nestjs/common';
import * as swagger from '@nestjs/swagger';
import * as nestAccessControl from 'nest-access-control';
import * as nestMorgan from 'nest-morgan';
import * as errors from '../errors';
import { RecipeService } from './recipe.service';
import { RecipeControllerBase } from './base/recipe.controller.base';
import * as defaultAuthGuard from '../auth/defaultAuth.guard';
import * as abacUtil from '../auth/abac.util';
import { Request } from 'express';
import { plainToClass } from 'class-transformer';
import { ApiNestedQuery } from '../decorators/api-nested-query.decorator';
import { RecipeFindManyArgs } from './base/RecipeFindManyArgs';
import { RecipeWhereUniqueInput } from './base/RecipeWhereUniqueInput';
import { Recipe } from './base/Recipe';
import { AclFilterResponseInterceptor } from '../interceptors/aclFilterResponse.interceptor';

@swagger.ApiTags('recipes')
@common.Controller('recipes')
export class RecipeController extends RecipeControllerBase {
  constructor(
    protected readonly service: RecipeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: 'Recipe',
    action: 'read',
    possession: 'any',
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
        images: {
          select: {
            id: true,
            url: true,
          },
        },
        smartTags: {
          select: { id: true, name: true },
        },
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
    resource: 'Recipe',
    action: 'read',
    possession: 'own',
  })
  @common.Get('/:id')
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
        images: {
          select: {
            id: true,
            url: true,
          },
        },
        smartTags: {
          select: { id: true, name: true },
        },
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

  @common.UseInterceptors(nestMorgan.MorganInterceptor('combined'))
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Get('/count')
  @nestAccessControl.UseRoles({
    resource: 'Recipe',
    action: 'read',
    possession: 'any',
  })
  @swagger.ApiOkResponse({ type: Number })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(RecipeFindManyArgs)
  async countRecipes(
    @common.Req() request: Request,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<number> {
    const args = plainToClass(RecipeFindManyArgs, request.query);

    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: 'read',
      possession: 'any',
      resource: 'Recipe',
    });
    const results = await this.service.count({
      ...args,
    });

    return results;
  }
}
