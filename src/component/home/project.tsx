

import React from 'react';
import styles from '../../assets/css/home/projects.module.css';
import imgPizzeria from "../../assets/img/site-pizzeria-react-node.png";
import imgMeteo from "../../assets/img/app-meteo-react-geoloc.png";

const projects = [
  {
    title: 'Application météo moderne',
    description: 'Application React avec API météo, responsive et géolocalisation intégrée.',
    image: imgMeteo,
    link: 'https://abdel92000.github.io/Site-Meteo/',
    isAvailable: true,
    tech: ['React.js', 'API REST', 'CSS Modules'],
  },
  {
    title: 'Site e-commerce pour une pizzeria',
    description: "Site complet avec commande en ligne, back-office et base de données. Stack : React, Node, TypeScript, MySQL.",
    image: imgPizzeria,
    link: '#',
    isAvailable: false,
    tech: ['React.js', 'Node.js', 'TypeScript', 'MySQL'],
  },
  {
    title: 'Site vitrine Sservices',
    description: "Site vitrine professionnel pour un service de serrurerie. Responsive, clair, rapide, avec formulaire de contact, animations légères et navigation fluide.",
    image: require('../../assets/img/site-serrurier-responsive.png'), 
    link: 'https://sservices-two.vercel.app/',
    isAvailable: true,
    tech: ['React.js', 'CSS', 'Responsive Design','TypeScript'],
  }
];

const Projects = () => {
  return (
    <section id="projects" className={styles.projectsSection}>
      <h2 className={styles.title}>Mes projets</h2>
      <div className={styles.cardContainer}>
        {projects.map((project, index) => (
          <div key={index} className={styles.card}>
            <img src={project.image} alt={project.title} className={styles.image} />
            <div className={styles.content}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className={styles.techStack}>
                {project.tech.map((tech, i) => (
                  <span key={i} className={styles.tech}>{tech}</span>
                ))}
              </div>
              {project.isAvailable ? (
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <button className={styles.BtnVoirLeSite}>Voir le site</button>
                </a>
              ) : (
                <button className={styles.BtnVoirLeSite} disabled>
                  Pas encore disponible
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
