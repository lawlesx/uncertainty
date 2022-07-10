import {useEffect} from 'react';
import styles from '../styles/About.module.css'
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';

const effectsVariants={
  visible: {
    rotateZ: [90,180,270,360],
    rotateY: [90,180,270,360],
    // color: ['#FF4655','#f6f6f6','#4cd964'],
    transition : {
      duration: 5,
      type : 'Spring',
      yoyo: Infinity
    }
  }
}

const About = () => {

  const {ref, inView} = useInView({threshold: 0.5});

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
            duration: 1
          }
        }
      );
    }
  })

  return ( 
    <motion.div ref={ref} animate={animation} className="intro" id="About">
      <div className={styles.about}>
        <h1>About Me</h1>
        <p>I am a developer and designer from India. The uncertainty in design fascinates me.</p>
        <p>Currently Frontend Developer at Coinvise.</p>
        <p>I love technology and loves to explore different domains of technology.</p>
        <p>I was the lead designer for the Hack Club of Nitte Meenakshi Institute of Technology. Well experienced in full stack web development using NEXTjs & node and app development using React native. A video editor and motion graphics designer. Also a creator of 3D models and animation.</p>
        <p className={styles.highlight}>Would love to work with someone having a passion for design.</p>
      </div>
      <motion.div variants={effectsVariants} animate='visible' className={styles.aboutEffects}>
          <h1 className={styles.top}>Frontend</h1>
          <h1 className={styles.vertTextLeft}>UI/UX Designer</h1>
          <h1 className={styles.bottom}>Mobile Apps</h1>
          <h1 className={styles.vertTextRight}>3D Designer</h1>
      </motion.div>
    </motion.div>
   );
}
 
export default About;