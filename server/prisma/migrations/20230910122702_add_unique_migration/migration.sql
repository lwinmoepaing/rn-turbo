/*
  Warnings:

  - A unique constraint covering the columns `[short_link]` on the table `LoveLetter` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "LoveLetter_short_link_key" ON "LoveLetter"("short_link");
