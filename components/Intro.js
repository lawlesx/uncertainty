import Image from "next/image";
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { motion } from "framer-motion";

const introVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition : {
      staggerChildren: 1,
      duration: 2
    }
  }
}

const helloVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition : {
      duration: 3
    }
  }
}
const buttonVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition : {
      delay: 3,
      duration: 3
    }
  }
}
const svgVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { 
      delay: 3,
      duration: 2}
  },
  hover : { 
    scale: 1.3
  }
}
const btnh1Variant = {
  hover: { 
    x: '105%',
  }
}



const Intro = () => {
  return ( 
    <>
      <motion.div variants={buttonVariants} initial='hidden' animate='visible' className={styles.button}>
        <div className={styles.btntopleft}></div>
        <div className={styles.btnleft}></div>
        <Link href='mailto:aniruddhasil109@gmail.com' passHref>
        <motion.h1 variants={btnh1Variant} whileHover='hover' className={styles.buttonContent}>GET IN TOUCH</motion.h1>
        </Link>
        <div className={styles.btnbotright}></div>
        <div className={styles.btnbot}></div>
      </motion.div>
      <motion.div variants={introVariants} initial='hidden' animate='visible'
        className="intro">
        <div className={styles.introContainer}>
          <motion.h3 variants={helloVariants}
           className={styles.hello}>Hello</motion.h3>
          <motion.h1 variants={helloVariants}>I am Aniruddha Sil</motion.h1>
          <motion.p variants={helloVariants}>And this my Portfolio Website</motion.p>
        </div>
        <motion.div variants={helloVariants}
          className={styles.block}>
          <Image src='/Profile.png' alt="Picture of the author"
            width={414}
            height={500}
          />
        </motion.div>       
      </motion.div>
      <div className={styles.relishContacts}>
        <div className={styles.socials}>
          <Link href='https://github.com/lawlesx'><a target="_blank" rel="noopener noreferrer"><motion.svg variants={svgVariants} initial='hidden' animate='visible' whileHover='hover' fill="#f6f6f6" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="40px" height="40px">    <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"/></motion.svg></a></Link>
          <Link href='https://www.instagram.com/dramatic_murderer/'><a target="_blank" rel="noopener noreferrer"><motion.svg variants={svgVariants} initial='hidden' animate='visible' whileHover='hover' fill="#f6f6f6" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="40px" height="40px"><path d="M 16.5 5 C 10.16639 5 5 10.16639 5 16.5 L 5 31.5 C 5 37.832757 10.166209 43 16.5 43 L 31.5 43 C 37.832938 43 43 37.832938 43 31.5 L 43 16.5 C 43 10.166209 37.832757 5 31.5 5 L 16.5 5 z M 16.5 8 L 31.5 8 C 36.211243 8 40 11.787791 40 16.5 L 40 31.5 C 40 36.211062 36.211062 40 31.5 40 L 16.5 40 C 11.787791 40 8 36.211243 8 31.5 L 8 16.5 C 8 11.78761 11.78761 8 16.5 8 z M 34 12 C 32.895 12 32 12.895 32 14 C 32 15.105 32.895 16 34 16 C 35.105 16 36 15.105 36 14 C 36 12.895 35.105 12 34 12 z M 24 14 C 18.495178 14 14 18.495178 14 24 C 14 29.504822 18.495178 34 24 34 C 29.504822 34 34 29.504822 34 24 C 34 18.495178 29.504822 14 24 14 z M 24 17 C 27.883178 17 31 20.116822 31 24 C 31 27.883178 27.883178 31 24 31 C 20.116822 31 17 27.883178 17 24 C 17 20.116822 20.116822 17 24 17 z"/></motion.svg></a></Link>
          <Link href="https://www.linkedin.com/in/aniruddha-sil-251555196/"><a target="_blank" rel="noopener noreferrer"><motion.svg variants={svgVariants} initial='hidden' animate='visible' whileHover='hover' fill="#f6f6f6" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="40px" height="40px">    <path d="M21,3H3v18h18V3z M9,17H6.477v-7H9V17z M7.694,8.717c-0.771,0-1.286-0.514-1.286-1.2s0.514-1.2,1.371-1.2 c0.771,0,1.286,0.514,1.286,1.2S8.551,8.717,7.694,8.717z M18,17h-2.442v-3.826c0-1.058-0.651-1.302-0.895-1.302 s-1.058,0.163-1.058,1.302c0,0.163,0,3.826,0,3.826h-2.523v-7h2.523v0.977C13.93,10.407,14.581,10,15.802,10 C17.023,10,18,10.977,18,13.174V17z"/></motion.svg></a></Link>
        </div>
        
        <motion.p variants={svgVariants} initial='hidden' animate='visible' className={styles.relish}>Relish the Cosmic Uncertainty</motion.p>
      </div>
    </>
    
   );
}
 
export default Intro;