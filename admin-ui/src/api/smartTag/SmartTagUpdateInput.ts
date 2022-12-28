import { RecipeUpdateManyWithoutSmartTagsInput } from "./RecipeUpdateManyWithoutSmartTagsInput";

export type SmartTagUpdateInput = {
  lang?: "En" | "Hu" | null;
  name?: string | null;
  recipe?: RecipeUpdateManyWithoutSmartTagsInput;
};
