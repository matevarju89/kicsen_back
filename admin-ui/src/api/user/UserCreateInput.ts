import { FamilyCreateNestedManyWithoutUsersInput } from "./FamilyCreateNestedManyWithoutUsersInput";
import { RecipeCreateNestedManyWithoutUsersInput } from "./RecipeCreateNestedManyWithoutUsersInput";
import { RatingCreateNestedManyWithoutUsersInput } from "./RatingCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  families?: FamilyCreateNestedManyWithoutUsersInput;
  favoriteRecipes?: RecipeCreateNestedManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  postedRecipes?: RecipeCreateNestedManyWithoutUsersInput;
  ratings?: RatingCreateNestedManyWithoutUsersInput;
  roles: Array<string>;
  username: string;
};
