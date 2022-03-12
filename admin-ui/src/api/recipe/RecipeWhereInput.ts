import { StringFilter } from "../../util/StringFilter";
import { ImageListRelationFilter } from "../image/ImageListRelationFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { RatingListRelationFilter } from "../rating/RatingListRelationFilter";

export type RecipeWhereInput = {
  category1?: "appetizer" | "soup" | "main" | "dessert";
  category2?: "salty" | "sweet";
  category3?: "vegan" | "nonvegan";
  description?: StringFilter;
  difficulty?: "easy" | "medium" | "hard";
  id?: StringFilter;
  images?: ImageListRelationFilter;
  ingredients?: StringFilter;
  likedBy?: UserListRelationFilter;
  postedBy?: UserWhereUniqueInput;
  ratings?: RatingListRelationFilter;
  title?: StringFilter;
};
