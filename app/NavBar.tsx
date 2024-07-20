import Link from 'next/link'
import React from 'react'
import { FaHeartPulse } from "react-icons/fa6";


const NavBar = () => {
    const links = [
        {label : '', href: '/'},
        {label : 'Dashboard', href:'/dashboard'},
        {label: 'Issues', href:'/issues'}
    ]
  return (
    <nav className='flex space-x-6  border-b mb-5 px-5 h-14 items-center'>
      <Link href="/"> <FaHeartPulse className='text-lg' /></Link>
      <ul className='flex space-x-6'>
        {links.map(link => <Link className='text-zinc-500 hover:text-zinc-800 transition-colors' href={link.href} key={link.label}>{link.label}</Link>)}
        
    </ul>
    </nav>
  )
}

export default NavBar

