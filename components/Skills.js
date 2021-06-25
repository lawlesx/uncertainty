import styles from '../styles/Skills.module.css';
import HTMLFlipBook from 'react-pageflip';

const Skills = () => {
  return ( 
    <div className={styles.skillsContainer}>
      <h1>Expertise</h1>
      <HTMLFlipBook width={400} height={500} maxShadowOpacity={0.5} showCover={true}>
          <div className={styles.page}>
            <h1>Full Stack Developement</h1>
            <p>Tech stack used by my is NEXTJs/Reactjs and Node</p>
            <p>Framer Motion as the animation library</p>
          </div>
          <div className={styles.pageL}>
            <h1>App Development</h1>
            <p>Creating Beautiful Mobile apps
              using React Native
              And the power of css
            </p>
          </div>
          <div className={styles.page}>
            <h1>UI/UX Designer</h1>
            <p>Use Figma to design web apps and mobile apps template.</p>
            <p>Loves to design.</p>
          </div>
          <div className={styles.pageL}>
            <h1>3D Modelling andd Animation</h1>
            <p>My vivid Imagination are brought to life using blender.</p>
            <p>Loves to reflect my fantasies to the world.</p>
          </div>
          <div className={styles.page}>
            <h1>AR Effects</h1>
            <p>Create Simple but artistic Ar effects using Spark AR.</p>
          </div>
          <div className={styles.pageL}>
            <h1>Learning in progress</h1>
            <p className={styles.center}>Thanks You</p>
          </div>
      </HTMLFlipBook>
    </div>
   );
}
 
export default Skills;