/*
  Warnings:

  - You are about to drop the column `sizes` on the `Lote` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Lote" DROP COLUMN "sizes",
ADD COLUMN     "state" "Size" NOT NULL DEFAULT 'si';
