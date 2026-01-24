import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import styles from "./OutstaffSection.module.scss";
import schemaImg from "../../assets/schema.webp";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const schemaCardVariants = {
  hidden: { opacity: 0, x: 60, scale: 0.96 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.8, ease: "backOut" },
  },
};

const imgVariants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -8 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.8, delay: 0.3, ease: "backOut" },
  },
};

const btnVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.7, ease: "easeOut" },
  },
  hover: {
    scale: 1.06,
    boxShadow: "0 0 18px #17b24b",
    transition: { duration: 0.2 },
  },
};

const ServicesOutstaff = () => {
  return (
    <motion.section
      className={styles.outstaff}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.h2
        className={styles.outstaff__title}
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        НАШИ УСЛУГИ ПО АУТСТАФФУ
      </motion.h2>
      <div className={styles.outstaff__grid}>
        {/* Левая часть */}
        <motion.div
          className={styles.outstaff__left}
          variants={containerVariants}
        >
          <motion.div
            className={styles.outstaff__cardLarge}
            variants={cardVariants}
          >
            <h3>ПОДБИРАЕМ СПЕЦИАЛИСТА ЗА 24 ЧАСА</h3>
            <p>
              Точный отчетный период определяете вы.
              <br />
              Оперативную информацию всегда можно запросить у HRBP
            </p>
          </motion.div>
          <div className={styles.outstaff__bottomRow}>
            <motion.div
              className={styles.outstaff__card}
              variants={cardVariants}
            >
              <h3>ПРЕДОСТАВЛЯЕМ ВЫДЕЛЕННЫЕ КОМАНДЫ</h3>
              <p>
                У нас есть уже сработавшиеся группы специалистов, которым не
                нужно время для адаптации друг к другу.
              </p>
            </motion.div>
            <motion.div
              className={styles.outstaff__card}
              variants={cardVariants}
            >
              <h3>ДАЕМ КОМПЛЕКСНУЮ ГАРАНТИЮ</h3>
              <p>
                Работаем по SLA и заключаем договор, в рамках которого несем
                финансовую ответственность за несоблюдение его условий. Имеем
                официальную госаккредитацию.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Правая часть */}
        <motion.div
          className={styles.outstaff__schemaCard}
          variants={schemaCardVariants}
        >
          <h3>ПОДРОБНАЯ ИНФОРМАЦИЯ ПО УСЛУГАМ АУТСТАФФ ОТ SGT</h3>
          <p>
            Для того чтоб узнать подробнее, перейдите в раздел по услугам
            аутстафф
          </p>
          <motion.div className={styles.schema} variants={imgVariants}>
            <motion.img
              src={schemaImg}
              alt="Схема взаимодействия"
              variants={imgVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            />
          </motion.div>
          <motion.button
            className={styles.btn}
            variants={btnVariants}
            whileHover="hover"
            onClick={() => {
              const el = document.getElementById("ContactSection");
              if (el) {
                el.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Узнать больше
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ServicesOutstaff;
