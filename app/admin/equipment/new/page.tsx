import Link from 'next/link'
import React from 'react'
import EquipmentForm from './_components/EquipmentForm'
import { Heading } from '@radix-ui/themes'

const Equipments = () => {
  return (
    <div>
      <Heading as = "h1" className='mb-5'>Add New Equipment </Heading>
      <EquipmentForm />
    </div>
  )
}

export default Equipments
