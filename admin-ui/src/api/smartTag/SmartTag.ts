import { Recipe } from "../recipe/Recipe";

export type SmartTag = {
  createdAt: Date;
  id: string;
  lang?: "En" | "Hu" | null;
  name: string | null;
  recipe?: Array<Recipe>;
  updatedAt: Date;
};
