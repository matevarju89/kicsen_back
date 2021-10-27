import { registerEnumType } from "@nestjs/graphql";

export enum EnumRecipeDifficulty {
  Easy = "easy",
  Medium = "medium",
  Hard = "hard",
}

registerEnumType(EnumRecipeDifficulty, {
  name: "EnumRecipeDifficulty",
});
