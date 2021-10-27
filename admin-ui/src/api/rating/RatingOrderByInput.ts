import { SortOrder } from "../../util/SortOrder";

export type RatingOrderByInput = {
  comment?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  postedById?: SortOrder;
  recipeId?: SortOrder;
  stars?: SortOrder;
  updatedAt?: SortOrder;
};
