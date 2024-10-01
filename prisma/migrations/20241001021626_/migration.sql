-- CreateEnum
CREATE TYPE "FileType" AS ENUM ('Unknown', 'Document', 'Image');

-- AlterTable
ALTER TABLE "File" ADD COLUMN     "file_type" "FileType" NOT NULL DEFAULT 'Unknown';
