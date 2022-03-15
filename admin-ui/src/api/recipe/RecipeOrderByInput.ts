import { SortOrder } from "../../util/SortOrder";

export type RecipeOrderByInput = {
  category1?: SortOrder;
  category2?: SortOrder;
  category3?: SortOrder;
  category4?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  difficulty?: SortOrder;
  familyId?: SortOrder;
  id?: SortOrder;
  ingredients?: SortOrder;
  postedById?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
