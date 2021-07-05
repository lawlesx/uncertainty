import styles from '../styles/Loader.module.css'
import {motion} from 'framer-motion';

const Loader = () => {
  return ( 
    <div className={styles.loader}>
      <motion.h1 animate={{color: ['#9f9f9f','#1a1a1a','#FF4655','#4cd964']}}
        transition={{
          repeat: 2,
          repeatType: "reverse",
          duration: 1
        }}
      >Loading...</motion.h1>
    </div>
   );
}
 
export default Loader;