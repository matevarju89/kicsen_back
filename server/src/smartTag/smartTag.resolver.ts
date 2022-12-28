import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { SmartTagResolverBase } from "./base/smartTag.resolver.base";
import { SmartTag } from "./base/SmartTag";
import { SmartTagService } from "./smartTag.service";

@graphql.Resolver(() => SmartTag)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class SmartTagResolver extends SmartTagResolverBase {
  constructor(
    protected readonly service: SmartTagService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
