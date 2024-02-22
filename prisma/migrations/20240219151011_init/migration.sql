/*
  Warnings:

  - You are about to drop the column `nom` on the `user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "user" DROP COLUMN "nom",
ADD COLUMN     "nam" TEXT;

-- CreateTable
CREATE TABLE "Post" (
    "content" TEXT,
    "post_id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "author_id" INTEGER,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("post_id")
);

-- CreateTable
CREATE TABLE "Profile" (
    "bio" TEXT,
    "profile_id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("profile_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Profile_user_id_key" ON "Profile"("user_id");
