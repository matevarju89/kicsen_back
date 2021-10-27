import { FamilyWhereInput } from "./FamilyWhereInput";
import { FamilyOrderByInput } from "./FamilyOrderByInput";

export type FamilyFindManyArgs = {
  where?: FamilyWhereInput;
  orderBy?: FamilyOrderByInput;
  skip?: number;
  take?: number;
};
