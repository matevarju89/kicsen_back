import { FamilyUpdateManyWithoutUsersInput } from "./FamilyUpdateManyWithoutUsersInput";
import { RecipeUpdateManyWithoutUsersInput } from "./RecipeUpdateManyWithoutUsersInput";
import { FamilyWhereUniqueInput } from "../family/FamilyWhereUniqueInput";
import { RatingUpdateManyWithoutUsersInput } from "./RatingUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  families?: FamilyUpdateManyWithoutUsersInput;
  favoriteRecipes?: RecipeUpdateManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  ownFamily?: FamilyWhereUniqueInput | null;
  password?: string;
  postedRecipes?: RecipeUpdateManyWithoutUsersInput;
  ratings?: RatingUpdateManyWithoutUsersInput;
  roles?: InputJsonValue;
  username?: string;
};
