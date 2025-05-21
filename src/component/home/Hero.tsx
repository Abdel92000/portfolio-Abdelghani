import React from 'react';
import styles from '../../assets/css/home/Hero.module.css'
import imgAbdel from '../../assets/img/imgAbdelghani.jpg';

const Hero = () => {
  const scrollToProjects = () => {
    const section = document.getElementById('projects');
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const section = document.getElementById('footer');
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={styles.hero} id='presentation'>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <img src={imgAbdel} alt="Rahal Abdelghani" className={styles.avatar} />
          <h1>Salut, je suis <span>Rahal Abdelghani</span></h1>
        
<p>
Développeur web freelance basé à Paris. Je crée des sites internet modernes et des applications performantes.
</p>

          <div className={styles.buttons}>
            <button onClick={scrollToProjects}>Voir mes projets</button>
            <button onClick={scrollToContact} className={styles.secondary}>Me contacter</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
