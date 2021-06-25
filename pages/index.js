import Head from 'next/head'
import Image from 'next/image'
import Intro from '../components/Intro'
import styles from '../styles/Home.module.css'
import About from '../components/About'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Scroll from '../components/Scroll'



export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,300;0,400;0,500;0,600;0,700;1,500&family=Quicksand:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
      </Head>
      <Intro />
      <Scroll />
      <About />
      <Skills />
    </div>
  )
}
