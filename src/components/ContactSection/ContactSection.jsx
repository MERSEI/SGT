import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import styles from "./ContactSection.module.scss";
import qrCode from "../../assets/qr.webp";

const formVariants = {
  hidden: { opacity: 0, x: -80, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const qrBlockVariants = {
  hidden: { opacity: 0, x: 80, scale: 0.95, rotate: -8 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.9, ease: "backOut", delay: 0.2 },
  },
};

const qrImageVariants = {
  hidden: { scale: 0, rotate: -90, opacity: 0 },
  visible: {
    scale: 1,
    rotate: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 260, damping: 18, delay: 0.5 },
  },
};

const ContactSection = () => {
  return (
    <motion.section
      className={styles.contactSection}
      id="ContactSection"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h2
        className={styles.title}
        initial={{ opacity: 0, y: -40, scale: 0.8 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: "anticipate" }}
        viewport={{ once: true }}
      >
        ФОРМА ОБРАТНОЙ СВЯЗИ
      </motion.h2>
      <div className={styles.container}>
        <motion.form
          className={styles.form}
          variants={formVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.input
            type="text"
            placeholder="ФИО"
            whileFocus={{ scale: 1.04, boxShadow: "0 0 12px #17b24b88" }}
          />
          <motion.input
            type="text"
            placeholder="Контакты"
            whileFocus={{ scale: 1.04, boxShadow: "0 0 12px #17b24b88" }}
          />
          <motion.input
            type="text"
            placeholder="Наименование компании"
            whileFocus={{ scale: 1.04, boxShadow: "0 0 12px #17b24b88" }}
          />
          <motion.input
            type="text"
            placeholder="Должность"
            whileFocus={{ scale: 1.04, boxShadow: "0 0 12px #17b24b88" }}
          />
          <motion.textarea
            placeholder="Описание"
            whileFocus={{ scale: 1.03, boxShadow: "0 0 12px #17b24b88" }}
          />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05, boxShadow: "0 0 24px #17b24b" }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Отправить
          </motion.button>
        </motion.form>
        <motion.div
          className={styles.qrBlock}
          variants={qrBlockVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.img
            src={qrCode}
            alt="QR Code"
            className={styles.qrImage}
            variants={qrImageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          />
          <motion.p
            className={styles.qrTitle}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            viewport={{ once: true }}
          >
            Мы готовы к сотрудничеству
          </motion.p>
          <motion.p
            className={styles.qrSubtitle}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            viewport={{ once: true }}
          >
            Свяжитесь с нами для быстрого старта сотрудничества.
          </motion.p>
          <motion.p
            className={styles.qrContact}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <a href="https://t.me/AskeladdEnd">t.me/AskeladdEnd</a>
          </motion.p>
          <motion.p
            className={styles.qrPhone}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.5 }}
            viewport={{ once: true }}
          >
            +7(919)540-86-53
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ContactSection;
