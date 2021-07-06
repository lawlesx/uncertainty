import styles from '../styles/Loader.module.css'
import {motion} from 'framer-motion';

const Screen = () => {
  return ( 
    <motion.div layoutId='Screen' className={styles.loader}>
      <motion.h1 animate={{color: ['#9f9f9f','#1a1a1a','#FF4655','#4cd964']}}
        transition={{
          repeat: 5,
          repeatType: "reversemotion.",
          duration: 1
        }}
      >This Portfolio is made for full screen 😇</motion.h1>
      <motion.p animate={{color: ['#9f9f9f','#4cd964','#FF4655']}}
        transition={{
          repeat: 5,
          repeatType: "reversemotion.",
          duration: 1
        }}>Please Open in Desktop</motion.p>
      <motion.p animate={{color: ['#9f9f9f','#4cd964','#FF4655']}}
        transition={{
          repeat: 5,
          repeatType: "reversemotion.",
          duration: 1
        }}>Thanks for Adjusting</motion.p>
    </motion.div>
   );
}
 
export default Screen;