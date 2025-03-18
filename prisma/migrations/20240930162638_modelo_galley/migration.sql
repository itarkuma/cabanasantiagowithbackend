-- CreateEnum
CREATE TYPE "Typo" AS ENUM ('servicios', 'proyectos');

-- CreateTable
CREATE TABLE "Gallery" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "subtitle" TEXT NOT NULL,
    "portada" TEXT NOT NULL,
    "type" "Typo" NOT NULL DEFAULT 'servicios',

    CONSTRAINT "Gallery_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Gallery_title_key" ON "Gallery"("title");
