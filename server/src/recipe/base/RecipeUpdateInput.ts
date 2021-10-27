import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EnumRecipeCategory1 } from "./EnumRecipeCategory1";
import { IsEnum, IsOptional, IsString, ValidateNested } from "class-validator";
import { EnumRecipeCategory2 } from "./EnumRecipeCategory2";
import { EnumRecipeCategory3 } from "./EnumRecipeCategory3";
import { EnumRecipeCategory4 } from "./EnumRecipeCategory4";
import { EnumRecipeDifficulty } from "./EnumRecipeDifficulty";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
import { Type } from "class-transformer";
@InputType()
class RecipeUpdateInput {
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
    enum: EnumRecipeCategory4,
    isArray: true,
  })
  @IsEnum(EnumRecipeCategory4, {
    each: true,
  })
  @IsOptional()
  @Field(() => [EnumRecipeCategory4], {
    nullable: true,
  })
  category4?: Array<
    "chicken" | "seafood" | "beef" | "veal" | "lamb" | "vegetable" | "Fruit"
  >;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string;

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
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  ingredients?: string;

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
  postedBy?: UserWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  title?: string;
}
export { RecipeUpdateInput };
