import styles from '../styles/About.module.css'
import { motion } from "framer-motion";

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
  return ( 
    <div className="intro">
      <div className={styles.about}>
        <h1>About Me</h1>
        <p>I am a Developer and Designer from India. The Uncertainty in Design fascinates me.</p>
        <p>I love technology and loves to explore different domains of technology.</p>
        <p>Currently Designer and developer for the Hack club of Nmit.
        Well experienced in Full stack web development using NEXTJs & Node and App development using React native.A video editor and motion graphics designer.Also a creator of 3D models and animation
        </p>
        <p className={styles.highlight}>Would love to work with someone with passion for design.</p>
      </div>
      <motion.div variants={effectsVariants} animate='visible' className={styles.aboutEffects}>
          <h1 className={styles.top}>FRONTEND</h1>
          <h1 className={styles.vertTextLeft}>UI/UX Designer</h1>
          <h1 className={styles.bottom}>Mobile APPs</h1>
          <h1 className={styles.vertTextRight}>3D Designer</h1>
      </motion.div>
    </div>
   );
}
 
export default About;