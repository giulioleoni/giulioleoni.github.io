"use client"
import { motion } from 'framer-motion'
import { Home } from 'lucide-react'
import Link from 'next/link'
import React, { Suspense } from 'react'

const MotionLink = motion(Link)

const NavButton = ({ x, y, label, link, icon, newTab }) => {

    return (
        <MotionLink 
            initial={{scale: 0}}
            animate={{scale: 1}}
            transition={{delay: 1}}
            href={"/"}
            target={'_self'}
            className='text-foreground rounded-full flex items-center justify-center custom-bg 
            fixed top-4 left-4 w-fit self-start z-50'
            aria-label={"home"}
            name={"home"} >
            <span className='relative w-16 h-16 p-4 hover:text-accent'>

                <span className='peer bg-transparent absolute top-0 left-0 w-full h-full' />
                <Home className='w-full h-auto' strokeWidth={1.5} />
                <span className='absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 
                bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap'>
                    Home
                </span>
            </span>
        </MotionLink>

    )
}

export default NavButton




































































