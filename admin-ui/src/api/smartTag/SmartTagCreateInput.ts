import { RecipeCreateNestedManyWithoutSmartTagsInput } from "./RecipeCreateNestedManyWithoutSmartTagsInput";

export type SmartTagCreateInput = {
  lang?: "En" | "Hu" | null;
  name?: string | null;
  recipe?: RecipeCreateNestedManyWithoutSmartTagsInput;
};
