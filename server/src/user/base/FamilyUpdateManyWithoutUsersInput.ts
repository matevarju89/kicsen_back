/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { FamilyWhereUniqueInput } from "../../family/base/FamilyWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";
@InputType()
class FamilyUpdateManyWithoutUsersInput {
  @Field(() => [FamilyWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [FamilyWhereUniqueInput],
  })
  connect?: Array<FamilyWhereUniqueInput>;

  @Field(() => [FamilyWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [FamilyWhereUniqueInput],
  })
  disconnect?: Array<FamilyWhereUniqueInput>;

  @Field(() => [FamilyWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [FamilyWhereUniqueInput],
  })
  set?: Array<FamilyWhereUniqueInput>;
}
export { FamilyUpdateManyWithoutUsersInput };
