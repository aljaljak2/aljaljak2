import styles from './Technologies.module.css'

const technologiesData = {
  languages: [
    'C / C++',
    'C#',
    'Python',
    'Java · Kotlin',
    'JavaScript',
    'SQL',
    'Julia',
    'HTML · CSS'
  ],
  frameworks: [
    'ASP.NET Core',
    'Node.js · Express',
    'OpenCV',
    'PyTorch',
    'YOLOv5 / YOLOv8',
    'Deep SORT'
  ],
  tools: [
    'Git',
    'Docker',
    'Postman',
    'Google Colab',
    'CMake'
  ]
}

function TechColumn({ title, items }) {
  return (
    <div className={styles.column}>
      <h3 className={styles.columnTitle}>{title}</h3>
      <div className={styles.divider}></div>
      <ul className={styles.list}>
        {items.map((item, index) => (
          <li key={index} className={styles.item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

function Technologies() {
  return (
    <section className={styles.technologies} id="technologies">
      <h2 className={styles.heading}>Technologies</h2>
      <div className={styles.grid}>
        <TechColumn title="Languages" items={technologiesData.languages} />
        <TechColumn title="Frameworks & Libraries" items={technologiesData.frameworks} />
        <TechColumn title="Tools & Platforms" items={technologiesData.tools} />
      </div>
    </section>
  )
}

export default Technologies
