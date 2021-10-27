import { Image } from "../image/Image";
import { User } from "../user/User";
import { Rating } from "../rating/Rating";

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
  id: string;
  images?: Array<Image>;
  ingredients: string;
  likedBy?: Array<User>;
  postedBy?: User | null;
  ratings?: Array<Rating>;
  title: string;
  updatedAt: Date;
};
