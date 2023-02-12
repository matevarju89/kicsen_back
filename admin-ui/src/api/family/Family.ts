import { User } from "../user/User";
import { Recipe } from "../recipe/Recipe";

export type Family = {
  country: string | null;
  createdAt: Date;
  description: string | null;
  id: string;
  member?: Array<User>;
  ownUsers?: Array<User>;
  recipes?: Array<Recipe>;
  updatedAt: Date;
};
