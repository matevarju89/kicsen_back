import { FamilyWhereUniqueInput } from "../family/FamilyWhereUniqueInput";
import { ImageUpdateManyWithoutRecipesInput } from "./ImageUpdateManyWithoutRecipesInput";
import { UserUpdateManyWithoutRecipesInput } from "./UserUpdateManyWithoutRecipesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { RatingUpdateManyWithoutRecipesInput } from "./RatingUpdateManyWithoutRecipesInput";
import { SmartTagUpdateManyWithoutRecipesInput } from "./SmartTagUpdateManyWithoutRecipesInput";

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
  forHowMany?: number | null;
  images?: ImageUpdateManyWithoutRecipesInput;
  ingredients?: string;
  likedBy?: UserUpdateManyWithoutRecipesInput;
  postedBy?: UserWhereUniqueInput | null;
  ratings?: RatingUpdateManyWithoutRecipesInput;
  smartTags?: SmartTagUpdateManyWithoutRecipesInput;
  title?: string;
};
