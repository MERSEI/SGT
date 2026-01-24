import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import styles from "./ConsultingSection.module.scss";

const planVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.8 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
      type: "spring",
      stiffness: 100,
    },
  }),
};

const blockVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.18 + 0.6, duration: 0.7, ease: "easeOut" },
  }),
};

const ConsultingSection = () => {
  const plans = [
    {
      title: "Free",
      list: ["Обсуждение потребностей", "Определение первых шагов"],
      price: "0$",
      highlighted: false,
    },
    {
      title: "Standard",
      list: [
        "Анализ текущей ситуации",
        "Рекомендации и стратегия",
        "Поддержка внедрения",
      ],
      price: "250$",
      highlighted: true,
    },
    {
      title: "Exclusive",
      list: ["Персонализированный план", "Непрерывная поддержка"],
      price: "1000$",
      highlighted: false,
    },
  ];

  const blocks = [
    {
      title: "Разработка",
      list: [
        "Брифинг",
        "Проектирование",
        "Тестирование",
        "Сопровождение",
        "Анализ",
        "Разработка",
        "Внедрение",
      ],
    },
    {
      title: "Консультация",
      list: [
        "Анализ и проектирование",
        "Разработка и тестирование",
        "Внедрение и поддержка",
      ],
    },
    {
      title: "Аутстафф",
      list: [
        "Формируем бриф",
        "Оценка наших специалистов",
        "Заключаем договор",
        "Выдача специалиста",
        "Подбор специалистов под требования",
      ],
    },
  ];

  return (
    <motion.section
      className={styles.consulting}
      id="consulting"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className={styles.container}>
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          ДОПОЛНИТЕЛЬНЫЕ
          <br />
          ПРЕДЛОЖЕНИЯ
          <br />
          КОНСАЛТИНГА
        </motion.h2>

        <div className={styles.plans}>
          {plans.map((plan, i) => (
            <motion.div
              key={plan.title}
              className={`${styles.plan} ${
                plan.highlighted ? styles.highlighted : ""
              }`}
              custom={i}
              variants={planVariants}
              initial="hidden"
              whileInView="visible"
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.3 },
              }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <h3>{plan.title}</h3>
              <ul>
                {plan.list.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <div className={styles.price}>{plan.price}</div>
            </motion.div>
          ))}
        </div>

        <div className={styles.bottomBlocks}>
          {blocks.map((block, i) => (
            <motion.div
              key={block.title}
              className={styles.block}
              custom={i}
              variants={blockVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <h4>{block.title}</h4>
              <ul>
                {block.list.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.p
          className={styles.note}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.2, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          Коммерческое предложение будет составлено после консультации,
          <br />
          анализа проекта и технического задания.
        </motion.p>
      </div>
    </motion.section>
  );
};

export default ConsultingSection;
