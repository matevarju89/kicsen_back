import { registerEnumType } from "@nestjs/graphql";

export enum EnumRecipeCategory4 {
  Chicken = "chicken",
  Seafood = "seafood",
  Beef = "beef",
  Veal = "veal",
  Lamb = "lamb",
  Vegetable = "vegetable",
  Fruit = "Fruit",
}

registerEnumType(EnumRecipeCategory4, {
  name: "EnumRecipeCategory4",
});
