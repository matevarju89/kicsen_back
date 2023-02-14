import { FamilyWhereUniqueInput } from "../family/FamilyWhereUniqueInput";
import { RecipeCreateNestedManyWithoutSmartTagsInput } from "./RecipeCreateNestedManyWithoutSmartTagsInput";

export type SmartTagCreateInput = {
  family?: FamilyWhereUniqueInput | null;
  lang?: "En" | "Hu" | null;
  name?: string | null;
  recipe?: RecipeCreateNestedManyWithoutSmartTagsInput;
};
