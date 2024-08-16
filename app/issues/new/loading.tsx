import { Box } from '@radix-ui/themes'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const LoadingNewIssuePage = () => {
  return (

    <Box className='max-w-xl'>
            loading...
        <Skeleton />
        <Skeleton height="20rem" />
        <Skeleton className='mt-5' height="2rem"/>
    </Box>
  )
}

export default LoadingNewIssuePage
