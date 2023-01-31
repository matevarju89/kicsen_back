/*
  Warnings:

  - Changed the type of `roles` on the `User` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "EnumSmartTagLang" AS ENUM ('En', 'Hu');

-- DropForeignKey
ALTER TABLE "Rating" DROP CONSTRAINT "Rating_postedById_fkey";

-- DropForeignKey
ALTER TABLE "Rating" DROP CONSTRAINT "Rating_recipeId_fkey";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "roles",
ADD COLUMN     "roles" JSONB NOT NULL;

-- CreateTable
CREATE TABLE "SmartTag" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id" TEXT NOT NULL,
    "lang" "EnumSmartTagLang",
    "name" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SmartTag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_RecipeToSmartTag" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_RecipeToSmartTag_AB_unique" ON "_RecipeToSmartTag"("A", "B");

-- CreateIndex
CREATE INDEX "_RecipeToSmartTag_B_index" ON "_RecipeToSmartTag"("B");

-- AddForeignKey
ALTER TABLE "Rating" ADD CONSTRAINT "Rating_postedById_fkey" FOREIGN KEY ("postedById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rating" ADD CONSTRAINT "Rating_recipeId_fkey" FOREIGN KEY ("recipeId") REFERENCES "Recipe"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RecipeToSmartTag" ADD CONSTRAINT "_RecipeToSmartTag_A_fkey" FOREIGN KEY ("A") REFERENCES "Recipe"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RecipeToSmartTag" ADD CONSTRAINT "_RecipeToSmartTag_B_fkey" FOREIGN KEY ("B") REFERENCES "SmartTag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- RenameIndex
ALTER INDEX "User.username_unique" RENAME TO "User_username_key";
