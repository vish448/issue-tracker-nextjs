/*
  Warnings:

  - The primary key for the `Customer` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Customer` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Equipment` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Equipment` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `serialId` on the `Equipment` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Equipment" DROP CONSTRAINT "Equipment_serialId_fkey";

-- AlterTable
ALTER TABLE "Customer" DROP CONSTRAINT "Customer_pkey",
ALTER COLUMN "site" SET DATA TYPE TEXT,
ALTER COLUMN "dept" SET DATA TYPE TEXT,
ALTER COLUMN "street" SET DATA TYPE TEXT,
ALTER COLUMN "phone" SET DATA TYPE TEXT,
ALTER COLUMN "city" SET DATA TYPE TEXT,
ALTER COLUMN "state" SET DATA TYPE TEXT,
ALTER COLUMN "contact" SET DATA TYPE TEXT,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ALTER COLUMN "serialNo" SET DATA TYPE TEXT,
ADD CONSTRAINT "Customer_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Equipment" DROP CONSTRAINT "Equipment_pkey",
ALTER COLUMN "model" SET DATA TYPE TEXT,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "serialId",
ADD COLUMN     "serialId" INTEGER NOT NULL,
ADD CONSTRAINT "Equipment_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "Equipment" ADD CONSTRAINT "Equipment_serialId_fkey" FOREIGN KEY ("serialId") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
