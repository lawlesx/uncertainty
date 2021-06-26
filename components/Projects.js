import { useRef, useEffect } from 'react'
import Image from 'next/image'
import styles from '../styles/Projects.module.css'

const Projects = () => {

  return ( 
    <div className={styles.projectsContainer}>
      <div className={styles.header}>
        <h1>My Projects</h1>
        <p>Here are some of my recent works. Feel free to check them out</p>

      </div>
      <div className={styles.grid}>
        <div className={styles.item}></div>
        <div className={styles.item}></div>
        <div className={styles.item}></div>
        <div className={styles.item}></div>
        <div className={styles.item}></div>
      </div>
    </div>
   );
}
 
export default Projects;