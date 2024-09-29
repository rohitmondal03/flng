-- AlterTable
ALTER TABLE "User" ADD COLUMN     "files_uploaded" INTEGER NOT NULL DEFAULT 0,
ALTER COLUMN "total_storage" SET DEFAULT 256;
