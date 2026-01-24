import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Header.module.scss";
import logo from "../../assets/logo.svg";

const navLinks = [
  { href: "#About", label: "Кто мы" },
  { href: "#ServicesSection", label: "Услуги" },
  { href: "#advantages", label: "Преимущества" },
  { href: "#TeamSection", label: "Команда" },
  { href: "#ContactSection", label: "Связаться", isButton: true },
];

const Header = () => {
  const [hovered, setHovered] = useState(null);

  // Функция для скролла вверх
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.header
      className={styles.header}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className={styles.container}>
        <motion.img
          src={logo}
          alt="Syndicate Logo"
          className={styles.logo}
          style={{ cursor: "pointer" }}
          onClick={scrollToTop}
          whileHover={{
            scale: 1.12,
            rotate: 8,
            filter: "drop-shadow(0 0 12px #17b24b)",
          }}
          transition={{ type: "spring", stiffness: 300 }}
        />

        <nav className={styles.nav}>
          <ul className={styles.navList}>
            {navLinks.map((link, i) => (
              <motion.li
                key={link.label}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.12 + i * 0.09,
                  duration: 0.5,
                  ease: "easeOut",
                }}
                style={{ listStyle: "none" }}
              >
                <motion.a
                  href={link.href}
                  className={link.isButton ? styles.contactBtn : styles.navItem}
                  whileHover={
                    link.isButton
                      ? { scale: 1.07, boxShadow: "0 0 18px #17b24b" }
                      : { color: "#17b24b", scale: 1.08 }
                  }
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: "spring", stiffness: 350 }}
                >
                  {link.label}
                </motion.a>
                <AnimatePresence>
                  {hovered === i && !link.isButton && (
                    <motion.div
                      layoutId="nav-underline"
                      className={styles.underline}
                      initial={{ opacity: 0, scaleX: 0 }}
                      animate={{ opacity: 1, scaleX: 1 }}
                      exit={{ opacity: 0, scaleX: 0 }}
                      transition={{ duration: 0.25 }}
                    />
                  )}
                </AnimatePresence>
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
