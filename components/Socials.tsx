'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'

const socials = [
  {
    href: 'https://github.com/lawlesx',
    icon: (
      <svg
        fill="#f6f6f6"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 30 30"
        width="40px"
        height="40px"
      >
        <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z" />
      </svg>
    ),
  },
  {
    href: 'https://twitter.com/welcometohellv',
    icon: (
      <svg
        fill="#f6f6f6"
        xmlns="http://www.w3.org/2000/svg"
        width="40px"
        height="40px"
        viewBox="0 0 24 24"
      >
        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
      </svg>
    ),
  },
  {
    href: 'https://www.linkedin.com/in/lawlesx/',
    icon: (
      <svg
        fill="#f6f6f6"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="40px"
        height="40px"
      >
        <path d="M21,3H3v18h18V3z M9,17H6.477v-7H9V17z M7.694,8.717c-0.771,0-1.286-0.514-1.286-1.2s0.514-1.2,1.371-1.2 c0.771,0,1.286,0.514,1.286,1.2S8.551,8.717,7.694,8.717z M18,17h-2.442v-3.826c0-1.058-0.651-1.302-0.895-1.302 s-1.058,0.163-1.058,1.302c0,0.163,0,3.826,0,3.826h-2.523v-7h2.523v0.977C13.93,10.407,14.581,10,15.802,10 C17.023,10,18,10.977,18,13.174V17z" />
      </svg>
    ),
  },
]

const socialVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 3,
      duration: 2
    }
  },
  hover: {
    scale: 1.3
  }
}

const Socials = () => {
  return (
    <motion.div variants={socialVariants} initial='hidden' animate='visible' className="flex flex-col justify-between items-center pb-28 lg:py-20 lg:h-screen">
      <div className="flex lg:flex-col gap-8 pt-10">
        {socials.map((social, i) => (
          <Link href={social.href} key={i} target="_blank" rel="noopener noreferrer">
            <motion.div whileHover={{ scale: 1.4 }}>{social.icon}</motion.div>
          </Link>
        ))}
      </div>
      <p className='text-highlight text-[1rem] hidden lg:block' style={{ writingMode: 'vertical-lr' }}>Relish the Cosmic Uncertainty</p>
    </motion.div>
  )
}

export default Socials
