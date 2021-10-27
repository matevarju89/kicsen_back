import { User } from "../user/User";
import { Recipe } from "../recipe/Recipe";

export type Rating = {
  comment: string | null;
  createdAt: Date;
  id: string;
  postedBy?: User;
  recipe?: Recipe;
  stars: number;
  updatedAt: Date;
};
