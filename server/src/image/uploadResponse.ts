import { ApiProperty } from '@nestjs/swagger';

export class UploadResponse {
  @ApiProperty()
  url!: string;
  @ApiProperty()
  public_id!: string;
}
