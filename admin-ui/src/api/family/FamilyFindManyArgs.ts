import { FamilyWhereInput } from "./FamilyWhereInput";
import { FamilyOrderByInput } from "./FamilyOrderByInput";

export type FamilyFindManyArgs = {
  where?: FamilyWhereInput;
  orderBy?: Array<FamilyOrderByInput>;
  skip?: number;
  take?: number;
};
