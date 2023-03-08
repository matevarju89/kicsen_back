import { Module } from '@nestjs/common';
import { ImageModuleBase } from './base/image.module.base';
import { ImageService } from './image.service';
import { ImageController } from './image.controller';
import { ImageResolver } from './image.resolver';
import { CloudinaryModule } from '../cloudinary/cloudinary.module';
import { PrismaService } from 'nestjs-prisma';
import { MulterModule } from '@nestjs/platform-express';
import { memoryStorage } from 'multer';
@Module({
  imports: [
    CloudinaryModule,
    ImageModuleBase,
    MulterModule.register({ storage: memoryStorage() }),
  ],
  controllers: [ImageController],
  providers: [ImageService, PrismaService, ImageResolver],
  exports: [ImageService],
})
export class ImageModule {}
