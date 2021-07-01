import {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/Works.module.css';
import { motion } from "framer-motion";

const buttonVariants = {
  hover: {
    scale: 1.2,
    boxShadow: 'none'
  }
}

const stripesVariants = {
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

const webdev = () => {
  return ( 
    <div className={styles.parentContainer}>
      <h1 className={styles.header}>Web Dev Projects</h1>
      <div className={styles.container}>
        <motion.div variants={stripesVariants} initial='hidden' animate='visible' className={styles.stripes}>
          <h1>HackClub</h1>
          <p>NMIT</p>
          <motion.div variants={buttonVariants} whileHover='hover'>
            <Link href='https://lawlesx.github.io/'><a target="_blank" rel="noopener noreferrer">Demo Link</a></Link>
          </motion.div>
          <motion.div variants={buttonVariants} whileHover='hover'>
            <Link href='https://github.com/lawlesx/hackclubnmit-website'><a target="_blank" rel="noopener noreferrer">Source Code</a></Link>
          </motion.div>
        </motion.div>
        <motion.div variants={stripesVariants} initial='hidden' animate='visible' layout className={styles.stripes2}>
          <h1>You are Here</h1>
          <p>My Portfolio</p>
          <motion.div variants={buttonVariants} whileHover='hover'>
            <Link href='https://github.com/lawlesx/hackclubnmit-website'><a target="_blank" rel="noopener noreferrer">Source Code</a></Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
    
   );
}
 
export default webdev;