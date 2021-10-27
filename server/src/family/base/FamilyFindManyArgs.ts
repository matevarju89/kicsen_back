import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { FamilyWhereInput } from "./FamilyWhereInput";
import { Type } from "class-transformer";
import { FamilyOrderByInput } from "./FamilyOrderByInput";

@ArgsType()
class FamilyFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => FamilyWhereInput,
  })
  @Field(() => FamilyWhereInput, { nullable: true })
  @Type(() => FamilyWhereInput)
  where?: FamilyWhereInput;

  @ApiProperty({
    required: false,
    type: FamilyOrderByInput,
  })
  @Field(() => FamilyOrderByInput, { nullable: true })
  @Type(() => FamilyOrderByInput)
  orderBy?: FamilyOrderByInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { FamilyFindManyArgs };
