/*
  Warnings:

  - The primary key for the `Equipment` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `customer_id` on the `Equipment` table. All the data in the column will be lost.
  - You are about to drop the column `e_id` on the `Equipment` table. All the data in the column will be lost.
  - You are about to drop the column `serial_no` on the `Equipment` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[serial_no]` on the table `Customer` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `serial_no` to the `Customer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `serial_id` to the `Equipment` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN');

-- DropForeignKey
ALTER TABLE "Equipment" DROP CONSTRAINT "Equipment_customer_id_fkey";

-- AlterTable
ALTER TABLE "Customer" ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'USER',
ADD COLUMN     "serial_no" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Equipment" DROP CONSTRAINT "Equipment_pkey",
DROP COLUMN "customer_id",
DROP COLUMN "e_id",
DROP COLUMN "serial_no",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "serial_id" TEXT NOT NULL,
ADD CONSTRAINT "Equipment_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "Customer_serial_no_key" ON "Customer"("serial_no");

-- AddForeignKey
ALTER TABLE "Equipment" ADD CONSTRAINT "Equipment_serial_id_fkey" FOREIGN KEY ("serial_id") REFERENCES "Customer"("serial_no") ON DELETE RESTRICT ON UPDATE CASCADE;
