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
class RecipeCreateInput {
  @ApiProperty({
    required: true,
    enum: EnumRecipeCategory1,
  })
  @IsEnum(EnumRecipeCategory1)
  @Field(() => EnumRecipeCategory1)
  category1!: "appetizer" | "soup" | "main" | "dessert";

  @ApiProperty({
    required: true,
    enum: EnumRecipeCategory2,
  })
  @IsEnum(EnumRecipeCategory2)
  @Field(() => EnumRecipeCategory2)
  category2!: "salty" | "sweet";

  @ApiProperty({
    required: true,
    enum: EnumRecipeCategory3,
  })
  @IsEnum(EnumRecipeCategory3)
  @Field(() => EnumRecipeCategory3)
  category3!: "vegan" | "nonvegan";

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
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  description!: string;

  @ApiProperty({
    required: true,
    enum: EnumRecipeDifficulty,
  })
  @IsEnum(EnumRecipeDifficulty)
  @Field(() => EnumRecipeDifficulty)
  difficulty!: "easy" | "medium" | "hard";

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  ingredients!: string;

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
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  title!: string;
}
export { RecipeCreateInput };
