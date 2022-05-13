/*
  Warnings:

  - A unique constraint covering the columns `[youtubeLink]` on the table `songs` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `part` to the `lyrics` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "lyrics" ADD COLUMN     "part" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "songs_youtubeLink_key" ON "songs"("youtubeLink");
