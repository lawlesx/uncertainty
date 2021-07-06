import {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/Ar.module.css';
import { motion } from "framer-motion";



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
const appear = {
  hidden: {opacity: 0 },
  visible: {opacity: 1,
    transition : {
      duration: 2
    }
  }
}



const Ar = () => {

  const [hover, setHover] = useState(false);
  const [hover1, setHover1] = useState(false);


  return ( 
    <motion.div variants={appear} initial='hidden' animate='visible' exit='hidden' className={styles.parentContainer}>
      <div className={styles.frame}>
        <motion.div variants={imageVariant} animate={hover ? 'visible': 'hidden'} className={styles.image1}>
          <Image src='/ExCalibur.png' layout='fill' alt='Excalibur' />
        </motion.div>
        <motion.div variants={imageVariant} animate={hover1 ? 'visible': 'hidden'} className={styles.image2}>
          <Image src='/Scary_Mask.png' layout='fill' alt='Scary Mask' />
        </motion.div>        
      </div>
      <motion.ul>
        <li><Link href="https://www.instagram.com/ar/770292486994019/" passHref><motion.a target="_blank" rel="noopener noreferrer" onHoverStart={() => setHover(true)} onHoverEnd={() => setHover(false)}>ExCalibur</motion.a></Link></li>
        <li><Link href="https://www.instagram.com/ar/265495934638851/" passHref><motion.a target="_blank" rel="noopener noreferrer" onHoverStart={() => setHover1(true)} onHoverEnd={() => setHover1(false)}>Scary Mask</motion.a></Link></li>
        

      </motion.ul>
    </motion.div>
    
   );
}
 
export default Ar;