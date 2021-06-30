import { useRef, useEffect } from 'react'
import Image from 'next/image'
import styles from '../styles/Projects.module.css'
import { motion } from 'framer-motion'

const sliderVariants = {
  hover: {
    x: '100%',
    transition : {
      type: 'spring',
      damping: 10,
      stiffness: 50
    }
  }
}

const Projects = () => {

  return ( 
    <div className={styles.projectsContainer}>
      <div className={styles.header}>
        <h1>My Projects</h1>
        <p>Here are some of my recent works. Feel free to check them out</p>

      </div>
      <div className={styles.grid}>
        <motion.div variants={sliderVariants} whileHover='hover' className={styles.item}>
          <div className={styles.web}>
            <Image src='/projectsImages/Webdev.png' height={160} width={640}/>
          </div>
        </motion.div>
        <motion.div variants={sliderVariants} whileHover='hover' className={styles.item}>
          <div className={styles.app}>
            <Image src='/projectsImages/App.png' height={161} width={640}/>
          </div>
        </motion.div>
        <motion.div variants={sliderVariants} whileHover='hover' className={styles.item}>
          <div className={styles.blender}>
            <Image src='/projectsImages/3D.png' height={161} width={640}/>
          </div>
        </motion.div>
        <motion.div variants={sliderVariants} whileHover='hover' className={styles.item}>
          <div className={styles.ui}>
            <Image src='/projectsImages/UI.png' height={161} width={640}/>
          </div>
        </motion.div>
        <motion.div variants={sliderVariants} whileHover='hover' className={styles.item}>
          <div className={styles.ar}>
            <Image src='/projectsImages/AR.png' height={161} width={640}/>
          </div>
        </motion.div>
      </div>
    </div>
   );
}
 
export default Projects;