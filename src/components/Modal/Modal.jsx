import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Modal.module.scss";
import { useLockBodyScroll } from "../../hooks/useLockBodyScroll";

const BACKDROP_VARIANTS = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.25, ease: "easeIn" },
  },
};

const MODAL_VARIANTS = {
  hidden: {
    opacity: 0,
    scale: 0.85,
    y: 60,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    y: 40,
    transition: {
      duration: 0.3,
      ease: [0.7, 0, 0.84, 0],
    },
  },
};

const CONTENT_VARIANTS = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

const Modal = ({ open, onClose, children }) => {
  useLockBodyScroll(open);

  // Закрытие по Escape
  React.useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && open) {
        onClose();
      }
    };

    if (open) {
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className={styles.modal__overlay}
          variants={BACKDROP_VARIANTS}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={onClose}
          tabIndex={-1}
          style={{ zIndex: 1000 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <motion.div
            className={styles.modal__window}
            variants={MODAL_VARIANTS}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.modal__frame}>
              <button
                className={styles.modal__closeCircle}
                onClick={onClose}
                aria-label="Закрыть модальное окно"
                type="button"
              >
                <span className={styles.modal__closeIcon}>×</span>
              </button>

              <motion.div
                className={styles.modal__inner}
                variants={CONTENT_VARIANTS}
                initial="hidden"
                animate="visible"
              >
                {children}
              </motion.div>

              <motion.div
                className={styles.modal__footer}
                variants={CONTENT_VARIANTS}
                initial="hidden"
                animate="visible"
              >
                <div className={styles.modal__footerLine}></div>
                <button
                  className={styles.modal__footerBtn}
                  onClick={() => {
                    const section = document.getElementById("ContactSection");
                    if (section) {
                      section.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }
                    onClose?.();
                  }}
                  type="button"
                >
                  Хочу так же
                </button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
