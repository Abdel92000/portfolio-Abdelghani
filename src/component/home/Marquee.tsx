import { motion } from "framer-motion";
import styles from "../../assets/css/home/Marque.module.css";

const Marquee = () => {
  return (
    <div className={styles.wrapper}>
      <motion.div
        className={styles.track}
        animate={{ x: ["100%", "-100%"] }}
        transition={{
          repeat: Infinity,
           duration: 6,
          ease: "linear",
        }}
      >
        <span> Passionné de code, je cherche une alternance en développement web dès septembre 2025 ! </span>
      </motion.div>
    </div>
  );
};

export default Marquee;
