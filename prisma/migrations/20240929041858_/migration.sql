-- AlterTable
ALTER TABLE "User" ALTER COLUMN "total_storage" SET DEFAULT 256,
ALTER COLUMN "total_storage" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "storage_used" SET DEFAULT 0,
ALTER COLUMN "storage_used" SET DATA TYPE DOUBLE PRECISION;
