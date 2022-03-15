import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";
import { RecipeListRelationFilter } from "../recipe/RecipeListRelationFilter";

export type FamilyWhereInput = {
  country?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  member?: UserListRelationFilter;
  recipes?: RecipeListRelationFilter;
};
