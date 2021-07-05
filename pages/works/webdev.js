import {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/Works.module.css';
import { motion, AnimatePresence } from "framer-motion";



const imageVariant = {
  hidden: {
    opacity: 0,
    zIndex: -1,
  },
  visible: {
    opacity: 1,
    zIndex: 1,
    transition : {
      duration: 1
    }
  }
}

const backdrop = {
  hidden: {
    y: '100vh',
    transition : {
      type: 'tween',
      duration:1
    }
  },
  visible: {
    y: 0,
    transition : {
      type: 'tween',
      duration:1
    }
  }
  
}

const crossVariants = {
  hover:{
      rotate: 45
  }
}

const appear = {
  hidden: {opacity: 0 },
  visible: {opacity: 1,
    transition : {
      duration: 2
    }
  }
}



const webdev = () => {

  const [modal, setModal] = useState(false);
  const [modal1, setModal1] = useState(false);

  const [hover, setHover] = useState(false);
  const [hover1, setHover1] = useState(false);


  return ( 
    
      <motion.div variants={appear} initial='hidden' animate='visible' className={styles.parentContainer}>
        
        <AnimatePresence>
        {
          modal && <motion.div variants={backdrop} initial='hidden' animate='visible' exit='hidden' className={styles.backdrop}>
            <Link href='https://github.com/lawlesx/hackclubnmit-website'><a target="_blank" rel="noopener noreferrer">Github Repo</a></Link>
            <Link href='https://lawlesx.github.io/'><a target="_blank" rel="noopener noreferrer">Live Link</a></Link>
              <motion.div variants={crossVariants} whileHover='hover' className={styles.crossSection}
                onClick={() => setModal(false)}
              >
                <div className={styles.cline1}></div>
                <div className={styles.cline2}></div>
              </motion.div>
            </motion.div>
        }
        {
          modal1 && <motion.div variants={backdrop} initial='hidden' animate='visible' exit='hidden' className={styles.backdrop}>
            <Link href='https://github.com/lawlesx/uncertainty'><a target="_blank" rel="noopener noreferrer">Github Repo</a></Link>
            <Link href='#'><a>Live Link</a></Link>
              <motion.div variants={crossVariants} whileHover='hover' className={styles.crossSection}
                onClick={() => setModal1(false)}
              >
                <div className={styles.cline1}></div>
                <div className={styles.cline2}></div>
              </motion.div>
            </motion.div>
        }
        </AnimatePresence>
        <div className={styles.frame}>
          {!hover && <h1>Web Dev</h1>}
          <motion.div variants={imageVariant} animate={hover ? 'visible': 'hidden'} className={styles.image1}>
            <Image src='/Homepage.png' layout='fill' />
          </motion.div>
          <motion.div variants={imageVariant} animate={hover1 ? 'visible': 'hidden'} className={styles.image2}>
            <Image src='/Portfolio.png' layout='fill' />
          </motion.div>        
        </div>
        <motion.ul>
          <li><motion.a onClick={() => setModal(true)} onHoverStart={() => setHover(true)} onHoverEnd={() => setHover(false)}>Hack Club Nmit</motion.a></li>
          <li><motion.a onClick={() => setModal1(true)} onHoverStart={() => setHover1(true)} onHoverEnd={() => setHover1(false)}>My Portfolio</motion.a></li>
          

        </motion.ul>
      </motion.div>
    
    
   );
}
 
export default webdev;