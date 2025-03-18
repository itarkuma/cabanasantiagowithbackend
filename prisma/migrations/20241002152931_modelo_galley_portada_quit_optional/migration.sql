/*
  Warnings:

  - Made the column `portada` on table `Gallery` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Gallery" ALTER COLUMN "portada" SET NOT NULL;
