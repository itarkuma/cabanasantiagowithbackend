/*
  Warnings:

  - You are about to drop the column `cabanaId` on the `Lote` table. All the data in the column will be lost.
  - The `state` column on the `Lote` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the `Cabana` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Gallery` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Setting` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Lote" DROP CONSTRAINT "Lote_cabanaId_fkey";

-- AlterTable
ALTER TABLE "Lote" DROP COLUMN "cabanaId",
DROP COLUMN "state",
ADD COLUMN     "state" BOOLEAN NOT NULL DEFAULT true,
ALTER COLUMN "order" SET DEFAULT 0,
ALTER COLUMN "order" DROP DEFAULT;
DROP SEQUENCE "Lote_order_seq";

-- DropTable
DROP TABLE "Cabana";

-- DropTable
DROP TABLE "Gallery";

-- DropTable
DROP TABLE "Setting";

-- DropEnum
DROP TYPE "Size";

-- DropEnum
DROP TYPE "Typo";
