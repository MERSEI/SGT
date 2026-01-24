import React from "react";
import styles from "./About.module.scss";
import hexs from "../../assets/hexagones/hexs.svg";

const About = () => {
  return (
    <section id="About" className={styles.About}>
      <div className={styles.content}>
        <div className={styles.textBlock}>
          <h2 className={styles.title}>КТО МЫ</h2>
          <p>
            <span className={styles.highlight}>Syndicate Group Technology</span>{" "}
            — компания, которая даёт бизнесам достичь успеха через IT-решения
          </p>
          <p>
            Наши основные отрасли B2B Ecom/EdTech/Intech/HRTech/PropTech/
            Retail/Community
          </p>
          <p>
            Помогаем компаниям реализовывать премиальные IT-продукты, закрывать
            вопросы по нехватке IT специалистов и радоваться результатам.
          </p>
          <p>
            С нами вы получите поддержку опытных профессионалов и доступ к
            новейшим технологиям
          </p>
        </div>
        <img src={hexs} alt="Hex background" className={styles.hexImage} />
      </div>
    </section>
  );
};

export default About;
