import styles from '../../assets/css/home/Skillss.module.css'

const Skills = () => {
  return (
    <section id="skills" className={styles.skillsSection}>
      <h2 className={styles.title}>Mes compétences</h2>

      <div className={styles.grid}>
        <div className={styles.category}>
          <h3>Frontend</h3>
          <ul>
            <li>React.js</li>
            <li>TypeScript</li>
            <li>HTML / CSS / Sass</li>
            <li>JavaScript</li>
          </ul>
        </div>

        <div className={styles.category}>
          <h3>Backend</h3>
          <ul>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MongoDB</li>
            <li>MySQL</li>
          </ul>
        </div>

        <div className={styles.category}>
          <h3>Outils</h3>
          <ul>
            <li>Git / GitHub</li>
            <li>Figma</li>
            <li>Docker</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
