import { registerEnumType } from "@nestjs/graphql";

export enum EnumRecipeCategory2 {
  Salty = "salty",
  Sweet = "sweet",
}

registerEnumType(EnumRecipeCategory2, {
  name: "EnumRecipeCategory2",
});
