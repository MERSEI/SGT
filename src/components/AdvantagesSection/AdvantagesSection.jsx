import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import styles from "./AdvantagesSection.module.scss";

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: "easeOut" },
  }),
};

const AdvantagesSection = () => {
  return (
    <motion.section
      className={styles.advantages}
      id="advantages"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <h2 className={styles.title}>НАШИ ПРЕИМУЩЕСТВА</h2>
      <div className={styles.grid}>
        {[
          {
            title: "Командная работа",
            text: "Внутри компании работают 15 команд, каждая из которых специализируется на выполнении проектов наших клиентов, обеспечивая гибкость, оперативность и большой спектр решений задач.",
          },
          {
            title: "Экспертность",
            text: "Наши команды состоят из высококвалифицированных специалистов, которые имеют опыт работы в крупных IT-компаниях по всему миру, и готовы решать сложные задачи наших клиентов.",
          },
          {
            title: "Индивидуальный подход",
            text: "Специалисты SGT не только слышат наших клиентов, но и понимают их, что помогает учитывать уникальные потребности каждого клиента.",
          },
          {
            title: "Прозрачность",
            text: "Клиент может отслеживать все этапы работы и их результаты с помощью открытой системы.",
          },
        ].map((item, i) => (
          <motion.div
            className={styles.card}
            key={item.title}
            custom={i}
            variants={cardVariants}
          >
            <h3 className={styles.cardTitle}>{item.title}</h3>
            <p>{item.text}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default AdvantagesSection;
