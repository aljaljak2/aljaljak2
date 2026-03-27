import { FaGithub } from 'react-icons/fa'
import styles from './Projects.module.css'

const projectsData = [
  {
    id: 1,
    title: 'Real-Time Object Tracking Pipeline',
    description: 'Computer vision app for tracking players and ball in tennis matches, with statistical analysis of movement and distance. Built with YOLOv5 and Deep SORT.',
    tags: ['Python', 'YOLOv5', 'Deep SORT', 'OpenCV', 'Homography'],
    github: 'https://github.com/aljaljak2/Bachelor_rad-CV-for-tracking',
    imageText: 'Tennis tracking with bounding boxes'
  },
  {
    id: 2,
    title: 'Bear Detection – Wildlife Monitoring App',
    description: 'YOLOv8 model trained from scratch on a custom dataset of bears in Bosnian forests. Packaged as a desktop app with GUI — no ML knowledge required to use it.',
    tags: ['Python', 'YOLOv8', 'PyTorch', 'Custom Dataset', 'GUI'],
    github: 'https://github.com/aljaljak2/VI-projekat-Bear-Detection',
    imageText: 'Bear detection GUI'
  },
  {
    id: 3,
    title: 'Secure Remote Control System',
    description: 'Android client of a distributed remote control platform with real-time screen sharing, WebRTC streaming, and OAuth 2.0 authentication. Built as part of a multi-team university project.',
    tags: ['Android', 'Kotlin', 'WebRTC', 'WebSocket', 'OAuth 2.0'],
    github: 'https://github.com/SI-SecureRemoteControl/Client-Side-Android-app',
    imageText: 'Remote control architecture'
  },
  {
    id: 4,
    title: 'Furniture Selling App',
    description: 'Full-stack e-commerce application built with ASP.NET Core MVC and C#. Features product listings, user authentication, and SQL database integration with production deployment.',
    tags: ['C#', 'ASP.NET Core MVC', 'SQL', 'SmartestASP'],
    github: 'https://github.com/aljaljak2/Modern_home',
    imageText: 'Furniture e-commerce'
  },
  {
    id: 5,
    title: 'Real Estate Web App',
    description: 'Property listing platform with Node.js and Express backend, asynchronous AJAX communication, and role-based access control.',
    tags: ['Node.js', 'Express', 'JavaScript', 'AJAX', 'HTML/CSS'],
    github: 'https://github.com/aljaljak2/Real-estate-web-app',
    imageText: 'Real estate listings'
  }
]

function ProjectCard({ project, index }) {
  const isEven = index % 2 === 0

  return (
    <div className={`${styles.card} ${isEven ? styles.cardEven : styles.cardOdd}`}>
      <div className={styles.imageContainer}>
        <div className={styles.placeholder}>
          <span>{project.imageText}</span>
        </div>
      </div>
      <div className={styles.content}>
        <h3 className={styles.projectTitle}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>
        <div className={styles.tags}>
          {project.tags.map((tag, idx) => (
            <span key={idx} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.githubLink}
        >
          <FaGithub />
          <span>View on GitHub</span>
        </a>
      </div>
    </div>
  )
}

function Projects() {
  return (
    <section className={styles.projects} id="projects">
      <h2 className={styles.heading}>Projects</h2>
      <div className={styles.projectsGrid}>
        {projectsData.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}

export default Projects
