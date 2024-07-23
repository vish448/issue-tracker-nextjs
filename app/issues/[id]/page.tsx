import IssueStatusBadge from '@/app/components/IssueStatusBadge'
import prisma from '@/prisma/client'
import { Box, Button, Card, Flex, Grid, Heading, Text } from '@radix-ui/themes'
import { notFound } from 'next/navigation'
import ReactMarkdown from 'react-markdown'
import Link  from 'next/link'
import delay from 'delay'
import { Pencil2Icon } from '@radix-ui/react-icons'

interface Props {
    params: { id: string}
}

const IssueDetailPage = async ({params}: Props) => {
    const issue = await prisma.issue.findUnique({
        where: {id: parseInt(params.id)}
    })

    if(!issue)
        notFound()

    delay(2000)

  return (
    <Grid columns={{initial:"1",md:"2"}} gap="5">
      <Box>
      <Heading>{issue.title}</Heading>
      <Flex gap="5" className='mt-5'>
      <IssueStatusBadge status={issue.status} />
      <Text>{issue.createdAt.toDateString()}</Text>
      </Flex>
      <Card className='mt-5 prose'>
        <ReactMarkdown>{issue.description}</ReactMarkdown>
      </Card>
      </Box>
      <Box>
        <Button>
          <Pencil2Icon />
          <Link href={`/issues/${issue.id}/edit`}>
            Edit Issue
          </Link>
            </Button>
      </Box>
    </Grid>
  )
}

export default IssueDetailPage
