import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { FamilyServiceBase } from "./base/family.service.base";

@Injectable()
export class FamilyService extends FamilyServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
