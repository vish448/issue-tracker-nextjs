import { ClientSchema } from "@/app/validationSchema"
import prisma from "@/prisma/client"
import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  const body = await request.json()
  const validation = ClientSchema.safeParse(body)

  if (!validation.success)
    return NextResponse.json(validation.error.format(), { status: 400 })

  const newClient = await prisma.customer.create({
    data: {
      site: body.site,
      dept: body.dept,
      street: body.street,
      phone: body.phone,
      city: body.city,
      state: body.state,
      serialNo: body.serialNo,
      contact: body.contact,
    }
  })
  return NextResponse.json(newClient, { status: 201 })
}

export async function GET() {
  const AllClients = await prisma.customer.findMany();
  if(AllClients.length == 0)
    return NextResponse.json('No Clients Found', {status: 200})
  return NextResponse.json(AllClients, { status: 200 });
}
