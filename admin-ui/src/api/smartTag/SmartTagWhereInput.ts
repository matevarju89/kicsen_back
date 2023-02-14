import { FamilyWhereUniqueInput } from "../family/FamilyWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { RecipeListRelationFilter } from "../recipe/RecipeListRelationFilter";

export type SmartTagWhereInput = {
  family?: FamilyWhereUniqueInput;
  id?: StringFilter;
  lang?: "En" | "Hu";
  name?: StringNullableFilter;
  recipe?: RecipeListRelationFilter;
};
