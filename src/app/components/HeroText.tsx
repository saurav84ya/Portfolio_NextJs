'use client'

import { Variants ,motion } from 'framer-motion'
import React from 'react'
import FlipWords from './FlipWords'

export default function HeroText() {

    const words : string[] = [ 'Secure' , ' Mordern' , ' Scalable']

    const variants : Variants  = {
        hidden : { opacity : 0 , x : -50},
        visible : { opacity : 1 , x : 0}
    }

  return (
    <div className='z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text ' >
         
         {/* desktop view */}

         <div className='flex-col hidden md:flex c-space' >
 
            <motion.h1 
                className =' text-4xl font-medium '
                variants={variants}
                initial = 'hidden'
                animate = 'visible'
                transition={{delay : 1}}
            >
                Hi I&apos;m Saurav
            </motion.h1>

            <div>
                <motion.p
                    variants={variants}
                    initial = 'hidden'
                    animate = 'visible'
                    transition={{delay : 1.5}}
                    className='text-5xl font-medium text-neutral-300'
                >
                    A Developer <br /> Dedicated to Crafting
                </motion.p>

                {/* flipWord */}

                
                <motion.div
                    variants={ variants}
                    initial = 'hidden'
                    animate = 'visible'
                    transition={{delay : 1.5}}
                >
                    <FlipWords words={words} 
                     className='font-black text-white text-8xl' />
                </motion.div>
                
            </div>
            
         </div>
      
    </div>
  )
}
