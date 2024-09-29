/*
  Warnings:

  - You are about to alter the column `total_storage` on the `User` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.
  - You are about to alter the column `storage_used` on the `User` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.

*/
-- AlterTable
ALTER TABLE "User" ALTER COLUMN "total_storage" SET DATA TYPE INTEGER,
ALTER COLUMN "storage_used" SET DATA TYPE INTEGER;
