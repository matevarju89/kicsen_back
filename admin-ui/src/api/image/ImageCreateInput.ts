import { RecipeWhereUniqueInput } from "../recipe/RecipeWhereUniqueInput";

export type ImageCreateInput = {
  height?: number | null;
  recipe?: RecipeWhereUniqueInput | null;
  url?: string | null;
  width?: number | null;
};
