import { ApiProperty } from '@nestjs/swagger';

export class ImageUploadDto {
  @ApiProperty({type: 'string', format: 'binary', description: 'Image file to upload'})
  file: any;
}