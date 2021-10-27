import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
import { RecipeWhereUniqueInput } from "../../recipe/base/RecipeWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";
@InputType()
class RatingWhereInput {
  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  comment?: StringNullableFilter;

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
    type: () => RecipeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => RecipeWhereUniqueInput)
  @IsOptional()
  @Field(() => RecipeWhereUniqueInput, {
    nullable: true,
  })
  recipe?: RecipeWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: IntFilter,
  })
  @Type(() => IntFilter)
  @IsOptional()
  @Field(() => IntFilter, {
    nullable: true,
  })
  stars?: IntFilter;
}
export { RatingWhereInput };
