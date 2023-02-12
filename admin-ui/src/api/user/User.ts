import { Family } from "../family/Family";
import { Recipe } from "../recipe/Recipe";
import { Rating } from "../rating/Rating";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  families?: Array<Family>;
  favoriteRecipes?: Array<Recipe>;
  firstName: string | null;
  id: string;
  lastName: string | null;
  ownFamily?: Family | null;
  postedRecipes?: Array<Recipe>;
  ratings?: Array<Rating>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
