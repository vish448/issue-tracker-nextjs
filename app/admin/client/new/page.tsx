import { Heading } from '@radix-ui/themes'
import React from 'react'
import ClientForm from '../_components/ClientForm'

const AddClientPage = () => {
  return (
    <div>
      <Heading as="h1" className='mb-5'>
        Add a New Client
      </Heading>
      <ClientForm />
    </div>
  )
}

export default AddClientPage
