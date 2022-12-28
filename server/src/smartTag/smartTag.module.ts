import { Module } from "@nestjs/common";
import { SmartTagModuleBase } from "./base/smartTag.module.base";
import { SmartTagService } from "./smartTag.service";
import { SmartTagController } from "./smartTag.controller";
import { SmartTagResolver } from "./smartTag.resolver";

@Module({
  imports: [SmartTagModuleBase],
  controllers: [SmartTagController],
  providers: [SmartTagService, SmartTagResolver],
  exports: [SmartTagService],
})
export class SmartTagModule {}
