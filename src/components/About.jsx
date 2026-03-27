import styles from './About.module.css'

function About() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <div className={styles.text}>
          <h2 className={styles.heading}>About</h2>
          <p className={styles.paragraph}>
            I'm a Master's student in Computing and Informatics at the
            Faculty of Electrical Engineering in Sarajevo, where I also
            work as a Teaching Assistant for Object-Oriented Analysis
            and Design.
          </p>
          <p className={styles.paragraph}>
            My work spans computer vision, embedded systems, and
            full-stack web development. I've built everything from
            real-time object tracking pipelines for tennis match analysis
            to wildlife monitoring tools used in Bosnian forests.
          </p>
          <p className={styles.paragraph}>
            Previously I interned as an automotive embedded software
            engineer at Maasu BH, working on ECU software in C/C++
            following V-model methodology.
          </p>
          <p className={styles.paragraph}>
            I care about writing code that is clear, purposeful, and
            built to last.
          </p>
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.placeholder}>
            <span>Ali Ljaljak</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
