/*
  Warnings:

  - You are about to drop the column `password` on the `File` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "File" DROP COLUMN "password",
ADD COLUMN     "shared_with" TEXT[] DEFAULT ARRAY[]::TEXT[];
