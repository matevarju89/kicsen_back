import { UserCreateNestedManyWithoutFamiliesInput } from "./UserCreateNestedManyWithoutFamiliesInput";
import { RecipeCreateNestedManyWithoutFamiliesInput } from "./RecipeCreateNestedManyWithoutFamiliesInput";
import { SmartTagCreateNestedManyWithoutFamiliesInput } from "./SmartTagCreateNestedManyWithoutFamiliesInput";

export type FamilyCreateInput = {
  country?: string | null;
  description?: string | null;
  member?: UserCreateNestedManyWithoutFamiliesInput;
  ownUsers?: UserCreateNestedManyWithoutFamiliesInput;
  recipes?: RecipeCreateNestedManyWithoutFamiliesInput;
  smartTags?: SmartTagCreateNestedManyWithoutFamiliesInput;
};
