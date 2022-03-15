import { FamilyWhereUniqueInput } from "../family/FamilyWhereUniqueInput";
import { ImageUpdateManyWithoutRecipesInput } from "./ImageUpdateManyWithoutRecipesInput";
import { UserUpdateManyWithoutRecipesInput } from "./UserUpdateManyWithoutRecipesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { RatingUpdateManyWithoutRecipesInput } from "./RatingUpdateManyWithoutRecipesInput";

export type RecipeUpdateInput = {
  category1?: "appetizer" | "soup" | "main" | "dessert";
  category2?: "salty" | "sweet";
  category3?: "vegan" | "nonvegan";
  category4?: Array<
    "chicken" | "seafood" | "beef" | "veal" | "lamb" | "vegetable" | "Fruit"
  >;
  description?: string;
  difficulty?: "easy" | "medium" | "hard";
  family?: FamilyWhereUniqueInput | null;
  images?: ImageUpdateManyWithoutRecipesInput;
  ingredients?: string;
  likedBy?: UserUpdateManyWithoutRecipesInput;
  postedBy?: UserWhereUniqueInput | null;
  ratings?: RatingUpdateManyWithoutRecipesInput;
  title?: string;
};
