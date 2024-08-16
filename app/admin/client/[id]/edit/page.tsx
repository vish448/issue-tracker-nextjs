import React from 'react'
import ClientForm from '../../_components/ClientForm'
import prisma from '@/prisma/client'
import { notFound } from 'next/navigation'
import { Heading } from '@radix-ui/themes'

interface Props {
    params:{id:string}
}

const EditClientPage = async ({params}:Props) => {
   const customer = await prisma.customer.findUnique({
        where:{ id :parseInt(params.id)}
    })
    if(!customer) notFound()

    return (
        <div>
            <Heading as='h1'>Edit Client Information</Heading>
            <ClientForm customer={customer} />
        </div>
        
    )
}

export default EditClientPage
