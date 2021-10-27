import { registerEnumType } from "@nestjs/graphql";

export enum EnumRecipeCategory3 {
  Vegan = "vegan",
  NonVegan = "nonvegan",
}

registerEnumType(EnumRecipeCategory3, {
  name: "EnumRecipeCategory3",
});
