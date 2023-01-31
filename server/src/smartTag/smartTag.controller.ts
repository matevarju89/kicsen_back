import * as common from '@nestjs/common';
import * as swagger from '@nestjs/swagger';
import * as nestAccessControl from 'nest-access-control';
import * as errors from '../errors';
import { SmartTagService } from './smartTag.service';
import { SmartTagControllerBase } from './base/smartTag.controller.base';
import { AclValidateRequestInterceptor } from '../interceptors/aclValidateRequest.interceptor';
import { SmartTag } from './base/SmartTag';
import { SmartTagCreateInput } from './base/SmartTagCreateInput';
import { SmartTagCreateBatchResponse } from './SmartTagCreateBatchResponse';

@swagger.ApiTags('smartTags')
@common.Controller('smartTags')
export class SmartTagController extends SmartTagControllerBase {
  constructor(
    protected readonly service: SmartTagService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: 'SmartTag',
    action: 'create',
    possession: 'any',
  })
  @common.Post('/createMany')
  @swagger.ApiCreatedResponse({
    type: SmartTagCreateBatchResponse,
  })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async createMany(
    @common.Body() data: Array<SmartTagCreateInput>
  ): Promise<{ count: number }> {
    return await this.service.createMany({
      data: data,
      skipDuplicates: true,
    });
  }
}
