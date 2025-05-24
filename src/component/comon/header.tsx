import  { useState } from 'react'
import styles from '../../assets/css/common/header.module.css'
const Header = () =>{

   const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollTo = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); 
    }
  };
 

  return <>

  <nav className={styles.nav}>
    <div className={styles.logo}>
   
    </div>


      <div className={styles.burger} onClick={toggleMenu}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>

    <div className={`${styles.link} ${isOpen ? styles.active : ''}`}>
      <ul>
        
          <li onClick={() => scrollTo('presentation')}>Accueil</li>
          <li onClick={() => scrollTo('projects')}>Mes projects</li>
          <li onClick={() => scrollTo('skills')}>Mes skills</li>
          <li onClick={() => scrollTo('footer')}>Contact</li>
          <li onClick={() => scrollTo('FAQ')}>FAQ</li>

      </ul>
    </div>

  </nav>
    
    

  </>
}

export default Header