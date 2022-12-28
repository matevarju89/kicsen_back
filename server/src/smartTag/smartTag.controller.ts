import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SmartTagService } from "./smartTag.service";
import { SmartTagControllerBase } from "./base/smartTag.controller.base";

@swagger.ApiTags("smartTags")
@common.Controller("smartTags")
export class SmartTagController extends SmartTagControllerBase {
  constructor(
    protected readonly service: SmartTagService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
