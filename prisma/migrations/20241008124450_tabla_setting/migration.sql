-- CreateTable
CREATE TABLE "Setting" (
    "id" SERIAL NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "tiktok" TEXT NOT NULL,
    "instagram" TEXT NOT NULL,
    "title_about" TEXT NOT NULL,
    "texto_about" TEXT NOT NULL,
    "imagen_about" TEXT NOT NULL,

    CONSTRAINT "Setting_pkey" PRIMARY KEY ("id")
);
