import { ArgsType, Field } from "@nestjs/graphql";
import { FamilyCreateInput } from "./FamilyCreateInput";

@ArgsType()
class CreateFamilyArgs {
  @Field(() => FamilyCreateInput, { nullable: false })
  data!: FamilyCreateInput;
}

export { CreateFamilyArgs };
