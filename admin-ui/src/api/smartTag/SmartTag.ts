import { Family } from "../family/Family";
import { Recipe } from "../recipe/Recipe";

export type SmartTag = {
  createdAt: Date;
  family?: Family | null;
  id: string;
  lang?: "En" | "Hu" | null;
  name: string | null;
  recipe?: Array<Recipe>;
  updatedAt: Date;
};
