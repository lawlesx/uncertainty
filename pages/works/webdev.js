import {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
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
  hidden: {opacity: 0,
    transition : {
      duration:2,
    }
  },
  visible: {opacity: 1,
    transition : {
      duration: 2
    }
  }
}



const Webdev = () => {

  // TODO: Requires a lot of refactoring
  const [modal, setModal] = useState(false);
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false)
  const [modal3, setModal3] = useState(false)

  const [hover, setHover] = useState(false);
  const [hover1, setHover1] = useState(false);
  const [hover2,setHover2] = useState(false)
  const [hover3,setHover3] = useState(false)


  return ( 
      <AnimatePresence exitBeforeEnter>
        <Head>
          <title>Web Development</title>
        </Head>
      <motion.div variants={appear} initial='hidden' animate='visible' exit='hidden' layoutId='webdev' className={styles.parentContainer}>
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
            <Link href='/'><a>Live Link</a></Link>
              <motion.div variants={crossVariants} whileHover='hover' className={styles.crossSection}
                onClick={() => setModal1(false)}
              >
                <div className={styles.cline1}></div>
                <div className={styles.cline2}></div>
              </motion.div>
            </motion.div>
        }
        {
          modal2 && <motion.div variants={backdrop} initial='hidden' animate='visible' exit='hidden' className={styles.backdrop}>
            <h1>A concept website for a NFT auction</h1>
            <Link href='https://github.com/lawlesx/the-witch-trials-frontend'><a target="_blank" rel="noopener noreferrer">Github Repo</a></Link>
            <Link href='https://the-witch-trials.vercel.app/'><a target="_blank" rel="noopener noreferrer">Live Link</a></Link>
              <motion.div variants={crossVariants} whileHover='hover' className={styles.crossSection}
                onClick={() => setModal2(false)}
              >
                <div className={styles.cline1}></div>
                <div className={styles.cline2}></div>
              </motion.div>
            </motion.div>
        }
        {
          modal3 && <motion.div variants={backdrop} initial='hidden' animate='visible' exit='hidden' className={styles.backdrop}>
            <h1>WIP: Social graph based on lens protocol</h1>
            <Link href='https://github.com/lawlesx/social-eye'><a target="_blank" rel="noopener noreferrer">Github Repo</a></Link>
            <Link href='https://social-eye.vercel.app/'><a target="_blank" rel="noopener noreferrer">Live Link</a></Link>
              <motion.div variants={crossVariants} whileHover='hover' className={styles.crossSection}
                onClick={() => setModal3(false)}
              >
                <div className={styles.cline1}></div>
                <div className={styles.cline2}></div>
              </motion.div>
            </motion.div>
        }
        </AnimatePresence>
        <div className={styles.frame}>
          {![!hover, !hover1 ,!hover2].includes(false) && <h1>Web Dev</h1>}
          <motion.div variants={imageVariant} animate={hover ? 'visible': 'hidden'} className={styles.image1}>
            <Image src='/Homepage.png' layout='fill' alt='Hack Club NMIT'/>
          </motion.div>
          <motion.div variants={imageVariant} animate={hover1 ? 'visible': 'hidden'} className={styles.image2}>
            <Image src='/Portfolio.png' layout='fill' alt='Portfolio'/>
          </motion.div>        
          <motion.div variants={imageVariant} animate={hover2 ? 'visible': 'hidden'} className={styles.image3}>
            <Image src='/The Witch Trials.png' layout='fill' alt='The Witch Trials'/>
          </motion.div>
          <motion.div variants={imageVariant} animate={hover3 ? 'visible': 'hidden'} className={styles.image4}>
            <Image src='/Social Eye.png' layout='fill' alt='Social Eye'/>
          </motion.div>
        </div>
        <motion.ul>
          <li><motion.a onClick={() => setModal(true)} onHoverStart={() => setHover(true)} onHoverEnd={() => setHover(false)}>Hack Club Nmit</motion.a></li>
          <li><motion.a onClick={() => setModal1(true)} onHoverStart={() => setHover1(true)} onHoverEnd={() => setHover1(false)}>My Portfolio</motion.a></li>
          <li><motion.a onClick={() => setModal2(true)} onHoverStart={() => setHover2(true)} onHoverEnd={() => setHover2(false)}>NFT Auction</motion.a></li>
          <li><motion.a onClick={() => setModal3(true)} onHoverStart={() => setHover3(true)} onHoverEnd={() => setHover3(false)}>Social Eye</motion.a></li>
        </motion.ul>
      </motion.div>
      </AnimatePresence>
   );
}
 
export default Webdev;