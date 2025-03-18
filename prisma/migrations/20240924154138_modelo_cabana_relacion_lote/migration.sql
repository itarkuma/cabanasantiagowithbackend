/*
  Warnings:

  - Added the required column `cabanaId` to the `Lote` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Lote" ADD COLUMN     "cabanaId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Cabana" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Cabana_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Cabana_name_key" ON "Cabana"("name");

-- AddForeignKey
ALTER TABLE "Lote" ADD CONSTRAINT "Lote_cabanaId_fkey" FOREIGN KEY ("cabanaId") REFERENCES "Cabana"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
