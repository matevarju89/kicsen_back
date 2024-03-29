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
import { ValidateNested, IsOptional, IsEnum } from "class-validator";
import { Type } from "class-transformer";
import { StringFilter } from "../../util/StringFilter";
import { EnumSmartTagLang } from "./EnumSmartTagLang";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { RecipeListRelationFilter } from "../../recipe/base/RecipeListRelationFilter";

@InputType()
class SmartTagWhereInput {
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
  family?: FamilyWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    enum: EnumSmartTagLang,
  })
  @IsEnum(EnumSmartTagLang)
  @IsOptional()
  @Field(() => EnumSmartTagLang, {
    nullable: true,
  })
  lang?: "En" | "Hu";

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  name?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => RecipeListRelationFilter,
  })
  @ValidateNested()
  @Type(() => RecipeListRelationFilter)
  @IsOptional()
  @Field(() => RecipeListRelationFilter, {
    nullable: true,
  })
  recipe?: RecipeListRelationFilter;
}

export { SmartTagWhereInput };
