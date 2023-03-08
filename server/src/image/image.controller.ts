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
import { ParseFilePipe } from '@nestjs/common/pipes/file';
import { SharpPipe } from './sharp.pipe';
import { MaxFileSizeValidator } from '@nestjs/common/pipes/file';
import { FileTypeValidator } from '@nestjs/common/pipes/file';

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
  //@common.UsePipes(SharpPipe);
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
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({ maxSize: 10000000 }),
          new FileTypeValidator({ fileType: /jpeg|jpg|png|webp/ }),
        ],
      }),
      SharpPipe
    )
    file: Buffer
  ) {
    return await this.cloudinary
      .uploadImage(file)
      .then((data) => {
        return data;
      })
      .catch((error) => {
        throw new InternalServerErrorException('Cloudinary service failure', {
          cause: new Error(),
          description: 'Cloudinary service failure',
        });
      });
  }
}
