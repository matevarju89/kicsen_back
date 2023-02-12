import { UserUpdateManyWithoutFamiliesInput } from "./UserUpdateManyWithoutFamiliesInput";
import { RecipeUpdateManyWithoutFamiliesInput } from "./RecipeUpdateManyWithoutFamiliesInput";

export type FamilyUpdateInput = {
  country?: string | null;
  description?: string | null;
  member?: UserUpdateManyWithoutFamiliesInput;
  ownUsers?: UserUpdateManyWithoutFamiliesInput;
  recipes?: RecipeUpdateManyWithoutFamiliesInput;
};
