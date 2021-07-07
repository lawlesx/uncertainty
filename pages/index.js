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
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,300;0,400;0,500;0,600;0,700;1,500&family=Quicksand:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true'/>
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500&display=swap" rel="stylesheet"/>
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
