'use client'

import { CircleX, Menu } from 'lucide-react'
import Link from 'next/link'
import React, { JSX, useState } from 'react'
import { motion } from "framer-motion";





function Navigation() : JSX.Element {
  return (
    <ul className='nav-ul' >
      <li className=' nav-li '>
        <a className='nav-link' href="">Home</a>
      </li>
      <li className=' nav-li '>
        <a className='nav-link' href="">About</a>
      </li><li className=' nav-li '>
        <a className='nav-link' href="">Work</a>
      </li><li className=' nav-li '>
        <a className='nav-link' href="">Contact</a>
      </li>
    </ul>
  )
}

export default function Navbar() {

  const [isOpen , setIsOpen] = useState<boolean>(false)
  return (
    <div className='fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40'>
      
      {/* for big screen */}

      <div className=' mx-auto c-space max-w-7xl' >
        <div className='flex items-center justify-between py-2 sm:py-0' >

            <Link className='text-xl font-bold transition-colors text-neutral-400 hover:text-white'  href="/">
            <div className='flex gap-1 transition-colors duration-400 ' >Saurav <span className='hidden md:flex ' >      Chaurasia</span></div>
            </Link>

             <button className='cursor-pointer flex text-neutral-400 hover:text-white focus:outline-none sm:hidden ' onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <CircleX /> : <Menu />}
          </button>

          <nav className=' hidden sm:flex ' >
              <Navigation/>
          </nav>
        </div>


        {/* for small devices */}
          
        {
          isOpen && (
            <motion.div className=' overflow-hidden text-center  sm:hidd '
              initial = {{ opacity : 0 , x : -10 }}
              animate = {{ opacity : 1 , x : 0 }}
              style={ { maxWidth : '100vh'}}
              transition={{duration : 1/2}}
            >
              <nav className=' pb-5 ' >
                <Navigation/>
              </nav>
            </motion.div>
          )
        }


      </div>
    </div>
  )
}
