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
import { FamilyWhereUniqueInput } from "../../family/base/FamilyWhereUniqueInput";
import { ValidateNested, IsOptional, IsEnum, IsString } from "class-validator";
import { Type } from "class-transformer";
import { EnumSmartTagLang } from "./EnumSmartTagLang";
import { RecipeUpdateManyWithoutSmartTagsInput } from "./RecipeUpdateManyWithoutSmartTagsInput";

@InputType()
class SmartTagUpdateInput {
  @ApiProperty({
    required: false,
    type: () => FamilyWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => FamilyWhereUniqueInput)
  @IsOptional()
  @Field(() => FamilyWhereUniqueInput, {
    nullable: true,
  })
  family?: FamilyWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    enum: EnumSmartTagLang,
  })
  @IsEnum(EnumSmartTagLang)
  @IsOptional()
  @Field(() => EnumSmartTagLang, {
    nullable: true,
  })
  lang?: "En" | "Hu" | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: () => RecipeUpdateManyWithoutSmartTagsInput,
  })
  @ValidateNested()
  @Type(() => RecipeUpdateManyWithoutSmartTagsInput)
  @IsOptional()
  @Field(() => RecipeUpdateManyWithoutSmartTagsInput, {
    nullable: true,
  })
  recipe?: RecipeUpdateManyWithoutSmartTagsInput;
}

export { SmartTagUpdateInput };
