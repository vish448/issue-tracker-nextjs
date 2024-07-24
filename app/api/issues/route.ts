import { NextRequest, NextResponse } from "next/server";
import prisma from '@/prisma/client'
import {IssueSchema} from '@/app/validationSchema'

export async function POST(request:NextRequest){
    const body = await request.json()
    const validaltion = IssueSchema.safeParse(body)

    if(!validaltion.success)
        return NextResponse.json(validaltion.error.format(),{status:400})

    const newIssue = await prisma.issue.create({
        data: {
            title: body.title,
            description: body.description
        }
    })
    return NextResponse.json(newIssue,{status: 201})
}

export async function GET(){
    const findAllIssues = await prisma.issue.findMany()
    return NextResponse.json(findAllIssues,{status:200})

}