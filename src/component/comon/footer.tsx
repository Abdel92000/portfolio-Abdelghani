import React from 'react';
import styles from '../../assets/css/common/footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer} id='footer'>
      <p>&copy; {new Date().getFullYear()} Rahal Abdelghani. Tous droits réservés.</p>
      <div className={styles.socials}>
        <a href="" target="_blank" >LinkedIn</a>
        <a href="mailto:Abdelghani.rahal123@gmail.com">Email</a>
      </div>
    </footer>
  );
};

export default Footer;
