import React from "react";
import "./About.scss";
import profileImage from "../../assets/aneta_v2.jpg";

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
            Mam na imię <span className="bold-name">Aneta</span> i od ponad <span className="bold-name">5</span> lat uczę angielskiego tak,
            jak sama chciałabym być uczona — jasno, praktycznie i bez zbędnego stresu.
            Ukończyłam <span className="bold-name">filologię angielską na Uniwersytecie Warszawskim</span>. Swoje
            umiejętności językowe doskonaliłam podczas pobytu w Wielkiej Brytanii, gdzie na
            co dzień posługiwałam się angielskim. Przez kilka lat pracowałam jako <span className="bold-name">lektorka w
            szkołach językowych</span>, prowadząc kursy indywidualne oraz grupowe, zarówno dla
            młodzieży, jak i dorosłych na różnych poziomach.
          </p>
          <h3>Co oferuję?</h3>
          <p>
            <ul class="offer-list">
              <li>Zajęcia 1:1 jak i grupowe z General English na poziomach A1–C1 prowadzone na platformie Microsoft Teams</li>
              <li>Przygotowanie do egzaminów Cambridge (FCE, CAE)</li>
              <li>Przygotowanie do matury (podstawowa i rozszerzona)</li>
              <li>Egzamin ósmoklasisty</li>
              <li>Egzaminy na studiach</li>
            </ul>
          </p>
          <h3>Jak pracuje?</h3>
          <p>
            <ul class="offer-list">
              <li>Materiały dostosowane w 100% do Twoich potrzeb</li>
              <li>Spersonalizowany plan nauki dostosowany do celu (egzamin, praca, komunikacja)</li>
              <li>Praca na autentycznych materiałach</li>
              <li>Regularny feedback i kontakt między zajęciami</li>
              <li>Wsparcie, motywacja i przyjazna atmosfera sprzyjająca swobodnej komunikacji</li>
            </ul>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
