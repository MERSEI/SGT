import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import styles from "./Hero.module.scss";
import main_logo from "../../assets/SGT.svg";

const mainLogoVariants = {
  hidden: { opacity: 0, scale: 0.7, y: 40, rotate: -10 },
  visible: {
    opacity: 1,
    scale: [1, 1.12, 1],
    y: 0,
    rotate: [0, 8, 0],
    transition: {
      duration: 1.3,
      ease: "easeInOut",
      delay: 0.4,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: 0.8, ease: "easeOut" },
  },
};

const spanVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.9, delay: 1.1, ease: "backOut" },
  },
  hover: {
    scale: 1.08,
    textShadow: "0 0 18px #17b24b, 0 0 32px #17b24b88",
    color: "#17b24b",
    transition: { duration: 0.3 },
  },
};

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("ContactSection");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.section className={styles.hero} initial="hidden" animate="visible">
      <div className={styles.content}>
        <div className={styles.logoWrapper}>
          <motion.img
            src={main_logo}
            alt="SGT"
            className={styles.main_logo}
            variants={mainLogoVariants}
            initial="hidden"
            animate="visible"
          />
        </div>

        <div className={styles.textBlock}>
          <motion.p className={styles.text} variants={textVariants}>
            Предоставляем услуги по
            <br /> разработке и сопровождению продукта для B2B
          </motion.p>
          <motion.p className={styles.click}>
            <motion.span
              className={styles.link}
              style={{ cursor: "pointer" }}
              variants={spanVariants}
              whileHover="hover"
              onClick={scrollToContact}
            >
              Передайте всю техническую работу нам!
            </motion.span>
          </motion.p>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
