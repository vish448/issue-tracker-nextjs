import { Box, Heading, Flex, Card } from '@radix-ui/themes'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

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
  </Box>
  )
}

export default LoadingIssueDetailsPage
