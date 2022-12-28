import { StringFilter } from "../../util/StringFilter";
import { FamilyWhereUniqueInput } from "../family/FamilyWhereUniqueInput";
import { ImageListRelationFilter } from "../image/ImageListRelationFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { RatingListRelationFilter } from "../rating/RatingListRelationFilter";
import { SmartTagListRelationFilter } from "../smartTag/SmartTagListRelationFilter";

export type RecipeWhereInput = {
  category1?: "appetizer" | "soup" | "main" | "dessert";
  category2?: "salty" | "sweet";
  category3?: "vegan" | "nonvegan";
  description?: StringFilter;
  difficulty?: "easy" | "medium" | "hard";
  family?: FamilyWhereUniqueInput;
  id?: StringFilter;
  images?: ImageListRelationFilter;
  ingredients?: StringFilter;
  likedBy?: UserListRelationFilter;
  postedBy?: UserWhereUniqueInput;
  ratings?: RatingListRelationFilter;
  smartTags?: SmartTagListRelationFilter;
  title?: StringFilter;
};
