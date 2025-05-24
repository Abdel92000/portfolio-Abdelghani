import styles from '../assets/css/common/Mentions.module.css';

const MentionsLegales = () => {
  return (
    <section className={styles.mentions}>
      <h1>Mentions légales</h1>

      <h2>Éditeur du site</h2>
      <p>
        Nom : Rahal Abdelghani<br />
        Statut : Développeur web freelance<br />
        Adresse : Paris, France<br />
        Email : abdelghani.rahal123@gmail.com<br />
        Site : <a href="https://www.abdelghani-dev.fr">www.abdelghani-dev.fr</a>
      </p>

      <h2>Hébergement</h2>
      <p>
        Nom : Vercel Inc.<br />
        Adresse : 440 N Barranca Ave #4133, Covina, CA 91723, USA<br />
        Site : <a href="https://vercel.com">vercel.com</a>
      </p>

      <h2>Propriété intellectuelle</h2>
      <p>
        L’ensemble des contenus (textes, images, code, logo) présents sur le site
        <strong> abdelghani-dev.fr </strong> sont la propriété exclusive de Rahal Abdelghani, sauf indication contraire.
        Toute reproduction, distribution, modification ou utilisation sans autorisation est interdite.
      </p>

      <h2>Cookies et données personnelles</h2>
      <p>
        Ce site ne collecte pas de données personnelles sans votre consentement. Aucun cookie de suivi n’est utilisé à des fins publicitaires.
      </p>

      <h2>Contact</h2>
      <p>
        Pour toute question ou signalement, vous pouvez me contacter à :<br />
        <a href="mailto:abdelghani.rahal123@gmail.com">abdelghani.rahal123@gmail.com</a>
      </p>
    </section>
  );
};

export default MentionsLegales;
