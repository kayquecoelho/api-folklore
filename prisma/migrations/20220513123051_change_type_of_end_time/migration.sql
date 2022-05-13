/*
  Warnings:

  - The `endTime` column on the `lyrics` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `startTime` on the `lyrics` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "lyrics" DROP COLUMN "startTime",
ADD COLUMN     "startTime" INTEGER NOT NULL,
DROP COLUMN "endTime",
ADD COLUMN     "endTime" INTEGER;
