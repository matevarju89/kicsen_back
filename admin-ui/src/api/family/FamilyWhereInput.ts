import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type FamilyWhereInput = {
  country?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  member?: UserListRelationFilter;
};
