-- AlterTable
ALTER TABLE "Family" ADD COLUMN     "country" TEXT;

-- AlterTable
ALTER TABLE "Recipe" ADD COLUMN     "familyId" TEXT;

-- AddForeignKey
ALTER TABLE "Recipe" ADD FOREIGN KEY ("familyId") REFERENCES "Family"("id") ON DELETE SET NULL ON UPDATE CASCADE;
