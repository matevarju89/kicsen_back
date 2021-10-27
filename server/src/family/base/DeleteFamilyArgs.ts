import { ArgsType, Field } from "@nestjs/graphql";
import { FamilyWhereUniqueInput } from "./FamilyWhereUniqueInput";

@ArgsType()
class DeleteFamilyArgs {
  @Field(() => FamilyWhereUniqueInput, { nullable: false })
  where!: FamilyWhereUniqueInput;
}

export { DeleteFamilyArgs };
