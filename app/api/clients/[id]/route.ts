import { ClientSchema } from "@/app/validationSchema";
import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = await request.json();
  const validaltion = ClientSchema.safeParse(body);

  if (!validaltion.success)
    return NextResponse.json(validaltion.error.format(), { status: 400 });
  const customer = await prisma.customer.findUnique({
    where: { id: parseInt(params.id) },
  });
  if (!customer)
    return NextResponse.json({ error: "Invalid Customer" }, { status: 404 });
  const updatedCustomer = await prisma.customer.update({
    where: { id: parseInt(params.id) },
    data: {
      site: body.site,
      dept: body.dept,
      street: body.street,
      phone: body.phone,
      city: body.city,
      state: body.state,
      serialNo: body.serialNo,
      contact: body.contact,
    },
  });
  return NextResponse.json(updatedCustomer);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const customer = await prisma.customer.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });
  if (!customer)
    return NextResponse.json({ error: "Invalid Client" }, { status: 404 });

  await prisma.customer.delete({
    where: { id: parseInt(params.id) },
  });
  return NextResponse.json("");
}
