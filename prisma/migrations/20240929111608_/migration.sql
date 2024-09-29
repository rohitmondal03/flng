/*
  Warnings:

  - You are about to alter the column `total_storage` on the `User` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `BigInt`.
  - You are about to alter the column `storage_used` on the `User` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `BigInt`.

*/
-- AlterTable
ALTER TABLE "User" ALTER COLUMN "total_storage" SET DEFAULT 1048576,
ALTER COLUMN "total_storage" SET DATA TYPE BIGINT,
ALTER COLUMN "storage_used" SET DEFAULT 0,
ALTER COLUMN "storage_used" SET DATA TYPE BIGINT;
