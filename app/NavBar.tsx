'use client'

import Link from 'next/link'
import React from 'react'
import { FaHeartPulse } from "react-icons/fa6";
import classnames from 'classnames';
import {usePathname} from 'next/navigation'


const NavBar = () => {
    const currentPath = usePathname();
    const links = [
        {label : '', href: '/'},
        {label : 'Dashboard', href:'/dashboard'},
        {label: 'Issues', href:'/issues'}
    ]
    
  return (
    <nav className='flex space-x-6  border-b mb-5 px-5 h-14 items-center'>
      <Link href="/"> <FaHeartPulse className='text-lg' /></Link>
      <ul className='flex space-x-6'>
        {links.map(link => 
                <Link 
                    className={classnames({
                        'text-zinc-900': link.href === currentPath,
                        'text-zinc-500': link.href !== currentPath,
                        'hover:text-zinc-800 transition-colors': true
                    })}
                    href={link.href} 
                    key={link.label}>
                        {link.label}
                </Link>
            )
        }
        
    </ul>
    </nav>
  )
}

export default NavBar