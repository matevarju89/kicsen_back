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

@swagger.ApiTags('families')
@common.Controller('families')
export class FamilyController extends FamilyControllerBase {
  constructor(
    protected readonly service: FamilyService,
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
