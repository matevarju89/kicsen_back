import { UserUpdateManyWithoutFamiliesInput } from "./UserUpdateManyWithoutFamiliesInput";
import { RecipeUpdateManyWithoutFamiliesInput } from "./RecipeUpdateManyWithoutFamiliesInput";
import { SmartTagUpdateManyWithoutFamiliesInput } from "./SmartTagUpdateManyWithoutFamiliesInput";

export type FamilyUpdateInput = {
  country?: string | null;
  description?: string | null;
  member?: UserUpdateManyWithoutFamiliesInput;
  ownUsers?: UserUpdateManyWithoutFamiliesInput;
  recipes?: RecipeUpdateManyWithoutFamiliesInput;
  smartTags?: SmartTagUpdateManyWithoutFamiliesInput;
};
