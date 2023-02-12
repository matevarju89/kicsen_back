/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { RatingWhereUniqueInput } from "../../rating/base/RatingWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class RatingUpdateManyWithoutUsersInput {
  @Field(() => [RatingWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [RatingWhereUniqueInput],
  })
  connect?: Array<RatingWhereUniqueInput>;

  @Field(() => [RatingWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [RatingWhereUniqueInput],
  })
  disconnect?: Array<RatingWhereUniqueInput>;

  @Field(() => [RatingWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [RatingWhereUniqueInput],
  })
  set?: Array<RatingWhereUniqueInput>;
}

export { RatingUpdateManyWithoutUsersInput };
