import React from 'react';
import styles from '../../assets/css/common/footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className={styles.footer} id='footer'>
      <p>&copy; {new Date().getFullYear()} Rahal Abdelghani. Tous droits réservés.</p>
      <div className={styles.socials}>
        <a href="https://www.linkedin.com/in/abdelghani-rahal/" target="_blank" rel="noopener noreferrer">  <FontAwesomeIcon icon={faLinkedin} style={{height:"30px"}}/></a>
        <a href="/mentions-legales" target="_blank" rel="noopener noreferrer">Mentions légales</a>

      </div>
    </footer>
  );
};

export default Footer;
