import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { RecipeWhereUniqueInput } from "../recipe/RecipeWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ImageWhereInput = {
  height?: IntNullableFilter;
  id?: StringFilter;
  recipe?: RecipeWhereUniqueInput;
  url?: StringNullableFilter;
  width?: IntNullableFilter;
};
