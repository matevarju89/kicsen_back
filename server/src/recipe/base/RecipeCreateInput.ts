/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EnumRecipeCategory1 } from "./EnumRecipeCategory1";
import { IsEnum, IsOptional, IsString, ValidateNested } from "class-validator";
import { EnumRecipeCategory2 } from "./EnumRecipeCategory2";
import { EnumRecipeCategory3 } from "./EnumRecipeCategory3";
import { EnumRecipeCategory4 } from "./EnumRecipeCategory4";
import { EnumRecipeDifficulty } from "./EnumRecipeDifficulty";
import { ImageCreateNestedManyWithoutRecipesInput } from "./ImageCreateNestedManyWithoutRecipesInput";
import { Type } from "class-transformer";
import { UserCreateNestedManyWithoutRecipesInput } from "./UserCreateNestedManyWithoutRecipesInput";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
import { RatingCreateNestedManyWithoutRecipesInput } from "./RatingCreateNestedManyWithoutRecipesInput";
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
    required: false,
    type: () => ImageCreateNestedManyWithoutRecipesInput,
  })
  @ValidateNested()
  @Type(() => ImageCreateNestedManyWithoutRecipesInput)
  @IsOptional()
  @Field(() => ImageCreateNestedManyWithoutRecipesInput, {
    nullable: true,
  })
  images?: ImageCreateNestedManyWithoutRecipesInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  ingredients!: string;

  @ApiProperty({
    required: false,
    type: () => UserCreateNestedManyWithoutRecipesInput,
  })
  @ValidateNested()
  @Type(() => UserCreateNestedManyWithoutRecipesInput)
  @IsOptional()
  @Field(() => UserCreateNestedManyWithoutRecipesInput, {
    nullable: true,
  })
  likedBy?: UserCreateNestedManyWithoutRecipesInput;

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
    type: () => RatingCreateNestedManyWithoutRecipesInput,
  })
  @ValidateNested()
  @Type(() => RatingCreateNestedManyWithoutRecipesInput)
  @IsOptional()
  @Field(() => RatingCreateNestedManyWithoutRecipesInput, {
    nullable: true,
  })
  ratings?: RatingCreateNestedManyWithoutRecipesInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  title!: string;
}
export { RecipeCreateInput };
