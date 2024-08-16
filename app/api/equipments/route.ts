import { EquipmentSchema } from "@/app/validationSchema";
import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request:NextRequest){
    const body = await request.json()
    const validation = EquipmentSchema.safeParse(body)

    if(!validation.success)
        return NextResponse.json(validation.error.format(),{status: 400})
    
    const newEquipment = await prisma.equipment.create({
        data:{
            model: body.model,
            serial: body.serialId
        }
    })
    return NextResponse.json(newEquipment,{status: 201})
}