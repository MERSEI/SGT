import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import styles from "./TeamSection.module.scss";
import imgVlad from "../../assets/team/vladislav.webp";
import imgPavel from "../../assets/team/pavel.webp";

const memberVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.96 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, delay: i * 0.18, ease: "easeOut" },
  }),
  hover: {
    scale: 1.03,
    boxShadow: "0 0 24px #17b24b55",
    transition: { duration: 0.3 },
  },
};

const TeamSection = () => {
  const members = [
    {
      img: imgVlad,
      name: "Владислав Гладских",
      role: "CEO/Founder Syndicate Group Technology",
      bio: (
        <>
          Владислав — Основатель и генеральный директор. Обладает обширным
          опытом в IT и отвечает за стратегическое развитие компании и
          управление проектами.
        </>
      ),
    },
    {
      img: imgPavel,
      name: "Павел Валентов",
      role: "CTO Web/Web3 Syndicate Group Technology",
      bio: (
        <>
          Павел курирует проекты в области Web2.0–3.0/AI, внедряя инновации и
          развивая тех. инфраструктуру. Имеет опыт в блокчейне и
          децентрализованных приложениях.
        </>
      ),
    },
  ];

  return (
    <section className={styles.team} id="TeamSection">
      <motion.h2
        className={styles.title}
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        НАША КОМАНДА
      </motion.h2>

      {members.map((member, i) => (
        <motion.div
          className={styles.member}
          key={member.name}
          custom={i}
          variants={memberVariants}
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          viewport={{ once: true, amount: 0.2 }}
        >
          <img src={member.img} alt={member.name} className={styles.photo} />
          <div className={styles.info}>
            <h3 className={styles.name}>{member.name}</h3>
            <p className={styles.role}>{member.role}</p>
            <p className={styles.bio}>{member.bio}</p>
          </div>
        </motion.div>
      ))}
    </section>
  );
};

export default TeamSection;
