import { ArgsType, Field } from "@nestjs/graphql";
import { FamilyWhereUniqueInput } from "./FamilyWhereUniqueInput";

@ArgsType()
class FamilyFindUniqueArgs {
  @Field(() => FamilyWhereUniqueInput, { nullable: false })
  where!: FamilyWhereUniqueInput;
}

export { FamilyFindUniqueArgs };
