import styles from './Contact.module.css'

function Contact() {
  return (
    <section className={styles.contact} id="contact">
      <h2 className={styles.heading}>Get in touch</h2>
      <div className={styles.links}>
        <a
          href="mailto:aljaljak2@etf.unsa.ba"
          className={styles.link}
        >
          aljaljak2@etf.unsa.ba
        </a>
        <a
          href="https://linkedin.com/in/ali-ljaljak-b84643211"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          linkedin.com/in/ali-ljaljak-b84643211
        </a>
        <a
          href="https://github.com/aljaljak2"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          github.com/aljaljak2
        </a>
      </div>
    </section>
  )
}

export default Contact
