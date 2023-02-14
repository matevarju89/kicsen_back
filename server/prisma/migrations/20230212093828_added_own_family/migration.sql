/*
  Warnings:

  - You are about to drop the `_FamilyToUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_FamilyToUser" DROP CONSTRAINT "_FamilyToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_FamilyToUser" DROP CONSTRAINT "_FamilyToUser_B_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "ownFamilyId" TEXT;

-- DropTable
DROP TABLE "_FamilyToUser";

-- CreateTable
CREATE TABLE "_families" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_families_AB_unique" ON "_families"("A", "B");

-- CreateIndex
CREATE INDEX "_families_B_index" ON "_families"("B");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_ownFamilyId_fkey" FOREIGN KEY ("ownFamilyId") REFERENCES "Family"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_families" ADD CONSTRAINT "_families_A_fkey" FOREIGN KEY ("A") REFERENCES "Family"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_families" ADD CONSTRAINT "_families_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
