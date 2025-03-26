import React from 'react';
import styles from '../../assets/css/home/projects.module.css';
import imgFratellino from "../../assets/img/imgFratellino.png"
import imgmeteo from "../../assets/img/imgmeteo.png"
import Skills from './skills';
const projects = [
  {
    title: 'Application météo moderne',
    description: 'Application React avec API météo, responsive et géolocalisation intégrée.',
    image: imgmeteo,
    link: 'https://abdel92000.github.io/Site-Meteo/',
    isAvailable: true
  },
  {
    title: 'Site e-commerce pour une pizzeria',
    description: "Réalisation complète d’un site e-commerce moderne pour une pizzeria avec menu dynamique, système de prise de commande en ligne, gestion du panier, interface administrateur pour le suivi des commandes, et intégration d’un backend sécurisé. Projet conçu de A à Z avec React, TypeScript, Node.js et base de données.",
    image: imgFratellino,
    link: '#',
    isAvailable: false
  }
];


const scrollToProjects = () => {
  const section = document.getElementById('skills');
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};
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
              {project.isAvailable ? (
  <a href={project.link} target="_blank" rel="noopener noreferrer">
    <button className={styles.BtnVoirLeSite}>Voir le site</button>
  </a>
) : (
  <button className={styles.BtnVoirLeSite} disabled style={{ cursor: 'not-allowed', opacity: 0.9 }}>
    Pas encore disponible
  </button>
)}            </div>
          </div>
        ))}
      </div>

     <Skills />
    </section>
  );
};

export default Projects;
