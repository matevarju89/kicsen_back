/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ImageWhereInput } from "./ImageWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ImageListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ImageWhereInput,
  })
  @ValidateNested()
  @Type(() => ImageWhereInput)
  @IsOptional()
  @Field(() => ImageWhereInput, {
    nullable: true,
  })
  every?: ImageWhereInput;

  @ApiProperty({
    required: false,
    type: () => ImageWhereInput,
  })
  @ValidateNested()
  @Type(() => ImageWhereInput)
  @IsOptional()
  @Field(() => ImageWhereInput, {
    nullable: true,
  })
  some?: ImageWhereInput;

  @ApiProperty({
    required: false,
    type: () => ImageWhereInput,
  })
  @ValidateNested()
  @Type(() => ImageWhereInput)
  @IsOptional()
  @Field(() => ImageWhereInput, {
    nullable: true,
  })
  none?: ImageWhereInput;
}
export { ImageListRelationFilter };
