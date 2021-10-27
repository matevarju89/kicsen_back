import { ArgsType, Field } from "@nestjs/graphql";
import { FamilyWhereUniqueInput } from "./FamilyWhereUniqueInput";
import { FamilyUpdateInput } from "./FamilyUpdateInput";

@ArgsType()
class UpdateFamilyArgs {
  @Field(() => FamilyWhereUniqueInput, { nullable: false })
  where!: FamilyWhereUniqueInput;
  @Field(() => FamilyUpdateInput, { nullable: false })
  data!: FamilyUpdateInput;
}

export { UpdateFamilyArgs };
