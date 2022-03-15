import { UserCreateNestedManyWithoutFamiliesInput } from "./UserCreateNestedManyWithoutFamiliesInput";
import { RecipeCreateNestedManyWithoutFamiliesInput } from "./RecipeCreateNestedManyWithoutFamiliesInput";

export type FamilyCreateInput = {
  country?: string | null;
  description?: string | null;
  member?: UserCreateNestedManyWithoutFamiliesInput;
  recipes?: RecipeCreateNestedManyWithoutFamiliesInput;
};
