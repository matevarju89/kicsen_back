/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { SmartTagWhereInput } from "./SmartTagWhereInput";
import { Type } from "class-transformer";
import { SmartTagOrderByInput } from "./SmartTagOrderByInput";

@ArgsType()
class SmartTagFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => SmartTagWhereInput,
  })
  @Field(() => SmartTagWhereInput, { nullable: true })
  @Type(() => SmartTagWhereInput)
  where?: SmartTagWhereInput;

  @ApiProperty({
    required: false,
    type: [SmartTagOrderByInput],
  })
  @Field(() => [SmartTagOrderByInput], { nullable: true })
  @Type(() => SmartTagOrderByInput)
  orderBy?: Array<SmartTagOrderByInput>;

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

export { SmartTagFindManyArgs };
