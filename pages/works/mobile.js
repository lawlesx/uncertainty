import {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/Mobile.module.css';
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
  const [hover, setHover] = useState(false);


  return ( 
    <motion.div variants={appear} initial='hidden' animate='visible' exit='hidden' className={styles.parentContainer}>
              <AnimatePresence>
        {
          modal && <motion.div variants={backdrop} initial='hidden' animate='visible' exit='hidden' className={styles.backdrop}>
            <Link href="https://github.com/lawlesx/Medicalow"><a target="_blank" rel="noopener noreferrer">Github Repo</a></Link>
              <p>Currently In Development</p>
              <motion.div variants={crossVariants} whileHover='hover' className={styles.crossSection}
                onClick={() => setModal(false)}
              >
                <div className={styles.cline1}></div>
                <div className={styles.cline2}></div>
              </motion.div>
            </motion.div>
        }
        </AnimatePresence>
      <div className={styles.frame}>
        {!hover && <h1>App Dev</h1>}
        <motion.div variants={imageVariant} animate={hover ? 'visible': 'hidden'} className={styles.image1}>
          <Image src='/ChatUi.png' layout='fill' />
        </motion.div>       
      </div>
      <motion.ul>
        <li><motion.a onClick={() => setModal(true)} onHoverStart={() => setHover(true)} onHoverEnd={() => setHover(false)}>Medicalow</motion.a></li>
      </motion.ul>
    </motion.div>
    
   );
}
 
export default webdev;