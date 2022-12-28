import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { RecipeListRelationFilter } from "../recipe/RecipeListRelationFilter";

export type SmartTagWhereInput = {
  id?: StringFilter;
  lang?: "En" | "Hu";
  name?: StringNullableFilter;
  recipe?: RecipeListRelationFilter;
};
