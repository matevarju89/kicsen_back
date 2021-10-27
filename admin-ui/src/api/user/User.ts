import { Family } from "../family/Family";
import { Recipe } from "../recipe/Recipe";
import { Rating } from "../rating/Rating";

export type User = {
  createdAt: Date;
  families?: Array<Family>;
  favoriteRecipes?: Array<Recipe>;
  firstName: string | null;
  id: string;
  lastName: string | null;
  postedRecipes?: Array<Recipe>;
  ratings?: Array<Rating>;
  roles: Array<string>;
  updatedAt: Date;
  username: string;
};
