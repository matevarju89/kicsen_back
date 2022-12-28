import { SmartTagWhereInput } from "./SmartTagWhereInput";
import { SmartTagOrderByInput } from "./SmartTagOrderByInput";

export type SmartTagFindManyArgs = {
  where?: SmartTagWhereInput;
  orderBy?: Array<SmartTagOrderByInput>;
  skip?: number;
  take?: number;
};
