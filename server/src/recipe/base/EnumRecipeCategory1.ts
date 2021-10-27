import { registerEnumType } from "@nestjs/graphql";

export enum EnumRecipeCategory1 {
  Appetizer = "appetizer",
  Soup = "soup",
  Main = "main",
  Dessert = "dessert",
}

registerEnumType(EnumRecipeCategory1, {
  name: "EnumRecipeCategory1",
});
