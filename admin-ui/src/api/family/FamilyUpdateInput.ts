import { UserUpdateManyWithoutFamiliesInput } from "./UserUpdateManyWithoutFamiliesInput";
import { RecipeUpdateManyWithoutFamiliesInput } from "./RecipeUpdateManyWithoutFamiliesInput";

export type FamilyUpdateInput = {
  country?: string | null;
  description?: string | null;
  member?: UserUpdateManyWithoutFamiliesInput;
  recipes?: RecipeUpdateManyWithoutFamiliesInput;
};
