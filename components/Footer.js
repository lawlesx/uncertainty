import Link from "next/link";
import styles from '../styles/Footer.module.css'

const Footer = () => {
  return ( 
    <div className={styles.container}>
      <Link href='mailto:aniruddhasil109@gmail.com'><a>aniruddhasil109@gmail.com</a></Link>
      <div className={styles.item}>
        <div>
          <p>Where I live</p>
          <h1>Bangalore, India</h1>
        </div>

        <div className={styles.contact}>
          <h2>Connect with me here</h2>
          <Link href='https://www.linkedin.com/in/aniruddha-sil-251555196/'><a>LinkedIn</a></Link>
          <Link href='https://www.instagram.com/dramatic_murderer/'><a>Instagram</a></Link>
          <Link href='https://twitter.com/welcometohellv'><a>Twitter</a></Link>
          <Link href='https://github.com/lawlesx'><a>Github</a></Link>
        </div>
        

      </div>

    </div>
   );
}
 
export default Footer;