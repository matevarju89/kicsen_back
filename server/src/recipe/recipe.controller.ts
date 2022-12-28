import * as common from '@nestjs/common';
import * as swagger from '@nestjs/swagger';
import * as nestAccessControl from 'nest-access-control';
import * as nestMorgan from 'nest-morgan';
import { RecipeService } from './recipe.service';
import { RecipeControllerBase } from './base/recipe.controller.base';
import * as defaultAuthGuard from '../auth/defaultAuth.guard';
import * as abacUtil from '../auth/abac.util';
import { Request } from 'express';
import { plainToClass } from 'class-transformer';
import { ApiNestedQuery } from '../decorators/api-nested-query.decorator';
import { RecipeFindManyArgs } from './base/RecipeFindManyArgs';
import { Recipe } from './base/Recipe';

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
