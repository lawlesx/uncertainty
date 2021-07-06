import styles from '../styles/Loader.module.css'
import {motion} from 'framer-motion';

const loaderVariant = {
  hidden : {
    y: '100vh'
  },
  visible : {
    y: 0,
    transition : {
      type: 'tween',
      duration:1
    }
  },
  exit: {
    y: '100vh',
    opacity: 0,
    transition : {
      type: 'tween',
      duration: 1
    }
  }
}

const Loader = () => {
  return ( 
    <motion.div variants={loaderVariant} initial='hidden' animate='visible' exit='exit' className={styles.loader}>
      <motion.h1 animate={{color: ['#9f9f9f','#1a1a1a','#FF4655','#4cd964']}}
        transition={{
          repeat: 2,
          repeatType: "reversemotion.",
          duration: 1
        }}
      >Loading...</motion.h1>
    </motion.div>
   );
}
 
export default Loader;