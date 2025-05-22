import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from '../../assets/css/home/Contact.module.css';
import confetti from 'canvas-confetti';


confetti(); 

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [success, setSuccess] = useState(false);

  const sendEmail = async (e: React.FormEvent) => {
  e.preventDefault();
  if (!form.current) return;

  try {
    // await emailjs.sendForm(
    //   process.env.REACT_APP_EMAILJS_SERVICE_ID!,
    //   process.env.REACT_APP_EMAILJS_TEMPLATE_ID!,
    //   form.current,
    //   process.env.REACT_APP_EMAILJS_PUBLIC_KEY!
    // );
    await emailjs.sendForm(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  form.current,
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY
);


    setSuccess(true); 
    form.current.reset();
    confetti({
  particleCount: 100,
  spread: 80,
  origin: { y: 0.6 }
});

  } catch (error) {
    console.error("Erreur EmailJS ❌ :", error);
  }
};


  return (
    <section id="footer" className={styles.contactSection}>
      <h2 className={styles.title}>Me contacter</h2>

      <form ref={form} onSubmit={sendEmail} className={styles.form}>
        <input type="text" name="name" placeholder="Votre nom" required />
        <input type="email" name="email" placeholder="Votre email" required />
        <textarea name="title" placeholder="Votre message" rows={5} required />
        <button type="submit">Envoyer</button>

        {success && <p className={styles.confirmation}>✅ Merci, votre message a été envoyé !</p>}
      </form>
    </section>
  );
};

export default Contact;
