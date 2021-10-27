import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { RecipeWhereUniqueInput } from "../recipe/RecipeWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";

export type RatingWhereInput = {
  comment?: StringNullableFilter;
  id?: StringFilter;
  postedBy?: UserWhereUniqueInput;
  recipe?: RecipeWhereUniqueInput;
  stars?: IntFilter;
};
