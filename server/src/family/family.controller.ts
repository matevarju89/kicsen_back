import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { FamilyService } from "./family.service";
import { FamilyControllerBase } from "./base/family.controller.base";

@swagger.ApiTags("families")
@common.Controller("families")
export class FamilyController extends FamilyControllerBase {
  constructor(
    protected readonly service: FamilyService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
