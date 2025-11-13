import React from "react";
import "./About.scss";
import profileImage from "../../assets/aneta.jpg";
import backgroundImage from "../../assets/books_v4.png";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <div className="about-image-wrapper">
          <img src={profileImage} alt="About me" className="about-image" />
        </div>
        <div className="about-text">
          <h2>O mnie</h2>
          <p>
              Jestem lektorem języka angielskiego z długoletnim doświadczeniem.
              Ukończyłam studia na kierunku filologia angielska na Uniwersytecie Warszawskim.
              Swoje umiejętności językowe zdobywałam również pracując kilka lat w Londynie
              oraz w szkole językowej jako korepetytor prowadząc zarówno zajęcia indywidualne jak i grupowe dla
              dorosłych, młodzieży oraz dzieci.
          </p>
          <h3>Jak pracuje?</h3>
          <p>
             Posiadam indywidualne podejście do każdego ucznia z uwzględnieniem
             jego braków oraz mocnych stron a także jego poprzednich doświadczeń z
             nauką języka angielskiego. Współpracę rozpoczynam od rozmowy
             weryfikacyjnej na podstawie, której badam obszary, które wymagają pracy u
             danego ucznia z uwzględnieniem jego oczekiwań i celów. Na podstawie

             zebranych informacji opracowuje propozycję planu nauki, który przygotowuję
             w sposób spersonalizowany pod każdego ucznia w zależności od poziomu
             języka na którym się znajduje oraz celu nauki języka. Oprócz harmonogramu
             nauki realizowanego na lekcjach, swoim uczniom udzielam również
             szczegółowych instrukcji odnośnie codziennej samodzielnej nauki w
             domu, motywacji oraz organizacji w planowaniu czasu w osiąganiu celu,
             które w sposób efektywny pomogą przyswoić dany materiał.
             Jestem również osobą zorganizowaną, otwartą oraz komunikatywną,
             nastawioną na słuchanie potrzeb i oczekiwań swoich uczniów, co wierzę,
             że znacznie ułatwia współpracę.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
