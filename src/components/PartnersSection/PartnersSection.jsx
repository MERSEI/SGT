import React from "react";
import styles from "./PartnersSection.module.scss";

import cyberdev from "../../assets/partners/cyberdev.webp";
import onepx from "../../assets/partners/onepx.webp";
import nomis from "../../assets/partners/Nomis.webp";
import twoPMarketing from "../../assets/partners/2PMarketing.webp";
import codify from "../../assets/partners/codify.webp";

const partners = [
  { name: "CYRERWER.DEV", src: cyberdev },
  { name: "ONEPX", src: onepx },
  { name: "Nomis", src: nomis },
  { name: "2PMarketing", src: twoPMarketing },
  { name: "codify", src: codify },
];

const PartnersSection = () => {
  return (
    <section className={styles.partners}>
      <h2 className={styles.title}>НАШИ ПАРТНЕРЫ</h2>
      <div className={styles.logosWrapper}>
        <div className={styles.logos}>
          {[...partners, ...partners].map(({ name, src }, index) => (
            <img
              key={index}
              src={src}
              alt={name}
              className={styles.logo}
              draggable={false}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
// This code defines a React component for displaying a section of partners with their logos.
