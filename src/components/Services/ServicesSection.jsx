import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import styles from "./ServicesSection.module.scss";
import Software from "../../assets/cards/Software.webp";
import Ai from "../../assets/cards/Ai.webp";
import Mobile from "../../assets/cards/Mobile.webp";
import UI from "../../assets/cards/UI.webp";
import ModalSoftware from "../../assets/ModalSoftware.svg";
import Modal from "../Modal/Modal";

const services = [
  {
    title: "РАЗРАБОТКА ПО",
    background: Software,
    text: "Автоматизация и оптимизация IT-решений для вашего бизнеса.",
    button: "+",
    modal: (
      <div className={styles.modalSoftware}>
        <h2 className={styles.modalSoftware__title}>РАЗРАБОТКА ПО</h2>
        <div className={styles.modalSoftware__subtitle}>
          СОЗДАНИЕ КАЧЕСТВЕННОГО И ЭФФЕКТИВНОГО ПРОГРАММНОГО ОБЕСПЕЧЕНИЯ.
        </div>
        <div className={styles.modalSoftware__line}></div>
        <div className={styles.modalSoftware__desc}>
          Реализуем полный цикл разработки программного обеспечения, включая
          анализ требований, проектирование, разработку,
          <br /> тестирование и внедрение.
          <br />
          Команда SGT-специалистов внедряет индивидуальное, качественное и
          современное решение, соответствующее
          <br /> всем потребностям и целям клиентов.
        </div>

        <h3 className={styles.modalSoftware__blockTitle}>ЭТАПЫ РАБОТЫ</h3>
        <div className={styles.modalSoftware__stages}>
          <img
            src={ModalSoftware}
            alt="Этапы работы"
            className={styles.modalSoftware__svg}
          />
        </div>

        <h3 className={styles.modalSoftware__blockTitle}>
          ПРЕИМУЩЕСТВА КЛИЕНТОВ SGT
        </h3>
        <ul className={styles.modalSoftware__list}>
          <li>
            <span className={styles.modalSoftware__dot}></span>
            <b>Премиальность и скорость:</b> владение эксклюзивным продуктом,
            реализованным в быстрые сроки для эффективной прибыли вашего
            бизнеса.
          </li>
          <li>
            <span className={styles.modalSoftware__dot}></span>
            <b>Индивидуальный подход:</b> получение персонального предложения,
            действительно соответствующего потребности.
          </li>
          <li>
            <span className={styles.modalSoftware__dot}></span>
            <b>Профессионализм:</b> работа над проектом специалистами с
            многолетним опытом и высокими навыками.
          </li>
          <li>
            <span className={styles.modalSoftware__dot}></span>
            <b>Полная прозрачность:</b> отслеживание всех этапов работ и их
            результатов с помощью открытой системы.
          </li>
        </ul>

        <h3 className={styles.modalSoftware__blockTitle}>
          НАШИ СИЛЬНЫЕ СТОРОНЫ
        </h3>
        <div className={styles.modalSoftware__strongSides}>
          <div className={styles.modalSoftware__strongItem}>
            <span className={styles.modalSoftware__strongNum}>1</span>
            <div>
              <b>Гибкость и адаптивность:</b> используем гибкие методологии
              разработки, такие как agile, и создаем модульное ПО, что позволяет
              нам быстро адаптироваться к потребностям клиентов и внедрять новые
              функции.
            </div>
          </div>
          <div className={styles.modalSoftware__strongItem}>
            <span className={styles.modalSoftware__strongNum}>2</span>
            <div>
              <b>Современный и удобный интерфейс:</b> разрабатываем ПО с
              интуитивно понятным и привлекательным дизайном, который
              обеспечивает комфортный пользовательский опыт.
            </div>
          </div>
          <div className={styles.modalSoftware__strongItem}>
            <span className={styles.modalSoftware__strongNum}>3</span>
            <div>
              <b>Высокая скорость загрузки:</b> оптимизируем ПО для быстрой
              работы, что повышает производительность и удовлетворенность
              пользователей.
            </div>
          </div>
          <div className={styles.modalSoftware__strongItem}>
            <span className={styles.modalSoftware__strongNum}>4</span>
            <div>
              <b>Интеграция с другими системами:</b> разрабатываем ПО, которое
              легко интегрируется с другими системами и сервисами, что повышает
              функциональность и эффективность для вашего бизнеса.
            </div>
          </div>
        </div>

        <h3 className={styles.modalSoftware__blockTitle}>ЧТО МЫ ДЕЛАЕМ</h3>
        <div className={styles.modalSoftware__examples}>
          <div className={styles.modalSoftware__example}>
            <span>ПРИМЕР 1:</span>
            <span className={styles.modalSoftware__exampleText}>
              РАЗРАБОТКА ПО ДЛЯ CRM-СИСТЕМЫ
            </span>
          </div>
          <div className={styles.modalSoftware__example}>
            <span>ПРИМЕР 2:</span>
            <span className={styles.modalSoftware__exampleText}>
              СОЗДАНИЕ ПО ДЛЯ ВАШЕГО БИЗНЕСА (ИНТЕЛЛЕКТУАЛЬНЫЕ ОТЧЁТЫ,
              АНАЛИТИКА, ОБУЧЕНИЕ)
            </span>
          </div>
          <div className={styles.modalSoftware__example}>
            <span>ПРИМЕР 3:</span>
            <span className={styles.modalSoftware__exampleText}>
              РАЗРАБОТКА ПО ПОД МОБИЛЬНЫЕ ПРИЛОЖЕНИЯ
            </span>
          </div>
          <div className={styles.modalSoftware__example}>
            <span>ПРИМЕР 4:</span>
            <span className={styles.modalSoftware__exampleText}>
              РАЗРАБОТКА ПО ЭЛЕКТРОННОЙ КОММЕРЦИИ С ФУНКЦИЕЙ ОНЛАЙН-ОПЛАТЫ
            </span>
          </div>
          <div className={styles.modalSoftware__example}>
            <span>ПРИМЕР 5:</span>
            <span className={styles.modalSoftware__exampleText}>
              СОЗДАНИЕ ПО ДЛЯ ВНУТРЕННЕГО ДОКУМЕНТООБОРОТА
            </span>
          </div>
          <div className={styles.modalSoftware__example}>
            <span>ПРИМЕР 6:</span>
            <span className={styles.modalSoftware__exampleText}>
              РАЗРАБОТКА ИНТЕЛЛЕКТУАЛЬНОГО ОБЕСПЕЧЕНИЯ ДЛЯ АВТОМАТИЗАЦИИ
              БИЗНЕС-ПРОЦЕССОВ
            </span>
          </div>
        </div>

        <h3 className={styles.modalSoftware__blockTitle}>ЦЕНЫ</h3>
        <div className={styles.modalSoftware__prices}>
          <div className={styles.modalSoftware__priceBox}>
            <div className={styles.modalSoftware__priceTitle}>
              БАЗОВЫЙ ТАРИФ
            </div>
            <div className={styles.modalSoftware__priceValue}>от 1500$</div>
          </div>
          <div className={styles.modalSoftware__priceBox}>
            <div className={styles.modalSoftware__priceTitle}>
              ДОПОЛНИТЕЛЬНЫЕ УСЛУГИ
            </div>
            <div className={styles.modalSoftware__priceValue}>от 500$</div>
          </div>
        </div>

        <div className={styles.modalSoftware__footer}>
          <div className={styles.modalSoftware__footerLine}></div>
        </div>
      </div>
    ),
  },
  {
    title: "AI-РАЗРАБОТКА",
    background: Ai,
    text: "Внедрение интеллектуальных решений на основе искусственного интеллекта.",
    button: "+",
    modal: (
      <div className={styles.modalSoftware}>
        <h2 className={styles.modalSoftware__title}>AI-РАЗРАБОТКА</h2>
        <div className={styles.modalSoftware__subtitle}>
          СОЗДАНИЕ ИНТЕЛЛЕКТУАЛЬНЫХ РЕШЕНИЙ НА ОСНОВЕ ИСКУССТВЕННОГО ИНТЕЛЛЕКТА
        </div>
        <div className={styles.modalSoftware__line}></div>
        <div className={styles.modalSoftware__desc}>
          Реализуем полный цикл AI-разработки, включая анализ требований,
          проектирование, разработку, тестирование, внедрение решений.
          <br />
          Команда SGT-специалистов внедряет новейшие, современные и
          индивидуальные решения, соответствующие всем потребностям вашего
          бизнеса.
        </div>

        <h3 className={styles.modalSoftware__blockTitle}>ЭТАПЫ РАБОТЫ</h3>
        <div className={styles.modalSoftware__stages}>
          <img
            src={ModalSoftware}
            alt="Этапы работы"
            className={styles.modalSoftware__svg}
          />
        </div>

        <h3 className={styles.modalSoftware__blockTitle}>
          ПРЕИМУЩЕСТВА КЛИЕНТОВ SGT
        </h3>
        <ul className={styles.modalSoftware__list}>
          <li>
            <span className={styles.modalSoftware__dot}></span>
            <b>
              <span style={{ color: "#17b24b" }}>Премиальность и скорость</span>
              :
            </b>{" "}
            внедрение эксклюзивных решений реализовано в быстрые сроки для
            эффективной прибыли вашего бизнеса.
          </li>
          <li>
            <span className={styles.modalSoftware__dot}></span>
            <b>
              <span style={{ color: "#17b24b" }}>Индивидуальный подход</span>:
            </b>{" "}
            персонализированные предложения, соответствующие потребностям.
          </li>
          <li>
            <span className={styles.modalSoftware__dot}></span>
            <b>
              <span style={{ color: "#17b24b" }}>Профессионализм</span>:
            </b>{" "}
            работа над проектом только опытных специалистов.
          </li>
          <li>
            <span className={styles.modalSoftware__dot}></span>
            <b>
              <span style={{ color: "#17b24b" }}>Полная прозрачность</span>:
            </b>{" "}
            отслеживание всех этапов и результатов в открытой системе.
          </li>
        </ul>

        <h3 className={styles.modalSoftware__blockTitle}>
          НАШИ СИЛЬНЫЕ СТОРОНЫ
        </h3>
        <div className={styles.modalSoftware__strongSides}>
          <div className={styles.modalSoftware__strongItem}>
            <span className={styles.modalSoftware__strongNum}>1</span>
            <div>
              <b>Распознавание образов:</b> разрабатываем системы, которые могут
              распознавать объекты, лица, голос и другие данные.
            </div>
          </div>
          <div className={styles.modalSoftware__strongItem}>
            <span className={styles.modalSoftware__strongNum}>2</span>
            <div>
              <b>Интеллектуальный анализ данных:</b> разрабатываем алгоритмы,
              которые анализируют большие объёмы данных и находят ценные
              сведения.
            </div>
          </div>
          <div className={styles.modalSoftware__strongItem}>
            <span className={styles.modalSoftware__strongNum}>3</span>
            <div>
              <b>Автоматизация:</b> создаём решения, которые автоматизируют
              рутинные задачи, экономя время и ресурсы.
            </div>
          </div>
          <div className={styles.modalSoftware__strongItem}>
            <span className={styles.modalSoftware__strongNum}>4</span>
            <div>
              <b>Интеграция:</b> разрабатываем решения и модули, которые легко
              интегрируются с существующими системами и сервисами.
            </div>
          </div>
        </div>

        <h3 className={styles.modalSoftware__blockTitle}>ЧТО МЫ ДЕЛАЕМ</h3>
        <div className={styles.modalSoftware__examples}>
          <div className={styles.modalSoftware__example}>
            <span>ПРИМЕР 1:</span>
            <span className={styles.modalSoftware__exampleText}>
              АНАЛИТИКА ОТЗЫВОВ КЛИЕНТОВ ИЛИ ДАННЫХ ИЗ ВАШЕЙ CRM С
              ИСПОЛЬЗОВАНИЕМ AI
            </span>
          </div>
          <div className={styles.modalSoftware__example}>
            <span>ПРИМЕР 2:</span>
            <span className={styles.modalSoftware__exampleText}>
              СОЗДАНИЕ AI-ЧАТ-БОТОВ И СИСТЕМ ОБРАБОТКИ ЕСТЕСТВЕННОГО ЯЗЫКА ДЛЯ
              ПОДДЕРЖКИ КЛИЕНТОВ
            </span>
          </div>
          <div className={styles.modalSoftware__example}>
            <span>ПРИМЕР 3:</span>
            <span className={styles.modalSoftware__exampleText}>
              ИНТЕЛЛЕКТУАЛЬНЫЕ СИСТЕМЫ РАСПОЗНАВАНИЯ И ОБРАБОТКИ ИЗОБРАЖЕНИЙ И
              ВИДЕО
            </span>
          </div>
          <div className={styles.modalSoftware__example}>
            <span>ПРИМЕР 4:</span>
            <span className={styles.modalSoftware__exampleText}>
              СОЗДАНИЕ СИСТЕМ ПРЕДИКТИВНОЙ АНАЛИТИКИ ДЛЯ БИЗНЕСА НА ОСНОВЕ
              МАШИННОГО ОБУЧЕНИЯ
            </span>
          </div>
          <div className={styles.modalSoftware__example}>
            <span>ПРИМЕР 5:</span>
            <span className={styles.modalSoftware__exampleText}>
              АНАЛИЗ САЙТОВ И КОНКУРЕНТОВ С ИСПОЛЬЗОВАНИЕМ СБОРЩИКОВ И
              AI-МОДЕЛЕЙ
            </span>
          </div>
        </div>

        <h3 className={styles.modalSoftware__blockTitle}>ЦЕНЫ</h3>
        <div className={styles.modalSoftware__prices}>
          <div className={styles.modalSoftware__priceBox}>
            <div className={styles.modalSoftware__priceTitle}>
              БАЗОВЫЙ ТАРИФ
            </div>
            <div className={styles.modalSoftware__priceValue}>от 2500$</div>
          </div>
          <div className={styles.modalSoftware__priceBox}>
            <div className={styles.modalSoftware__priceTitle}>
              ДОПОЛНИТЕЛЬНЫЕ УСЛУГИ
            </div>
            <div className={styles.modalSoftware__priceValue}>от 600$</div>
          </div>
        </div>

        <div className={styles.modalSoftware__footer}>
          <div className={styles.modalSoftware__footerLine}></div>
        </div>
      </div>
    ),
  },
  {
    title: "МОБИЛЬНАЯ РАЗРАБОТКА",
    background: Mobile,
    text: "Создание современных и функциональных мобильных приложений.",
    button: "+",
    modal: (
      <div className={styles.modalSoftware}>
        <h2 className={styles.modalSoftware__title}>МОБИЛЬНАЯ РАЗРАБОТКА</h2>
        <div className={styles.modalSoftware__subtitle}>
          СОЗДАНИЕ СОВРЕМЕННЫХ И ФУНКЦИОНАЛЬНЫХ МОБИЛЬНЫХ ПРИЛОЖЕНИЙ
        </div>
        <div className={styles.modalSoftware__line}></div>
        <div className={styles.modalSoftware__desc}>
          Реализуем полный цикл мобильной разработки, включая анализ требований,
          проектирование, разработку, тестирование, внедрение решений.
          <br />
          Команда SGT-специалистов внедряет индивидуальное, качественное и
          современное решение, соответствующее всем потребностям и целям
          клиента.
        </div>

        <h3 className={styles.modalSoftware__blockTitle}>ЭТАПЫ РАБОТЫ</h3>
        <div className={styles.modalSoftware__stages}>
          <img
            src={ModalSoftware}
            alt="Этапы работы"
            className={styles.modalSoftware__svg}
          />
        </div>

        <h3 className={styles.modalSoftware__blockTitle}>
          ПРЕИМУЩЕСТВА КЛИЕНТОВ SGT
        </h3>
        <ul className={styles.modalSoftware__list}>
          <li>
            <span className={styles.modalSoftware__dot}></span>
            <b>
              Премиальность и <span style={{ color: "#17b24b" }}>скорость</span>
              :
            </b>{" "}
            владение эксклюзивным продуктом, реализованным в быстрые сроки для
            эффективной прибыли вашего бизнеса.
          </li>
          <li>
            <span className={styles.modalSoftware__dot}></span>
            <b>
              <span style={{ color: "#17b24b" }}>Индивидуальный подход</span>:
            </b>{" "}
            персонализированное предложение, соответствующее потребностям.
          </li>
          <li>
            <span className={styles.modalSoftware__dot}></span>
            <b>
              <span style={{ color: "#17b24b" }}>Профессионализм</span>:
            </b>{" "}
            работа над проектом опытных специалистов.
          </li>
          <li>
            <span className={styles.modalSoftware__dot}></span>
            <b>
              <span style={{ color: "#17b24b" }}>Полная прозрачность</span>:
            </b>{" "}
            отслеживание всех этапов и результатов в открытой системе.
          </li>
        </ul>

        <h3 className={styles.modalSoftware__blockTitle}>
          НАШИ СИЛЬНЫЕ СТОРОНЫ
        </h3>
        <div className={styles.modalSoftware__strongSides}>
          <div className={styles.modalSoftware__strongItem}>
            <span className={styles.modalSoftware__strongNum}>1</span>
            <div>
              <b>Интеграция с бизнесом и сервисами:</b> создаём приложения,
              которые легко интегрируются с облачными сервисами для удобной
              работы и совместной работы.
            </div>
          </div>
          <div className={styles.modalSoftware__strongItem}>
            <span className={styles.modalSoftware__strongNum}>2</span>
            <div>
              <b>Адаптивный дизайн:</b> ваши приложения будут корректно
              отображаться на устройствах разных типов и с разными диагоналями
              экрана.
            </div>
          </div>
          <div className={styles.modalSoftware__strongItem}>
            <span className={styles.modalSoftware__strongNum}>3</span>
            <div>
              <b>Высокая производительность:</b> оптимизируем приложения для
              быстрой работы и плавного взаимодействия.
            </div>
          </div>
          <div className={styles.modalSoftware__strongItem}>
            <span className={styles.modalSoftware__strongNum}>4</span>
            <div>
              <b>Пользовательский опыт:</b> используем лучшие UI/UX-решения для
              повышения вовлечённости пользователей.
            </div>
          </div>
        </div>

        <h3 className={styles.modalSoftware__blockTitle}>ЧТО МЫ ДЕЛАЕМ</h3>
        <div className={styles.modalSoftware__examples}>
          <div className={styles.modalSoftware__example}>
            <span>ПРИМЕР 1:</span>
            <span className={styles.modalSoftware__exampleText}>
              РАЗРАБОТКА МОБИЛЬНОГО ПРИЛОЖЕНИЯ ДЛЯ ИНТЕРНЕТ-МАГАЗИНА С
              ОНЛАЙН-ОПЛАТОЙ
              <br />
              Создание мобильного приложения для онлайн-продаж.
            </span>
          </div>
          <div className={styles.modalSoftware__example}>
            <span>ПРИМЕР 2:</span>
            <span className={styles.modalSoftware__exampleText}>
              СОЗДАНИЕ МОБИЛЬНОГО CRM-ПРИЛОЖЕНИЯ ДЛЯ БИЗНЕСА
              <br />
              Организация процессов и коммуникаций в компании.
            </span>
          </div>
          <div className={styles.modalSoftware__example}>
            <span>ПРИМЕР 3:</span>
            <span className={styles.modalSoftware__exampleText}>
              РАЗРАБОТКА МОБИЛЬНОГО ПРИЛОЖЕНИЯ ДЛЯ СЛУЖБЫ ДОСТАВКИ
              <br />
              Создание мобильного приложения для курьеров и клиентов службы
              доставки.
            </span>
          </div>
          <div className={styles.modalSoftware__example}>
            <span>ПРИМЕР 4:</span>
            <span className={styles.modalSoftware__exampleText}>
              СОЗДАНИЕ ПРИЛОЖЕНИЯ ДЛЯ ЛОЯЛЬНОСТИ И ПРОГРАММЫ БОНУСОВ
              <br />
              Запуск системы лояльности и бонусных баллов для клиентов компании.
            </span>
          </div>
          <div className={styles.modalSoftware__example}>
            <span>ПРИМЕР 5:</span>
            <span className={styles.modalSoftware__exampleText}>
              РАЗРАБОТКА МОБИЛЬНОГО ПРИЛОЖЕНИЯ ДЛЯ ВНУТРЕННЕГО ДОКУМЕНТООБОРОТА
              <br />
              Создание мобильного приложения для обмена документами внутри
              компании.
            </span>
          </div>
          <div className={styles.modalSoftware__example}>
            <span>ПРИМЕР 6:</span>
            <span className={styles.modalSoftware__exampleText}>
              СОЗДАНИЕ МОБИЛЬНОГО ПРИЛОЖЕНИЯ ДЛЯ ЗАКАЗА УСЛУГ И ЗАПИСИ НА ПРИЁМ
              <br />
              Создание системы онлайн-записи и управления встречами.
            </span>
          </div>
        </div>

        <h3 className={styles.modalSoftware__blockTitle}>ЦЕНЫ</h3>
        <div className={styles.modalSoftware__prices}>
          <div className={styles.modalSoftware__priceBox}>
            <div className={styles.modalSoftware__priceTitle}>
              БАЗОВЫЙ ТАРИФ
            </div>
            <div className={styles.modalSoftware__priceValue}>от 2000$</div>
          </div>
          <div className={styles.modalSoftware__priceBox}>
            <div className={styles.modalSoftware__priceTitle}>
              ДОПОЛНИТЕЛЬНЫЕ УСЛУГИ
            </div>
            <div className={styles.modalSoftware__priceValue}>от 500$</div>
          </div>
        </div>

        <div className={styles.modalSoftware__footer}>
          <div className={styles.modalSoftware__footerLine}></div>
        </div>
      </div>
    ),
  },
  {
    title: "UX-UI",
    background: UI,
    text: "Создание уникального и привлекательного дизайна для вашего сайта.",
    button: "+",
    modal: (
      <div className={styles.modalSoftware}>
        <h2 className={styles.modalSoftware__title}>UX-UI</h2>
        <div className={styles.modalSoftware__subtitle}>
          СОЗДАНИЕ УНИКАЛЬНОГО И ПРИВЛЕКАТЕЛЬНОГО ДИЗАЙНА ДЛЯ ВАШЕГО САЙТА.
        </div>
        <div className={styles.modalSoftware__line}></div>

        <div className={styles.modalSoftware__desc}>
          Предлагаем полный цикл разработки UX/UI-дизайна, включая исследование
          пользователей, проектирование интерфейса, создание уникальной
          визуальной концепции.
          <br />
          Наша команда профессионалов создаёт современные и эстетичные
          интерфейсы, которые будут удобны и интуитивно понятны для
          пользователей.
        </div>

        <div>
          <h3 className={styles.modalSoftware__blockTitle}>ЭТАПЫ РАБОТЫ</h3>
          <img
            src={ModalSoftware}
            alt="Этапы работы"
            className={styles.modalSoftware__svg}
          />
        </div>

        <h3 className={styles.modalSoftware__blockTitle}>
          ПРЕИМУЩЕСТВА КЛИЕНТОВ SGT
        </h3>
        <ul className={styles.modalSoftware__list}>
          <li>
            <span className={styles.modalSoftware__dot}></span>
            <b>Премиальность и скорость:</b> создание эксклюзивного дизайна и
            прототипов в быстрые сроки для эффективной работы вашего бизнеса.
          </li>
          <li>
            <span className={styles.modalSoftware__dot}></span>
            <b>Индивидуальный подход:</b> подбор решений под специфику вашего
            продукта, аудитории и целей.
          </li>
          <li>
            <span className={styles.modalSoftware__dot}></span>
            <b>Профессионализм:</b> работа над проектом опытных дизайнеров и
            аналитиков.
          </li>
          <li>
            <span className={styles.modalSoftware__dot}></span>
            <b>Полная прозрачность:</b> все этапы работ и правки прозрачны и
            согласуются с заказчиком.
          </li>
        </ul>

        <h3 className={styles.modalSoftware__blockTitle}>
          НАШИ СИЛЬНЫЕ СТОРОНЫ
        </h3>
        <div className={styles.modalSoftware__strongSides}>
          <div className={styles.modalSoftware__strongItem}>
            <span className={styles.modalSoftware__strongNum}>1</span>
            <div>
              <b>Интеграция пользовательских интерфейсов:</b> создаём лучшие
              прототипы UX/UI-дизайна для максимальной эффективности сайта.
            </div>
          </div>
          <div className={styles.modalSoftware__strongItem}>
            <span className={styles.modalSoftware__strongNum}>2</span>
            <div>
              <b>Использование аналитики и сценариев:</b> делаем
              пользовательский опыт более осознанным и увеличиваем конверсию
              сайта.
            </div>
          </div>
          <div className={styles.modalSoftware__strongItem}>
            <span className={styles.modalSoftware__strongNum}>3</span>
            <div>
              <b>Адаптивный дизайн под устройства:</b> интерфейс удобно работает
              на любых устройствах, обеспечивая комфорт для всех пользователей.
            </div>
          </div>
          <div className={styles.modalSoftware__strongItem}>
            <span className={styles.modalSoftware__strongNum}>4</span>
            <div>
              <b>Визуальный дизайн:</b> строим уникальный стиль бренда от
              логотипа до деталей.
            </div>
          </div>
        </div>

        <h3 className={styles.modalSoftware__blockTitle}>ЧТО МЫ ДЕЛАЕМ</h3>
        <div className={styles.modalSoftware__examples}>
          <div className={styles.modalSoftware__example}>
            <span>ПРИМЕР 1:</span>
            <span className={styles.modalSoftware__exampleText}>
              СОЗДАНИЕ UX-ДИЗАЙНА ДЛЯ ИНТЕРНЕТ-МАГАЗИНА
            </span>
          </div>
          <div className={styles.modalSoftware__example}>
            <span>ПРИМЕР 2:</span>
            <span className={styles.modalSoftware__exampleText}>
              РАЗРАБОТКА UI/UX ДЛЯ КОРПОРАТИВНОГО САЙТА
            </span>
          </div>
          <div className={styles.modalSoftware__example}>
            <span>ПРИМЕР 3:</span>
            <span className={styles.modalSoftware__exampleText}>
              ДИЗАЙН ЛЕНДИНГА ДЛЯ ПРОДУКТА
            </span>
          </div>
          <div className={styles.modalSoftware__example}>
            <span>ПРИМЕР 4:</span>
            <span className={styles.modalSoftware__exampleText}>
              РАЗРАБОТКА UI-ЭКРАНОВ ДЛЯ МОБИЛЬНОГО ПРИЛОЖЕНИЯ
            </span>
          </div>
          <div className={styles.modalSoftware__example}>
            <span>ПРИМЕР 5:</span>
            <span className={styles.modalSoftware__exampleText}>
              СОЗДАНИЕ ДИЗАЙН-ИНТЕРФЕЙСА ДЛЯ B2B-СЕРВИСА
            </span>
          </div>
          <div className={styles.modalSoftware__example}>
            <span>ПРИМЕР 6:</span>
            <span className={styles.modalSoftware__exampleText}>
              UI/UX-ДИЗАЙН ДЛЯ КОРПОРАТИВНОГО ПОРТАЛА
            </span>
          </div>
        </div>

        <h3 className={styles.modalSoftware__blockTitle}>ЦЕНЫ</h3>
        <div className={styles.modalSoftware__prices}>
          <div className={styles.modalSoftware__priceBox}>
            <div className={styles.modalSoftware__priceTitle}>
              БАЗОВЫЙ ТАРИФ
            </div>
            <div className={styles.modalSoftware__priceValue}>от 1000$</div>
          </div>
          <div className={styles.modalSoftware__priceBox}>
            <div className={styles.modalSoftware__priceTitle}>
              ДОПОЛНИТЕЛЬНЫЕ УСЛУГИ
            </div>
            <div className={styles.modalSoftware__priceValue}>от 100$</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "BLOCKCHAIN-РАЗРАБОТКА",
    background: "transparent", // без картинки
    text: "Создание безопасных и прозрачных блокчейн-решений.",
    button: "+",
    modal: (
      <div
        className={styles.modalSoftware}
        style={{ background: "transparent" }}
      >
        <h2 className={styles.modalSoftware__title}>BLOCKCHAIN-РАЗРАБОТКА</h2>
        <div className={styles.modalSoftware__subtitle}>
          СОЗДАНИЕ БЕЗОПАСНЫХ И ПРОЗРАЧНЫХ БЛОКЧЕЙН-РЕШЕНИЙ
        </div>
        <div className={styles.modalSoftware__desc}>
          Разрабатываем смарт-контракты, системы обмена токенами, кошельки,
          платформы, решения для интеграции.
          <br />
          Команда SGT-специалистов внедряет индивидуальные и современные
          решения, соответствующие всем потребностям и целям клиента.
        </div>
        <div className={styles.modalSoftware__line}></div>
        <div>
          <h3 className={styles.modalSoftware__blockTitle}>ЭТАПЫ РАБОТЫ</h3>
          <img
            src={ModalSoftware}
            alt="Этапы работы"
            className={styles.modalSoftware__svg}
          />
        </div>

        <h3 className={styles.modalSoftware__blockTitle}>
          ПРЕИМУЩЕСТВА КЛИЕНТОВ SGT
        </h3>
        <ul className={styles.modalSoftware__list}>
          <li>
            <span className={styles.modalSoftware__dot}></span>
            <b>Технологичность и скорость:</b> внедрение решений в быстрые сроки
            для эффективной работы вашего бизнеса.
          </li>
          <li>
            <span className={styles.modalSoftware__dot}></span>
            <b>Индивидуальный подход:</b> подбор решений под специфику задачи.
          </li>
          <li>
            <span className={styles.modalSoftware__dot}></span>
            <b>Профессионализм:</b> только опытные специалисты.
          </li>
          <li>
            <span className={styles.modalSoftware__dot}></span>
            <b>Полная прозрачность:</b> отслеживание всех этапов работ и их
            результатов.
          </li>
        </ul>

        <h3 className={styles.modalSoftware__blockTitle}>
          НАШИ СИЛЬНЫЕ СТОРОНЫ
        </h3>
        <div className={styles.modalSoftware__strongSides}>
          <div className={styles.modalSoftware__strongItem}>
            <span className={styles.modalSoftware__strongNum}>1</span>
            <div>
              <b>Неподделываемые данные:</b> данные в блокчейне не могут быть
              изменены или удалены, что обеспечивает надежность и достоверность.
            </div>
          </div>
          <div className={styles.modalSoftware__strongItem}>
            <span className={styles.modalSoftware__strongNum}>2</span>
            <div>
              <b>Гибкость и масштабируемость:</b> разрабатываем
              блокчейн-решения, которые легко интегрируются с новыми модулями и
              быстро масштабируются в зависимости от потребностей бизнеса.
            </div>
          </div>
          <div className={styles.modalSoftware__strongItem}>
            <span className={styles.modalSoftware__strongNum}>3</span>
            <div>
              <b>Интеграция:</b> создаём блокчейн-системы, которые легко
              интегрируются с существующими системами и сервисами.
            </div>
          </div>
          <div className={styles.modalSoftware__strongItem}>
            <span className={styles.modalSoftware__strongNum}>4</span>
            <div>
              <b>Экономия:</b> создаём решения, которые могут значительно
              снизить ваши бизнес-издержки за счет автоматизации и
              децентрализации.
            </div>
          </div>
        </div>

        <h3 className={styles.modalSoftware__blockTitle}>ЧТО МЫ ДЕЛАЕМ</h3>
        <div className={styles.modalSoftware__examples}>
          <div className={styles.modalSoftware__example}>
            <span>ПРИМЕР 1:</span>
            <span className={styles.modalSoftware__exampleText}>
              НАПИСАНИЕ И РАЗРАБОТКА SMARTCONTRACT
            </span>
          </div>
          <div className={styles.modalSoftware__example}>
            <span>ПРИМЕР 2:</span>
            <span className={styles.modalSoftware__exampleText}>
              РАЗРАБОТКА ПРИЛОЖЕНИЙ/ПЛАТФОРМ ДЛЯ УПРАВЛЕНИЯ АКТИВАМИ
            </span>
          </div>
          <div className={styles.modalSoftware__example}>
            <span>ПРИМЕР 3:</span>
            <span className={styles.modalSoftware__exampleText}>
              СОЗДАНИЕ БЛОКЧЕЙН-ПЛАТФОРМЫ ДЛЯ ФИНАНСИРОВАНИЯ
            </span>
          </div>
          <div className={styles.modalSoftware__example}>
            <span>ПРИМЕР 4:</span>
            <span className={styles.modalSoftware__exampleText}>
              РАЗРАБОТКА АЛГОРИТМОВ-ОРАКУЛОВ ДЛЯ ВЗАИМОДЕЙСТВИЯ КАК B2C, ТАК И С
              ОТКРЫТЫМИ ДАННЫМИ
            </span>
          </div>
          <div className={styles.modalSoftware__example}>
            <span>ПРИМЕР 5:</span>
            <span className={styles.modalSoftware__exampleText}>
              СОЗДАНИЕ БЛОКЧЕЙН-ПРИЛОЖЕНИЙ ДЛЯ НАДЁЖНОСТИ
            </span>
          </div>
        </div>

        <h3 className={styles.modalSoftware__blockTitle}>ЦЕНЫ</h3>
        <div className={styles.modalSoftware__prices}>
          <div className={styles.modalSoftware__priceBox}>
            <div className={styles.modalSoftware__priceTitle}>
              БАЗОВЫЙ ТАРИФ
            </div>
            <div className={styles.modalSoftware__priceValue}>от 3000$</div>
          </div>
          <div className={styles.modalSoftware__priceBox}>
            <div className={styles.modalSoftware__priceTitle}>
              ДОПОЛНИТЕЛЬНЫЕ УСЛУГИ
            </div>
            <div className={styles.modalSoftware__priceValue}>от 500$</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "АВТОМАТИЗАЦИЯ IT-РЕШЕНИЙ",
    background: "transparent",
    text: "Повышение эффективности и снижение затрат для IT-продуктов.",
    button: "+",
    modal: (
      <div
        className={styles.modalSoftware}
        style={{ background: "transparent" }}
      >
        <h2 className={styles.modalSoftware__title}>
          АВТОМАТИЗАЦИЯ И ОПТИМИЗАЦИЯ IT-РЕШЕНИЙ
        </h2>
        <div className={styles.modalSoftware__subtitle}>
          ПОВЫШЕНИЕ ЭФФЕКТИВНОСТИ И СНИЖЕНИЕ ЗАТРАТ ДЛЯ IT-ПРОДУКТОВ
        </div>
        <div className={styles.modalSoftware__line}></div>

        <div className={styles.modalSoftware__desc}>
          Разрабатываем полный цикл: анализ требований, проектирование,
          разработка, сопровождение, внедрение решений.
          <br />
          Команда SGT-специалистов внедряет индивидуальные и современные
          решения, соответствующие всем потребностям и целям клиента.
        </div>

        <div>
          <h3 className={styles.modalSoftware__blockTitle}>ЭТАПЫ РАБОТЫ</h3>
          <img
            src={ModalSoftware}
            alt="Этапы работы"
            className={styles.modalSoftware__svg}
          />
        </div>

        <h3 className={styles.modalSoftware__blockTitle}>
          ПРЕИМУЩЕСТВА КЛИЕНТОВ SGT
        </h3>
        <ul className={styles.modalSoftware__list}>
          <li>
            <span className={styles.modalSoftware__dot}></span>
            <b>Премиальность и скорость:</b> внедрение решений в быстрые сроки
            для эффективной работы бизнеса.
          </li>
          <li>
            <span className={styles.modalSoftware__dot}></span>
            <b>Индивидуальный подход:</b> подбор решений под специфику задачи.
          </li>
          <li>
            <span className={styles.modalSoftware__dot}></span>
            <b>Профессионализм:</b> только опытные специалисты.
          </li>
          <li>
            <span className={styles.modalSoftware__dot}></span>
            <b>Полная прозрачность:</b> отслеживание всех этапов работ и их
            результатов.
          </li>
        </ul>

        <h3 className={styles.modalSoftware__blockTitle}>
          НАШИ СИЛЬНЫЕ СТОРОНЫ
        </h3>
        <div className={styles.modalSoftware__strongSides}>
          <div className={styles.modalSoftware__strongItem}>
            <span className={styles.modalSoftware__strongNum}>1</span>
            <div>
              <b>Повышение эффективности:</b> достигается за счет оптимизации
              процессов и внедрения новых подходов.
            </div>
          </div>
          <div className={styles.modalSoftware__strongItem}>
            <span className={styles.modalSoftware__strongNum}>2</span>
            <div>
              <b>Улучшение пользовательского опыта:</b> оптимизируем интерфейсы
              и процессы для повышения удобства использования.
            </div>
          </div>
          <div className={styles.modalSoftware__strongItem}>
            <span className={styles.modalSoftware__strongNum}>3</span>
            <div>
              <b>Интеграция:</b> автоматизируем взаимодействие между системами и
              сервисами.
            </div>
          </div>
          <div className={styles.modalSoftware__strongItem}>
            <span className={styles.modalSoftware__strongNum}>4</span>
            <div>
              <b>Аналитика и оптимизация:</b> оптимизируем сбор и анализ данных
              для вашего бизнеса.
            </div>
          </div>
        </div>

        <h3 className={styles.modalSoftware__blockTitle}>ЧТО МЫ ДЕЛАЕМ</h3>
        <div className={styles.modalSoftware__examples}>
          <div className={styles.modalSoftware__example}>
            <span>ПРИМЕР 1:</span>
            <span className={styles.modalSoftware__exampleText}>
              АВТОМАТИЗАЦИЯ ТИПОВЫХ ЗАДАЧ И СЕРВИСОВ С ИСПОЛЬЗОВАНИЕМ СИСТЕМ
              ИИ/ML
            </span>
          </div>
          <div className={styles.modalSoftware__example}>
            <span>ПРИМЕР 2:</span>
            <span className={styles.modalSoftware__exampleText}>
              ОПТИМИЗАЦИЯ ПРОИЗВОДСТВЕННЫХ ПРОЦЕССОВ С ИСПОЛЬЗОВАНИЕМ
              ИНТЕЛЛЕКТУАЛЬНЫХ СИСТЕМ
            </span>
          </div>
          <div className={styles.modalSoftware__example}>
            <span>ПРИМЕР 3:</span>
            <span className={styles.modalSoftware__exampleText}>
              АВТОМАТИЗАЦИЯ БИЗНЕСОВЫХ ПРОЦЕССОВ С ИСПОЛЬЗОВАНИЕМ СИСТЕМЫ
            </span>
          </div>
          <div className={styles.modalSoftware__example}>
            <span>ПРИМЕР 4:</span>
            <span className={styles.modalSoftware__exampleText}>
              ОПТИМИЗАЦИЯ СТОИМОСТИ И ИНТЕЛЛЕКТУАЛЬНЫЙ ПОИСК РЕШЕНИЙ ДЛЯ
              ОПТИМИЗАЦИИ СТОИМОСТИ
            </span>
          </div>
          <div className={styles.modalSoftware__example}>
            <span>ПРИМЕР 5:</span>
            <span className={styles.modalSoftware__exampleText}>
              АВТОМАТИЗАЦИЯ ИНТЕГРАЦИИ ДАННЫХ И СОЗДАНИЕ СКВОЗНЫХ СИСТЕМ
              АНАЛИТИКИ И ВЗАИМОДЕЙСТВИЯ
            </span>
          </div>
          <div className={styles.modalSoftware__example}>
            <span>ПРИМЕР 6:</span>
            <span className={styles.modalSoftware__exampleText}>
              ОПТИМИЗАЦИЯ ИНТЕЛЛЕКТУАЛЬНЫХ ПОТОКОВ И СОЗДАНИЕ ЕДИНЫХ СИСТЕМ
            </span>
          </div>
        </div>

        <h3 className={styles.modalSoftware__blockTitle}>ЦЕНЫ</h3>
        <div className={styles.modalSoftware__prices}>
          <div className={styles.modalSoftware__priceBox}>
            <div className={styles.modalSoftware__priceTitle}>
              БАЗОВЫЙ ТАРИФ
            </div>
            <div className={styles.modalSoftware__priceValue}>от 1500$</div>
          </div>
          <div className={styles.modalSoftware__priceBox}>
            <div className={styles.modalSoftware__priceTitle}>
              ДОПОЛНИТЕЛЬНЫЕ УСЛУГИ
            </div>
            <div className={styles.modalSoftware__priceValue}>от 400$</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "ВЕБ-РАЗРАБОТКА",
    background: "transparent",
    text: "Создание современных сайтов и платформ под ключ.",
    modal: (
      <div
        className={styles.modalSoftware}
        style={{ background: "transparent" }}
      >
        <h2 className={styles.modalSoftware__title}>
          ВЕБ-РАЗРАБОТКА НА ВСЕ СЛУЧАИ БИЗНЕСА
        </h2>
        <div className={styles.modalSoftware__subtitle}>
          ПОЛНЫЙ ЦИКЛ РАЗРАБОТКИ: ОТ ПРОТОТИПА ДО ЗАПУСКА
        </div>
        <div className={styles.modalSoftware__line}></div>

        <div className={styles.modalSoftware__desc}>
          Создаем кастомные веб-продукты: корпоративные сайты, лендинги,
          eCommerce, CRM и внутренние платформы. Поддерживаем и масштабируем
          решения под рост компании.
        </div>

        <div>
          <h3 className={styles.modalSoftware__blockTitle}>ЭТАПЫ РАБОТЫ</h3>
          <img
            src={ModalSoftware}
            alt="Этапы работы"
            className={styles.modalSoftware__svg}
          />
        </div>

        <h3 className={styles.modalSoftware__blockTitle}>
          ПРЕИМУЩЕСТВА РАБОТЫ С НАМИ
        </h3>
        <ul className={styles.modalSoftware__list}>
          <li>
            <span className={styles.modalSoftware__dot}></span>
            <b>Скорость:</b> работаем в спринтах и сдаем MVP за 2–3 недели.
          </li>
          <li>
            <span className={styles.modalSoftware__dot}></span>
            <b>Адаптивность:</b> сайты корректно отображаются на всех
            устройствах.
          </li>
          <li>
            <span className={styles.modalSoftware__dot}></span>
            <b>Современные технологии:</b> React, Next.js, Tailwind, Node.js и
            др.
          </li>
          <li>
            <span className={styles.modalSoftware__dot}></span>
            <b>Прозрачность:</b> этапы, сроки и затраты понятны на старте.
          </li>
        </ul>

        <h3 className={styles.modalSoftware__blockTitle}>РЕАЛИЗУЕМ:</h3>
        <div className={styles.modalSoftware__examples}>
          <div className={styles.modalSoftware__example}>
            <span>ПРИМЕР 1:</span>
            <span className={styles.modalSoftware__exampleText}>
              ЛЕНДИНГИ И ПРОДАЮЩИЕ СТРАНИЦЫ С ИНТЕГРАЦИЕЙ АНАЛИТИКИ
            </span>
          </div>
          <div className={styles.modalSoftware__example}>
            <span>ПРИМЕР 2:</span>
            <span className={styles.modalSoftware__exampleText}>
              ВИТРИНЫ И МАГАЗИНЫ С КОРЗИНОЙ, ПЛАТЕЖАМИ, ЛИЧНЫМ КАБИНЕТОМ
            </span>
          </div>
          <div className={styles.modalSoftware__example}>
            <span>ПРИМЕР 3:</span>
            <span className={styles.modalSoftware__exampleText}>
              ПЛАТФОРМЫ: CRM, LMS, ИНТЕРНАЛ ПАНЕЛИ УПРАВЛЕНИЯ
            </span>
          </div>
          <div className={styles.modalSoftware__example}>
            <span>ПРИМЕР 4:</span>
            <span className={styles.modalSoftware__exampleText}>
              САЙТЫ-КАТАЛОГИ С ПОИСКОМ, ФИЛЬТРАМИ, АВТОМАТИЗАЦИЕЙ
            </span>
          </div>
        </div>

        <h3 className={styles.modalSoftware__blockTitle}>ЦЕНЫ</h3>
        <div className={styles.modalSoftware__prices}>
          <div className={styles.modalSoftware__priceBox}>
            <div className={styles.modalSoftware__priceTitle}>MVP-ВЕРСИЯ</div>
            <div className={styles.modalSoftware__priceValue}>от 1000$</div>
          </div>
          <div className={styles.modalSoftware__priceBox}>
            <div className={styles.modalSoftware__priceTitle}>
              ПОЛНЫЙ ПРОДУКТ
            </div>
            <div className={styles.modalSoftware__priceValue}>от 2500$</div>
          </div>
        </div>
      </div>
    ),
  },
];

const cardVariants = {
  initial: { opacity: 0, y: 40, scale: 0.85 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const ServicesSection = () => {
  // eslint-disable-next-line no-unused-vars
  const [activeIndex, setActiveIndex] = useState(1); // стартуем со 2-й карточки
  const swiperRef = useRef();

  // Состояние для модального окна
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const handlePrev = () => swiperRef.current?.slidePrev();
  const handleNext = () => swiperRef.current?.slideNext();

  const handleCardClick = (service) => {
    setSelectedService(service);
    setModalOpen(true);
  };

  return (
    <section className={styles.services} id="ServicesSection">
      <motion.h2
        className={styles.title}
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        УСЛУГИ
        <br /> ПО РАЗРАБОТКЕ
      </motion.h2>

      <div className={styles.carouselWrapper}>
        <motion.button
          className={styles.arrow}
          onClick={handlePrev}
          whileHover={{ scale: 1.15, boxShadow: "0 0 12px #17b24b" }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          ←
        </motion.button>

        <Swiper
          modules={[Navigation]}
          spaceBetween={8}
          slidesPerView={3}
          loop={true}
          centeredSlides={true}
          initialSlide={1}
          onBeforeInit={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.realIndex);
          }}
          className={styles.swiper}
          breakpoints={{
            0: {
              slidesPerView: 1,
              centeredSlides: true,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {services.map((service, index) => (
            <SwiperSlide key={index} data-index={index}>
              <motion.div
                className={`${styles.card} ${
                  index === activeIndex ? styles.active : styles.inactive
                }`}
                variants={cardVariants}
                initial="initial"
                animate="animate"
                whileHover={
                  index === activeIndex
                    ? { scale: 1.05, boxShadow: "0 0 32px #17b24b88" }
                    : {}
                }
                transition={{ type: "spring", stiffness: 250 }}
                onClick={() => handleCardClick(service)}
                style={{
                  cursor: "pointer",
                  position: "relative",
                  backgroundImage: `url(${service.background})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className={styles.cardContent}>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </div>
                <div className={styles.cardPlus}>+</div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        <motion.button
          className={styles.arrow}
          onClick={handleNext}
          whileHover={{ scale: 1.15, boxShadow: "0 0 12px #17b24b" }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          →
        </motion.button>
      </div>

      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        {selectedService && selectedService.modal}
      </Modal>
    </section>
  );
};

export default ServicesSection;
