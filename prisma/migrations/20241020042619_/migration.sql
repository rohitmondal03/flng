/*
  Warnings:

  - You are about to drop the column `db_file_id` on the `File` table. All the data in the column will be lost.
  - Added the required column `storage_file_id` to the `File` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "File" DROP COLUMN "db_file_id",
ADD COLUMN     "storage_file_id" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "UsersProfilePictures" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "storage_file_id" TEXT NOT NULL,
    "uploaded_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UsersProfilePictures_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UsersProfilePictures_id_key" ON "UsersProfilePictures"("id");

-- CreateIndex
CREATE INDEX "UsersProfilePictures_user_id_idx" ON "UsersProfilePictures"("user_id");
