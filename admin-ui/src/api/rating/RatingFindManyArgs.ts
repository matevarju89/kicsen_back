import { RatingWhereInput } from "./RatingWhereInput";
import { RatingOrderByInput } from "./RatingOrderByInput";

export type RatingFindManyArgs = {
  where?: RatingWhereInput;
  orderBy?: RatingOrderByInput;
  skip?: number;
  take?: number;
};
