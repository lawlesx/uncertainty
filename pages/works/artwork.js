import {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import styles from '../../styles/Artwork.module.css';
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


const Artwork = () => {
  const [hover, setHover] = useState(false);
  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [hover3, setHover3] = useState(false);
  const [hover4, setHover4] = useState(false);




  return ( 
    <motion.div variants={appear} initial='hidden' animate='visible' exit='hidden' className={styles.parentContainer}>
      <Head>
        <title>3D Artwork</title>
      </Head>
      <div className={styles.frame}>
        <motion.div variants={imageVariant} animate={hover ? 'visible': 'hidden'} className={styles.image1}>
          <Image src='/Red_Output.png' layout='fill' alt='Chained'/>
        </motion.div>
        <motion.div variants={imageVariant} animate={hover1 ? 'visible': 'hidden'} className={styles.image2}>
          <Image src='/PentaPendulum.png' layout='fill' alt='PentaPendulum'/>
        </motion.div>
        <motion.div variants={imageVariant} animate={hover2 ? 'visible': 'hidden'} className={styles.image3}>
          <Image src='/Cave.png' layout='fill' alt='Cave'/>
        </motion.div>  
        <motion.div variants={imageVariant} animate={hover3 ? 'visible': 'hidden'} className={styles.image4}>
          <Image src='/Cortex.png' layout='fill' alt='Cortex'/>
        </motion.div>   
        <motion.div variants={imageVariant} animate={hover4 ? 'visible': 'hidden'} className={styles.image5}>
          <Image src='/Lost_Sword.jpg' layout='fill' alt='Lost Sword'/>
        </motion.div>    
      </div>
      <motion.ul>
        <li><Link href="https://www.youtube.com/watch?v=KraBZd5UxW4&ab_channel=WelcomeToHell" passHref><motion.a target="_blank" rel="noopener noreferrer"  onHoverStart={() => setHover2(true)} onHoverEnd={() => setHover2(false)}>Cave</motion.a></Link></li>
        <li><Link href="https://www.youtube.com/watch?v=phTeplD1adE&ab_channel=WelcomeToHell" passHref><motion.a target="_blank" rel="noopener noreferrer" onHoverStart={() => setHover(true)} onHoverEnd={() => setHover(false)}>Chained</motion.a></Link></li>
        <li><Link href="https://www.instagram.com/p/CMC2qzxg_hG/" passHref><motion.a onHoverStart={() => setHover1(true)} onHoverEnd={() => setHover1(false)}>PentaPendulum</motion.a></Link></li>
        <li><Link href="https://www.youtube.com/watch?v=buv4Sngms14&ab_channel=WelcomeToHell" passHref><motion.a target="_blank" rel="noopener noreferrer" onHoverStart={() => setHover3(true)} onHoverEnd={() => setHover3(false)}>Arm Cortex</motion.a></Link></li>
        <li><Link href="https://www.youtube.com/watch?v=lEbTlM7AnNI&ab_channel=WelcomeToHell" passHref><motion.a target="_blank" rel="noopener noreferrer" onHoverStart={() => setHover4(true)} onHoverEnd={() => setHover4(false)}>Lost Sword</motion.a></Link></li>
      </motion.ul>
    </motion.div>
   );
}
 
export default Artwork;