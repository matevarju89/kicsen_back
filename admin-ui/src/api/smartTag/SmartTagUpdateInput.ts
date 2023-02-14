import { FamilyWhereUniqueInput } from "../family/FamilyWhereUniqueInput";
import { RecipeUpdateManyWithoutSmartTagsInput } from "./RecipeUpdateManyWithoutSmartTagsInput";

export type SmartTagUpdateInput = {
  family?: FamilyWhereUniqueInput | null;
  lang?: "En" | "Hu" | null;
  name?: string | null;
  recipe?: RecipeUpdateManyWithoutSmartTagsInput;
};
