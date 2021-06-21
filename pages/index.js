import Head from 'next/head'
import Image from 'next/image'
import Intro from '../components/Intro'
import styles from '../styles/Home.module.css'
import Uncertainty from '../components/uncertainty'
import Projects from '../components/Projects'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Arima+Madurai:wght@300;400;500;700&family=Comfortaa:wght@300;400;500;600;700&family=Rubik:wght@300;400;500&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Courgette&display=swap" rel="stylesheet"/>
      </Head>
      <Intro />
      <Uncertainty/>
      <Projects/>
    </div>
  )
}
