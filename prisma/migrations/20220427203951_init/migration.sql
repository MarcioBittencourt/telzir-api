-- CreateEnum
CREATE TYPE "Plan" AS ENUM ('FALEMAIS30', 'FALEMAIS60', 'FALEMAIS120');

-- CreateTable
CREATE TABLE "CallBudget" (
    "id" SERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "source" TEXT NOT NULL,
    "target" TEXT NOT NULL,
    "duration" INTEGER NOT NULL,
    "amount" DECIMAL(8,2) NOT NULL,
    "amountNoPlan" DECIMAL(8,2) NOT NULL,
    "plan" "Plan" NOT NULL,

    CONSTRAINT "CallBudget_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CallBudget_uuid_key" ON "CallBudget"("uuid");
