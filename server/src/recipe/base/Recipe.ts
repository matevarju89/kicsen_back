import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EnumRecipeCategory1 } from "./EnumRecipeCategory1";
import {
  IsEnum,
  IsOptional,
  IsDate,
  IsString,
  ValidateNested,
} from "class-validator";
import { EnumRecipeCategory2 } from "./EnumRecipeCategory2";
import { EnumRecipeCategory3 } from "./EnumRecipeCategory3";
import { EnumRecipeCategory4 } from "./EnumRecipeCategory4";
import { Type } from "class-transformer";
import { EnumRecipeDifficulty } from "./EnumRecipeDifficulty";
import { Image } from "../../image/base/Image";
import { User } from "../../user/base/User";
import { Rating } from "../../rating/base/Rating";
@ObjectType()
class Recipe {
  @ApiProperty({
    required: true,
    enum: EnumRecipeCategory1,
  })
  @IsEnum(EnumRecipeCategory1)
  @Field(() => EnumRecipeCategory1, {
    nullable: true,
  })
  category1?: "appetizer" | "soup" | "main" | "dessert";

  @ApiProperty({
    required: true,
    enum: EnumRecipeCategory2,
  })
  @IsEnum(EnumRecipeCategory2)
  @Field(() => EnumRecipeCategory2, {
    nullable: true,
  })
  category2?: "salty" | "sweet";

  @ApiProperty({
    required: true,
    enum: EnumRecipeCategory3,
  })
  @IsEnum(EnumRecipeCategory3)
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
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

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
  @Field(() => EnumRecipeDifficulty, {
    nullable: true,
  })
  difficulty?: "easy" | "medium" | "hard";

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: () => [Image],
  })
  @ValidateNested()
  @Type(() => Image)
  @IsOptional()
  images?: Array<Image>;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  ingredients!: string;

  @ApiProperty({
    required: false,
    type: () => [User],
  })
  @ValidateNested()
  @Type(() => User)
  @IsOptional()
  likedBy?: Array<User>;

  @ApiProperty({
    required: false,
    type: () => User,
  })
  @ValidateNested()
  @Type(() => User)
  @IsOptional()
  postedBy?: User | null;

  @ApiProperty({
    required: false,
    type: () => [Rating],
  })
  @ValidateNested()
  @Type(() => Rating)
  @IsOptional()
  ratings?: Array<Rating>;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  title!: string;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}
export { Recipe };
