import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { SmartTagServiceBase } from "./base/smartTag.service.base";

@Injectable()
export class SmartTagService extends SmartTagServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
