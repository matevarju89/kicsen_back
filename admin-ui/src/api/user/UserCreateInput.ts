import { FamilyCreateNestedManyWithoutUsersInput } from "./FamilyCreateNestedManyWithoutUsersInput";
import { RecipeCreateNestedManyWithoutUsersInput } from "./RecipeCreateNestedManyWithoutUsersInput";
import { FamilyWhereUniqueInput } from "../family/FamilyWhereUniqueInput";
import { RatingCreateNestedManyWithoutUsersInput } from "./RatingCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  families?: FamilyCreateNestedManyWithoutUsersInput;
  favoriteRecipes?: RecipeCreateNestedManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  ownFamily?: FamilyWhereUniqueInput | null;
  password: string;
  postedRecipes?: RecipeCreateNestedManyWithoutUsersInput;
  ratings?: RatingCreateNestedManyWithoutUsersInput;
  roles: InputJsonValue;
  username: string;
};
