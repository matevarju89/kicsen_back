import { Recipe } from "../recipe/Recipe";

export type Image = {
  createdAt: Date;
  height: number | null;
  id: string;
  recipe?: Recipe | null;
  updatedAt: Date;
  url: string | null;
  width: number | null;
};
