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
  const [hover3, setHover3] = useState(false);



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
        <motion.div variants={imageVariant} animate={hover3 ? 'visible': 'hidden'} className={styles.image4}>
          <Image src='/LastroClub.png' layout='fill' />
        </motion.div>     
      </div>
      <motion.ul>
        <li><motion.a href="https://dribbble.com/shots/15978545-MarveloUnit" target="_blank" rel="noopener noreferrer" onHoverStart={() => setHover(true)} onHoverEnd={() => setHover(false)}>MarveloUnit</motion.a></li>
        <li><motion.a href="https://dribbble.com/shots/15978558-LastroClub" target="_blank" rel="noopener noreferrer" onHoverStart={() => setHover3(true)} onHoverEnd={() => setHover3(false)}>Lastro Club</motion.a></li>
        <li><motion.a href="https://dribbble.com/shots/15978486-Verifyble" target="_blank" rel="noopener noreferrer" onHoverStart={() => setHover1(true)} onHoverEnd={() => setHover1(false)}>Verifyble</motion.a></li>
        <li><motion.a href="https://dribbble.com/shots/15978533-Gossips" target="_blank" rel="noopener noreferrer" onHoverStart={() => setHover2(true)} onHoverEnd={() => setHover2(false)}>Chat App</motion.a></li>
      </motion.ul>
    </div>
   );
}
 
export default ui;