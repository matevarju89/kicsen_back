import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type RecipeWhereInput = {
  category1?: "appetizer" | "soup" | "main" | "dessert";
  category2?: "salty" | "sweet";
  category3?: "vegan" | "nonvegan";
  description?: StringFilter;
  difficulty?: "easy" | "medium" | "hard";
  id?: StringFilter;
  ingredients?: StringFilter;
  postedBy?: UserWhereUniqueInput;
  title?: StringFilter;
};
