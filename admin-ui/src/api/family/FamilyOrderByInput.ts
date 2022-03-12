import { SortOrder } from "../../util/SortOrder";

export type FamilyOrderByInput = {
  country?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
