import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { RecipeWhereUniqueInput } from "../recipe/RecipeWhereUniqueInput";

export type RatingCreateInput = {
  comment?: string | null;
  postedBy: UserWhereUniqueInput;
  recipe: RecipeWhereUniqueInput;
  stars: number;
};
