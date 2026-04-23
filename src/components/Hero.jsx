import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload } from 'react-icons/fa'
import styles from './Hero.module.css'
import cvFile from '../assets/CV-Ali_Ljaljak.pdf'

function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.content}>
        <h1 className={styles.name}>Ali Ljaljak</h1>
        <p className={styles.title}>Software Engineer & CS Graduate Student</p>
        <p className={styles.subtitle}>
          Faculty of Electrical Engineering, University of Sarajevo
        </p>
        <div className={styles.links}>
          <a
            href={cvFile}
            download="Ali_Ljaljak_CV.pdf"
            className={styles.iconButton}
            aria-label="Download CV"
            title="Download CV"
          >
            <FaFileDownload />
          </a>
          <a
            href="https://github.com/aljaljak2"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.iconButton}
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/ali-ljaljak-b84643211"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.iconButton}
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:aljaljak2@etf.unsa.ba"
            className={styles.iconButton}
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
