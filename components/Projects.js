import { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Projects.module.css'
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';

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
  const {ref, inView} = useInView({threshold: 0.3});

  const animation = useAnimation();

  useEffect (() => {
    if(!inView)
    { 
      animation.start(
        {
          opacity: 0,
          transition : {
            duration: 1
          }
        }
      );
    }
    if(inView)
    { 
      animation.start(
        {
          opacity: 1,
          transition : {
            duration: 1.3
          }
        }
      );
    }
  })

  return ( 
    <motion.div ref={ref} animate={animation} className={styles.projectsContainer}>
      <div className={styles.header}>
        <h1>My Projects</h1>
        <p>Here are some of my recent works. Feel free to check them out</p>

      </div>
      <div className={styles.grid}>
        <Link href='works/webdev'><motion.div variants={sliderVariants} whileHover='hover' className={styles.item}>
          <div className={styles.web}>
            <Image src='/projectsImages/Webdev.png' height={160} width={640}/>
          </div>
        </motion.div></Link>
        <Link href='works/mobile'><motion.div variants={sliderVariants} whileHover='hover' className={styles.item}>
          <div className={styles.app}>
            <Image src='/projectsImages/App.png' height={161} width={640}/>
          </div>
        </motion.div></Link>
        <Link href='works/artwork'><motion.div variants={sliderVariants} whileHover='hover' className={styles.item}>
          <div className={styles.blender}>
           <Image src='/projectsImages/3D.png' height={161} width={640}/>
          </div>
        </motion.div></Link>
        <Link href='works/ui'><motion.div variants={sliderVariants} whileHover='hover' className={styles.item}>
          <div className={styles.ui}>
            <Image src='/projectsImages/UI.png' height={161} width={640}/>
          </div>
        </motion.div></Link>
        <Link href='works/ui'><motion.div variants={sliderVariants} whileHover='hover' className={styles.item}>
          <div className={styles.ar}>
            <Image src='/projectsImages/AR.png' height={161} width={640}/>
          </div>
        </motion.div></Link>
      </div>
    </motion.div>
   );
}
 
export default Projects;