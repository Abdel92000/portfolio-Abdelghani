import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../../assets/css/common/header.module.css'

const Header = () =>{
  const scrollToProjects = () => {
    const section = document.getElementById('projects');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToFooter = () => {
    const section = document.getElementById('footer');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  
  const scrollToPresentation= () => {
    const section = document.getElementById('presentation');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return <>

  <nav className={styles.nav}>
    <div className={styles.logo}>
      <p>Rahal Abdelghani</p>
    </div>

    <div className={styles.link}>
      <ul>
        <li onClick={scrollToPresentation}>Accueil</li>
        <li onClick={scrollToProjects}>Mes projects</li>
        <li>Mes skills</li>
        <li onClick={scrollToFooter}>Contact</li>
      </ul>
    </div>

  </nav>
    
    

  </>
}

export default Header