import styles from "../../assets/css/home/Faq.module.css";

const questions = [
  {
    question: "Quelles technologies utilises-tu ?",
    answer: "React, TypeScript, Node.js, MongoDB, Docker, CI/CD, GitHub Actions.",
  },
  {
    question: "Es-tu disponible pour une alternance ?",
    answer: "Oui, dès septembre 2025 à Paris. Je suis en formation CDA (DevOps).",
  },
  {
    question: "Proposes-tu des sites pour PME/freelances ?",
    answer: "Oui. Sites modernes, performants et adaptés à leurs besoins.",
  },
  {
    question: "Comment te contacter ?",
    answer: "Via le formulaire ou par mail à abdelghani.rahal123@gmail.com.",
  },
];



const Faq = () => (
  <section className={styles.section} id="FAQ">
    <h2>Foire aux questions</h2>
    {questions.map((item, i) => (
      <div key={i} className={styles.faqItem}>
        <h3>{item.question}</h3>
        <p>{item.answer}</p>
      </div>
    ))}
  </section>
);

export default Faq;
