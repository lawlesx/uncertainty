import {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/Ui.module.css';
import { motion, AnimatePresence} from "framer-motion";

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



const ui = () => {

  const [hover, setHover] = useState(false);
  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);


  return ( 
    <div className={styles.parentContainer}>
      <div className={styles.frame}>
        <motion.div variants={imageVariant} animate={hover ? 'visible': 'hidden'} className={styles.image1}>
          <Image src='/MarveloUnit.png' layout='fill' />
        </motion.div>
        <motion.div variants={imageVariant} animate={hover1 ? 'visible': 'hidden'} className={styles.image2}>
          <Image src='/VerificationUi.png' layout='fill' />
        </motion.div>
        <motion.div variants={imageVariant} animate={hover2 ? 'visible': 'hidden'} className={styles.image3}>
          <Image src='/ChatUi.png' layout='fill' />
        </motion.div>        
      </div>
      <motion.ul>
        <li><motion.a onHoverStart={() => setHover(true)} onHoverEnd={() => setHover(false)}>MarveloUnit</motion.a></li>
        <li><motion.a onHoverStart={() => setHover1(true)} onHoverEnd={() => setHover1(false)}>Verification Ui</motion.a></li>
        <li><motion.a onHoverStart={() => setHover2(true)} onHoverEnd={() => setHover2(false)}>Chat App</motion.a></li>
      </motion.ul>
    </div>
   );
}
 
export default ui;