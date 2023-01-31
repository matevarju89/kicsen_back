import * as common from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { ImageServiceBase } from './base/image.service.base';
@common.Injectable()
export class ImageService extends ImageServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
