/*
  Warnings:

  - Added the required column `db_file_id` to the `File` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "File" ADD COLUMN     "db_file_id" TEXT NOT NULL;
