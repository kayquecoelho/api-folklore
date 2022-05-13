/*
  Warnings:

  - Changed the type of `startTime` on the `lyrics` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `endTime` on the `lyrics` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "lyrics" DROP COLUMN "startTime",
ADD COLUMN     "startTime" TIMESTAMP NOT NULL,
DROP COLUMN "endTime",
ADD COLUMN     "endTime" TIMESTAMP NOT NULL;

-- AlterTable
ALTER TABLE "songs" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
