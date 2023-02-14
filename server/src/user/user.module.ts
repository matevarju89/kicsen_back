import { Module } from '@nestjs/common';
import { UserModuleBase } from './base/user.module.base';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserResolver } from './user.resolver';
import { PrismaService } from 'nestjs-prisma';

@Module({
  imports: [UserModuleBase],
  controllers: [UserController],
  providers: [UserService, PrismaService, UserResolver],
  exports: [UserService],
})
export class UserModule {}
