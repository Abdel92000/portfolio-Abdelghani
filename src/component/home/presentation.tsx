import React from 'react';
import styles from '../../assets/css/home/presentation.module.css';
import imgAbdel from '../../assets/img/imgAbdelghani.jpg';

const Presentation = () => {
  const scrollToProjects = () => {
    const section = document.getElementById('projects');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
        <h2 className={styles.bienvenue} >Bienvenue</h2>

    <section className={styles.presentation} id='presentation'>

      <div className={styles.presentation2}>
      <div className={styles.left}>
        <img src={imgAbdel} alt="Photo de Rahal Abdelghani" />
      </div>
      <div className={styles.right}>
        <h2>Bonjour, je suis Rahal Abdelghani</h2>
        <p>
        Développeur web et mobile passionné, je conçois des interfaces modernes, intuitives et performantes, adaptées à tous les supports. Découvrez comment je peux valoriser votre projet grâce à mes réalisations concrètes.
        </p>
        <button onClick={scrollToProjects} className={styles.cta}>
          Voir mes projets ↓
        </button>
      </div>
      </div>
    </section>


    </>
    
  );
};

export default Presentation;
