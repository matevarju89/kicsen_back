import { ApiProperty } from '@nestjs/swagger';

export class SmartTagCreateBatchResponse {
  @ApiProperty()
  count!: number;
}
