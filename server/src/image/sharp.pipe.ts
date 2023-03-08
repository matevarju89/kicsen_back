import { Injectable, PipeTransform } from '@nestjs/common';
import * as path from 'path';
import sharp from 'sharp';
import { UnprocessableEntityException } from '@nestjs/common';

@Injectable()
export class SharpPipe
  implements PipeTransform<Express.Multer.File, Promise<Buffer | void>>
{
  async transform(image: Express.Multer.File): Promise<Buffer | void> {
    try {
      const buffer = await sharp(image.buffer)
        .resize(800)
        .png({ effort: 3 })
        .toBuffer();
      return buffer;
    } catch (err) {
      throw new UnprocessableEntityException('File not convertible');
    }
  }
}
