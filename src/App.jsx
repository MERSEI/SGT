import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Clients from "./components/Clients/clients";
import About from "./components/About/About";
import ServicesAndOutstaffWrapper from "./components/ServicesAndOutstaffSectionWrapper/ServicesAndOutstaffWrapperSection";
import AdvantagesSection from "./components/AdvantagesSection/AdvantagesSection";
import SpecialOffers from "./components/SpecialOffersSection/SpecialOffersSection";
import TeamSection from "./components/TeamSection/TeamSection";
import PartnersSection from "./components/PartnersSection/PartnersSection";
import ContactSection from "./components/ContactSection/ContactSection";
import ConsultingSection from "./components/ConsaltingSection/ConsultingSection";
import FooterSection from "./components/Footer/FooterSection";
import GreenObject from "./assets/GreenObj.svg";
import "../App.scss";
import green_2 from "./assets/green_2.svg";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Clients />
        <About />
        <ServicesAndOutstaffWrapper />
        <SpecialOffers />
        <AdvantagesSection />
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "0",
            zIndex: 1,
          }}
        >
          <img
            src={GreenObject}
            alt=""
            style={{
              position: "absolute",
              right: "-100px",
              top: "-120px", // при необходимости скорректируйте
              width: "350px",
              maxWidth: "90vw",
              transform: "rotate(-81.06deg)",
              pointerEvents: "none",
              zIndex: 0,
            }}
            draggable={false}
            aria-hidden="true"
          />
        </div>
        <TeamSection />
        <PartnersSection />
        <ContactSection />
        <div style={{ position: "relative", width: "100%", zIndex: 1 }}>
          <ConsultingSection />
          <img
            src={green_2}
            alt=""
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "350px",
              maxWidth: "90vw",

              opacity: 0.25,
              pointerEvents: "none",
              zIndex: 0,
            }}
            draggable={false}
            aria-hidden="true"
          />
        </div>

        <FooterSection />
      </main>
    </div>
  );
}

export default App;
