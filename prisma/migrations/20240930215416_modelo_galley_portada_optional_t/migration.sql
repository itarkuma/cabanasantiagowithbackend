/*
  Warnings:

  - You are about to drop the column `type` on the `Gallery` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Gallery" DROP COLUMN "type",
ADD COLUMN     "typo" "Typo" NOT NULL DEFAULT 'servicios';
