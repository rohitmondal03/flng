/*
  Warnings:

  - Added the required column `size` to the `File` table without a default value. This is not possible if the table is not empty.
  - Added the required column `files_received` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `files_shared` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `onboarded_at` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `storage_filled` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `total_storage` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "File" ADD COLUMN     "size" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "files_received" INTEGER NOT NULL,
ADD COLUMN     "files_shared" INTEGER NOT NULL,
ADD COLUMN     "onboarded_at" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "storage_filled" INTEGER NOT NULL,
ADD COLUMN     "total_storage" INTEGER NOT NULL;
