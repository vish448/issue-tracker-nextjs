import { Skeleton } from '@/app/components'
import { Box, Card, Flex, Heading } from '@radix-ui/themes'

const LoadingIssueDetailsPage = () => {
  return (
    <Box className='max-w-xl'>
    <Heading><Skeleton /></Heading>
    <Flex gap="5" className='mt-5'>
    <Skeleton width="5rem"/>
    <Skeleton width="8rem"/>
    </Flex>
    <Card className='mt-5 prose'>
      <Skeleton count={3} />
    </Card>
    <Skeleton width="3rem"/>
  </Box>
  )
}

export default LoadingIssueDetailsPage
