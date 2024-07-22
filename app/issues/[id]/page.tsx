import IssueStatusBadge from '@/app/components/IssueStatusBadge'
import prisma from '@/prisma/client'
import { Card, Flex, Heading, Text } from '@radix-ui/themes'
import { notFound } from 'next/navigation'
import React from 'react'

interface Props {
    params: { id: string}
}

const IssueDetailPage = async ({params}: Props) => {
    const issue = await prisma.issue.findUnique({
        where: {id: parseInt(params.id)}
    })

    if(!issue)
        notFound()

  return (
    <div>
      <Heading>{issue.title}</Heading>
      <Flex gap="5">
      <IssueStatusBadge status={issue.status} />
      <Text>{issue.createdAt.toDateString()}</Text>
      </Flex>
      <Card className='mt-5'>
        <p>{issue.description}</p>
      </Card>
    </div>
  )
}

export default IssueDetailPage
