import Head from 'next/head'
import {motion} from 'framer-motion'
import Intro from '../components/Intro'
import styles from '../styles/Home.module.css'
import About from '../components/About'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Scroll from '../components/Scroll'
import {AnimatePresence} from 'framer-motion'

const exitAnimation = {
  exit: {
    opacity: 0,
    transition : {
      type: 'tween',
      duration: 1
    }
  }

}



export default function Home() {
  return (
    <motion.div variants={exitAnimation} exit='exit' layoutId='index' className={styles.container}>
      <Head>
        <title>LAWLESX</title>
        <link rel="icon" href="/LX.png" />
      </Head>
      <Intro />
      <Scroll />
      <About />
      <Skills />
      <AnimatePresence>
        <Projects />
      </AnimatePresence>
    </motion.div>
  )
}
