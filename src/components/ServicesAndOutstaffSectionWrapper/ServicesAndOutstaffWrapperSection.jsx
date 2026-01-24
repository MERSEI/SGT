import styles from "./ServicesAndOutstaffSectionWrapper.module.scss";
import linesBck from "../../assets/lines_bck.svg";
import ServicesSection from "../Services/ServicesSection";
import OutstaffSection from "../OutstaffSection/OutstaffSection";

const ServicesAndOutstaffWrapper = () => (
  <section className={styles.wrapper}>
    <img
      src={linesBck}
      alt=""
      className={styles.linesBck}
      aria-hidden="true"
      draggable={false}
    />
    {/* Светящиеся точки */}
    <div className={styles.glowDot} style={{ top: "322px", right: "130px" }} />
    <div className={styles.glowDot} style={{ top: "54%", right: "15.5%" }} />

    <ServicesSection />
    <OutstaffSection />
  </section>
);

export default ServicesAndOutstaffWrapper;
