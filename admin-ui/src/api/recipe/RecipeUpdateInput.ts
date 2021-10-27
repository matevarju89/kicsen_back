import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type RecipeUpdateInput = {
  category1?: "appetizer" | "soup" | "main" | "dessert";
  category2?: "salty" | "sweet";
  category3?: "vegan" | "nonvegan";
  category4?: Array<
    "chicken" | "seafood" | "beef" | "veal" | "lamb" | "vegetable" | "Fruit"
  >;
  description?: string;
  difficulty?: "easy" | "medium" | "hard";
  ingredients?: string;
  postedBy?: UserWhereUniqueInput | null;
  title?: string;
};
