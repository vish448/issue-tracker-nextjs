-- CreateTable
CREATE TABLE "Customer" (
    "c_id" SERIAL NOT NULL,
    "site" VARCHAR(255) NOT NULL,
    "dept" VARCHAR(255) NOT NULL,
    "street" VARCHAR(255) NOT NULL,
    "phone" INTEGER NOT NULL,
    "city" VARCHAR(255) NOT NULL,
    "state" VARCHAR(255) NOT NULL,
    "contact" VARCHAR(255) NOT NULL,

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("c_id")
);

-- CreateTable
CREATE TABLE "Equipment" (
    "e_id" SERIAL NOT NULL,
    "customer_id" INTEGER NOT NULL,
    "model" VARCHAR(255) NOT NULL,
    "serial_no" VARCHAR(255) NOT NULL,

    CONSTRAINT "Equipment_pkey" PRIMARY KEY ("e_id")
);

-- AddForeignKey
ALTER TABLE "Equipment" ADD CONSTRAINT "Equipment_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "Customer"("c_id") ON DELETE RESTRICT ON UPDATE CASCADE;
