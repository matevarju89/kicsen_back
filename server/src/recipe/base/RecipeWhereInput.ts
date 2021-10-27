import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EnumRecipeCategory1 } from "./EnumRecipeCategory1";
import { IsEnum, IsOptional, ValidateNested } from "class-validator";
import { EnumRecipeCategory2 } from "./EnumRecipeCategory2";
import { EnumRecipeCategory3 } from "./EnumRecipeCategory3";
import { StringFilter } from "../../util/StringFilter";
import { Type } from "class-transformer";
import { EnumRecipeDifficulty } from "./EnumRecipeDifficulty";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
@InputType()
class RecipeWhereInput {
  @ApiProperty({
    required: false,
    enum: EnumRecipeCategory1,
  })
  @IsEnum(EnumRecipeCategory1)
  @IsOptional()
  @Field(() => EnumRecipeCategory1, {
    nullable: true,
  })
  category1?: "appetizer" | "soup" | "main" | "dessert";

  @ApiProperty({
    required: false,
    enum: EnumRecipeCategory2,
  })
  @IsEnum(EnumRecipeCategory2)
  @IsOptional()
  @Field(() => EnumRecipeCategory2, {
    nullable: true,
  })
  category2?: "salty" | "sweet";

  @ApiProperty({
    required: false,
    enum: EnumRecipeCategory3,
  })
  @IsEnum(EnumRecipeCategory3)
  @IsOptional()
  @Field(() => EnumRecipeCategory3, {
    nullable: true,
  })
  category3?: "vegan" | "nonvegan";

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  description?: StringFilter;

  @ApiProperty({
    required: false,
    enum: EnumRecipeDifficulty,
  })
  @IsEnum(EnumRecipeDifficulty)
  @IsOptional()
  @Field(() => EnumRecipeDifficulty, {
    nullable: true,
  })
  difficulty?: "easy" | "medium" | "hard";

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
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  ingredients?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  postedBy?: UserWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  title?: StringFilter;
}
export { RecipeWhereInput };
