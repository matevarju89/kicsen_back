import { Module } from "@nestjs/common";
import { FamilyModuleBase } from "./base/family.module.base";
import { FamilyService } from "./family.service";
import { FamilyController } from "./family.controller";
import { FamilyResolver } from "./family.resolver";

@Module({
  imports: [FamilyModuleBase],
  controllers: [FamilyController],
  providers: [FamilyService, FamilyResolver],
  exports: [FamilyService],
})
export class FamilyModule {}
