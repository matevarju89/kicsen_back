import { FamilyListRelationFilter } from "../family/FamilyListRelationFilter";
import { RecipeListRelationFilter } from "../recipe/RecipeListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { RatingListRelationFilter } from "../rating/RatingListRelationFilter";

export type UserWhereInput = {
  families?: FamilyListRelationFilter;
  favoriteRecipes?: RecipeListRelationFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  postedRecipes?: RecipeListRelationFilter;
  ratings?: RatingListRelationFilter;
  username?: StringFilter;
};
