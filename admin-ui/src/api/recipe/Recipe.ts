import { Family } from "../family/Family";
import { Image } from "../image/Image";
import { User } from "../user/User";
import { Rating } from "../rating/Rating";
import { SmartTag } from "../smartTag/SmartTag";

export type Recipe = {
  category1?: "appetizer" | "soup" | "main" | "dessert";
  category2?: "salty" | "sweet";
  category3?: "vegan" | "nonvegan";
  category4?: Array<
    "chicken" | "seafood" | "beef" | "veal" | "lamb" | "vegetable" | "Fruit"
  >;
  createdAt: Date;
  description: string;
  difficulty?: "easy" | "medium" | "hard";
  family?: Family | null;
  id: string;
  images?: Array<Image>;
  ingredients: string;
  likedBy?: Array<User>;
  postedBy?: User | null;
  ratings?: Array<Rating>;
  smartTags?: Array<SmartTag>;
  title: string;
  updatedAt: Date;
};
