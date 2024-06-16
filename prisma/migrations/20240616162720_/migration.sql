/*
  Warnings:

  - You are about to drop the column `storage_filled` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "storage_filled",
ADD COLUMN     "storage_used" INTEGER NOT NULL DEFAULT 0;
