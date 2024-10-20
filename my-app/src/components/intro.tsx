"use client"


import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithubSquare } from 'react-icons/fa'
import { Mail } from 'lucide-react'

//Animations
import { Fade } from 'react-awesome-reveal'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/useInView'
import { useActiveSectionContext } from '@/containers/active-section';


export default function Intro() {

  const { ref } = useSectionInView("#home", 0.5)
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  
  return (
    <section
    ref={ref}
    id="home" 
    className='mb-28 max-w-[75rem] text-center sm:mb-0' 
    >
      <div className='flex items-center justify-center'>
        <div className='relative'>
          <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            damping: 10,
            stiffness: 125,
            duration:0.2,
          }}
          >
            <Image 
            src="/boy2.png"
            width="460"
            height="460"
            alt="portrait" 
            quality="100"
            priority={true}
            className='rounded-full shadow-xl object-cover'
            />
          </motion.div>

          <motion.span 
          className='text-6xl absolute bottom-8 right-12'
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            damping: 10,
            stiffness: 125,
            duration:0.2,
          }}
          >
            👋🏽
          </motion.span>
        </div>
      </div>

      <Fade direction='up' delay={400} cascade damping={1e-1} triggerOnce={true}>
        <h1 className='mb-10 mt-4 text-2xl sm:text-4xl'>
          <span className='front-medium !leading-[1.5]'>Grow your business with a new website.</span>{""}
          <p className="text-[14px]">
          Morningstar is a full-service creative studio creating beautiful digital experiences and products
          </p>
        </h1>
      </Fade>

      
      <motion.div
      className='flex sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.1,
      }}
      >
        <Link href="#"
        className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 dark:bg-white/10 active:scale-105 transition">
          Connect <Mail color={"#9ca3af"} />
        </Link>

        <a 
        className="bg-gray-900 p-4 text-white flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
        href="#"
        target="_blank"
        >
          <BsLinkedin />
        </a>

        <a 
        className="bg-gray-900 p-4 text-white flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
        href="">
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  )
}
