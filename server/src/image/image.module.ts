import { Module } from '@nestjs/common';
import { ImageModuleBase } from './base/image.module.base';
import { ImageService } from './image.service';
import { ImageController } from './image.controller';
import { ImageResolver } from './image.resolver';
import { CloudinaryModule } from '../cloudinary/cloudinary.module';
import { PrismaService } from 'nestjs-prisma';
@Module({
  imports: [CloudinaryModule, ImageModuleBase],
  controllers: [ImageController],
  providers: [ImageService, PrismaService, ImageResolver],
  exports: [ImageService],
})
export class ImageModule {}
