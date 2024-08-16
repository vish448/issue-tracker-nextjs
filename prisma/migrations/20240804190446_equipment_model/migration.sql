/*
  Warnings:

  - The primary key for the `Customer` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `c_id` on the `Customer` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `Customer` table. All the data in the column will be lost.
  - You are about to drop the column `serial_no` on the `Customer` table. All the data in the column will be lost.
  - The primary key for the `Equipment` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `serial_id` on the `Equipment` table. All the data in the column will be lost.
  - The required column `id` was added to the `Customer` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `serialNo` to the `Customer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Customer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `serialId` to the `Equipment` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Equipment" DROP CONSTRAINT "Equipment_serial_id_fkey";

-- DropIndex
DROP INDEX "Customer_serial_no_key";

-- AlterTable
ALTER TABLE "Customer" DROP CONSTRAINT "Customer_pkey",
DROP COLUMN "c_id",
DROP COLUMN "role",
DROP COLUMN "serial_no",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "id" TEXT NOT NULL,
ADD COLUMN     "serialNo" VARCHAR(255) NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD CONSTRAINT "Customer_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Equipment" DROP CONSTRAINT "Equipment_pkey",
DROP COLUMN "serial_id",
ADD COLUMN     "serialId" TEXT NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Equipment_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Equipment_id_seq";

-- DropEnum
DROP TYPE "Role";

-- AddForeignKey
ALTER TABLE "Equipment" ADD CONSTRAINT "Equipment_serialId_fkey" FOREIGN KEY ("serialId") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
