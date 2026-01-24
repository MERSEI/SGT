import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import styles from "./SpecialOffersSection.module.scss";
import cardBg from "../../assets/Town_bck.webp";
import linesBck from "../../assets/lines_bck.svg";

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, delay: i * 0.18, ease: "easeOut" },
  }),
  hover: {
    scale: 1.04,
    boxShadow: "0 0 32px #17b24b88",
    transition: { duration: 0.3 },
  },
};

const SpecialOffersSection = () => {
  return (
    <section className={styles.specialOffers}>
      <img
        src={linesBck}
        alt=""
        className={styles.linesBck}
        aria-hidden="true"
        draggable={false}
      />
      <motion.h2
        className={styles.title}
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        СПЕШЛ ОФФЕР
      </motion.h2>
      <div className={styles.cards}>
        {[
          {
            title: "РАЗРАБОТКА ФУНКЦИОНАЛА",
            subtitle: (
              <>
                ПОЛУЧИТЕ ГОТОВЫЙ
                <br />
                ФУНКЦИОНАЛ ПО УНИКАЛЬНОЙ ЦЕНЕ!
              </>
            ),
            text: (
              <>
                <p>
                  <strong>Полный цикл:</strong> от анализа до реализации
                </p>
                <p>
                  <strong>Эксклюзивные условия:</strong> для наших клиентов
                  действуют всегда
                </p>
                <p>
                  <strong>Гарантия качества:</strong> профессиональная команда
                  <br />и передовые технологии
                </p>
              </>
            ),
          },
          {
            title: "КОМПЛЕКСНАЯ РАЗРАБОТКА",
            subtitle: (
              <>
                ПОЛУЧИТЕ ГОТОВЫЙ ПРОДУКТ
                <br />
                ПОД КЛЮЧ ПО УНИКАЛЬНОЙ ЦЕНЕ!
              </>
            ),
            text: (
              <>
                <p>
                  <strong>Полный цикл:</strong> от идеи до запуска и поддержки
                </p>
                <p>
                  <strong>Эксклюзивные условия:</strong> для наших клиентов
                  действуют всегда
                </p>
                <p>
                  <strong>Гарантия качества:</strong> профессиональная команда
                  <br />и передовые технологии
                </p>
              </>
            ),
          },
        ].map((card, i) => (
          <motion.div
            className={styles.card}
            key={card.title}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div
              className={styles.cardBg}
              style={{
                backgroundImage: `linear-gradient(270deg, #17B24B 9.22%, rgba(23, 178, 75, 0) 100.87%), url(${cardBg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />

            <h3 className={styles.cardTitle}>{card.title}</h3>
            <p className={styles.subtitle}>{card.subtitle}</p>
            <div className={styles.cardText}>{card.text}</div>
            <button
              className={styles.button}
              onClick={() => {
                const el = document.getElementById("ContactSection");
                if (el) {
                  el.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Хочу
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SpecialOffersSection;
