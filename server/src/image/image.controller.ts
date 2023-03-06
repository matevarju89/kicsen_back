import * as common from '@nestjs/common';
import * as swagger from '@nestjs/swagger';
import * as nestAccessControl from 'nest-access-control';
import * as errors from '../errors';
import { ImageService } from './image.service';
import { ImageControllerBase } from './base/image.controller.base';
import { AclValidateRequestInterceptor } from '../interceptors/aclValidateRequest.interceptor';
import { CloudinaryService } from '../cloudinary/cloudinary.service';
import { InternalServerErrorException } from '@nestjs/common';
import { UploadResponse } from './uploadResponse';
import { FileInterceptor } from '@nestjs/platform-express';
import { UploadedFile } from '@nestjs/common/decorators';
import { ImageUploadDto } from './uploadDTO';
import { ParseFilePipeBuilder } from '@nestjs/common/pipes/file';

@swagger.ApiTags('images')
@common.Controller('images')
export class ImageController extends ImageControllerBase {
  constructor(
    protected readonly service: ImageService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder,
    private cloudinary: CloudinaryService
  ) {
    super(service, rolesBuilder);
  }
  @common.UseInterceptors(
    AclValidateRequestInterceptor,
    FileInterceptor('file')
  )
  @nestAccessControl.UseRoles({
    resource: 'Image',
    action: 'create',
    possession: 'any',
  })
  @common.Post('/upload')
  @swagger.ApiConsumes('multipart/form-data')
  @swagger.ApiBody({
    description: `The image file to upload`,
    type: ImageUploadDto,
  })
  @swagger.ApiCreatedResponse({ type: UploadResponse })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async uploadImage(
    @UploadedFile(
      new ParseFilePipeBuilder()
        .addFileTypeValidator({
          fileType: /jpg|jpeg|png/,
        })
        .addMaxSizeValidator({
          maxSize: 1000000,
        })
        .build({
          errorHttpStatusCode: common.HttpStatus.UNPROCESSABLE_ENTITY,
        })
    )
    file: Express.Multer.File
  ) {
    return await this.cloudinary
      .uploadImage(file)
      .then((data) => {
        return data;
      })
      .catch(() => {
        throw new InternalServerErrorException('Cloudinary service failure', {
          cause: new Error(),
          description: 'Cloudinary service failure',
        });
      });
  }
}
