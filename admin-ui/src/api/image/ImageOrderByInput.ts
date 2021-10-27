import { SortOrder } from "../../util/SortOrder";

export type ImageOrderByInput = {
  createdAt?: SortOrder;
  height?: SortOrder;
  id?: SortOrder;
  recipeId?: SortOrder;
  updatedAt?: SortOrder;
  url?: SortOrder;
  width?: SortOrder;
};
