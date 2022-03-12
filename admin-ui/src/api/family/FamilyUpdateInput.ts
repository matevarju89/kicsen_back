import { UserUpdateManyWithoutFamiliesInput } from "./UserUpdateManyWithoutFamiliesInput";

export type FamilyUpdateInput = {
  country?: string | null;
  description?: string | null;
  member?: UserUpdateManyWithoutFamiliesInput;
};
