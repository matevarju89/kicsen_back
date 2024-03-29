import { FamilyWhereUniqueInput } from "../family/FamilyWhereUniqueInput";
import { ImageCreateNestedManyWithoutRecipesInput } from "./ImageCreateNestedManyWithoutRecipesInput";
import { UserCreateNestedManyWithoutRecipesInput } from "./UserCreateNestedManyWithoutRecipesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { RatingCreateNestedManyWithoutRecipesInput } from "./RatingCreateNestedManyWithoutRecipesInput";
import { SmartTagCreateNestedManyWithoutRecipesInput } from "./SmartTagCreateNestedManyWithoutRecipesInput";

export type RecipeCreateInput = {
  category1: "appetizer" | "soup" | "main" | "dessert";
  category2: "salty" | "sweet";
  category3: "vegan" | "nonvegan";
  category4?: Array<
    "chicken" | "seafood" | "beef" | "veal" | "lamb" | "vegetable" | "Fruit"
  >;
  description: string;
  difficulty: "easy" | "medium" | "hard";
  family?: FamilyWhereUniqueInput | null;
  forHowMany?: number | null;
  images?: ImageCreateNestedManyWithoutRecipesInput;
  ingredients: string;
  likedBy?: UserCreateNestedManyWithoutRecipesInput;
  postedBy?: UserWhereUniqueInput | null;
  ratings?: RatingCreateNestedManyWithoutRecipesInput;
  smartTags?: SmartTagCreateNestedManyWithoutRecipesInput;
  title: string;
};
