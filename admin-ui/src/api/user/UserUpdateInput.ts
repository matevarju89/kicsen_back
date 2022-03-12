import { FamilyUpdateManyWithoutUsersInput } from "./FamilyUpdateManyWithoutUsersInput";
import { RecipeUpdateManyWithoutUsersInput } from "./RecipeUpdateManyWithoutUsersInput";
import { RatingUpdateManyWithoutUsersInput } from "./RatingUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  families?: FamilyUpdateManyWithoutUsersInput;
  favoriteRecipes?: RecipeUpdateManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  postedRecipes?: RecipeUpdateManyWithoutUsersInput;
  ratings?: RatingUpdateManyWithoutUsersInput;
  roles?: Array<string>;
  username?: string;
};
