import Image from "next/image";
import styles from '../styles/Home.module.css'


const Intro = () => {
  return ( 
    <div className="outterIntro">
      <div className="intro">
        <h2>Madness</h2>
        <p>Of</p>
        <h1>Aniruddha Sil</h1>
      </div>
      <div className="skills">
        <Image
          src="/Profile.png"
          alt="Picture of the author"
          height={521}
          width={432}
          // layout="responsive"
        />
        <div className={styles.skills}> {/*styles.skills not being used*/}
          <h3>Hi, I am a</h3>
            <p>Full Stack Web Developer</p>
            <p>UI/UX Designer</p>
            <p>Android & iOS App Developer</p>
            <p>Deep Learning Enthusiast</p>
          <h3>Also Loves</h3>
            <p>3D Modelling and Animation</p>
            <p>Graphic Designing</p>
            <p>Video Editing</p>
            <p>Creating Spark AR Effects</p>
        </div>
      </div>
      
    </div>
   );
}
 
export default Intro;