import React from "react";
import styles from "./FooterSection.module.scss";
import logo from "../../assets/logo.svg";

const FooterSection = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        <img src={logo} alt="SGT Logo" className={styles.logo} />
        <div className={styles.contacts}>
          <h3>КОНТАКТЫ</h3>
          <a href="https://t.me/AskeladdEnd" target="_blank" rel="noreferrer">
            t.me/AskeladdEnd
          </a>
          <p>+7 (919) 540-86-53</p>
        </div>
      </div>
      <div className={styles.right}>
        <p>Политика конфиденциальности</p>
        <p>Договор оферты</p>
        <p>ИП Гладских Владислав Юрьевич ИНН 343535124727</p>
      </div>
    </footer>
  );
};

export default FooterSection;
