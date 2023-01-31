import * as common from '@nestjs/common';
import * as swagger from '@nestjs/swagger';
import * as nestAccessControl from 'nest-access-control';
import * as nestMorgan from 'nest-morgan';
import * as defaultAuthGuard from '../auth/defaultAuth.guard';
import { FamilyService } from './family.service';
import { FamilyControllerBase } from './base/family.controller.base';
import { RecipeFindManyArgs } from '../recipe/base/RecipeFindManyArgs';
import { Recipe } from '../recipe/base/Recipe';
import { plainToClass } from 'class-transformer';
import { ApiNestedQuery } from '../decorators/api-nested-query.decorator';
import { FamilyWhereUniqueInput } from './base/FamilyWhereUniqueInput';
import { Request } from 'express';
import * as errors from '../errors';
import { AclFilterResponseInterceptor } from '../interceptors/aclFilterResponse.interceptor';

@swagger.ApiTags('families')
@common.Controller('families')
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class FamilyController extends FamilyControllerBase {
  constructor(
    protected readonly service: FamilyService,
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
  @common.Get('/:id/recipes')
  @ApiNestedQuery(RecipeFindManyArgs)
  async findManyRecipes(
    @common.Req() request: Request,
    @common.Param() params: FamilyWhereUniqueInput
  ): Promise<Recipe[]> {
    const query = plainToClass(RecipeFindManyArgs, request.query);
    const results = await this.service.findRecipes(params.id, {
      ...query,
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
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Get('/:id/countRecipes')
  @nestAccessControl.UseRoles({
    resource: 'Family',
    action: 'read',
    possession: 'any',
  })
  @ApiNestedQuery(RecipeFindManyArgs)
  async findRecipeCount(
    @common.Req() request: Request,
    @common.Param() params: FamilyWhereUniqueInput,
    @nestAccessControl.UserRoles() userRoles: string[]
  ): Promise<Number> {
    const query = plainToClass(RecipeFindManyArgs, request.query);
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: 'read',
      possession: 'any',
      resource: 'Recipe',
    });
    const resultsCount = await this.service.countRecipes(params.id, {
      ...query,
      select: {
        id: true,
      },
    });
    if (resultsCount === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return resultsCount;
  }
}
