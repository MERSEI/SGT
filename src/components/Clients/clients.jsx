import React from "react";
import styles from "./clients.module.scss";

import client2 from "../../assets/clients/bilain.webp";
import client1 from "../../assets/clients/pid.webp";
import client6 from "../../assets/clients/siemen.webp";
import client3 from "../../assets/clients/Nomis.webp";
import client4 from "../../assets/clients/streeth.webp";
import client5 from "../../assets/clients/mts.webp";

const clients = [
  { name: "PID", src: client1 },
  { name: "Beeline", src: client2 },
  { name: "Nomis", src: client3 },
  { name: "Street", src: client4 },
  { name: "MTS", src: client5 },
  { name: "Siemens", src: client6 },
];

const Clients = () => {
  return (
    <section className={styles.clients}>
      <h2 className={styles.title}>НАШИ КЛИЕНТЫ</h2>
      <div className={styles.logosWrapper}>
        <div className={styles.logos}>
          {Array.from({ length: 500 }, (_, setIndex) =>
            clients.map(({ name, src }, logoIndex) => (
              <img
                key={`${name}-${setIndex}-${logoIndex}`}
                src={src}
                alt={name}
                className={styles.logo}
                draggable={false}
              />
            ))
          ).flat()}
        </div>
      </div>
    </section>
  );
};

export default Clients;
