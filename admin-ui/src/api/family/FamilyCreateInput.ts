import { UserCreateNestedManyWithoutFamiliesInput } from "./UserCreateNestedManyWithoutFamiliesInput";

export type FamilyCreateInput = {
  country?: string | null;
  description?: string | null;
  member?: UserCreateNestedManyWithoutFamiliesInput;
};
