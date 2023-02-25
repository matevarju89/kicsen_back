-- AlterTable
ALTER TABLE "Recipe" ADD COLUMN     "forHowMany" INTEGER;

-- AlterTable
ALTER TABLE "SmartTag" ADD COLUMN     "familyId" TEXT;

-- AddForeignKey
ALTER TABLE "SmartTag" ADD CONSTRAINT "SmartTag_familyId_fkey" FOREIGN KEY ("familyId") REFERENCES "Family"("id") ON DELETE SET NULL ON UPDATE CASCADE;
