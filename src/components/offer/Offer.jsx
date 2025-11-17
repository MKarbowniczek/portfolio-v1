import React from "react";
import "./Offer.scss";
import backgroundImage from "../../assets/background.png";

const Offer = () => {
  return (
    <section
      className="offer-section"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="offer-content">
        <h2>Oferta</h2>

        <div className="offer-items">
          <div className="offer-item">
            <h3>Zajęcia indywidualne</h3>
            <p>120 zł / 55 min</p>
            <h3>Pakiet 10 zajęć*</h3>
             <p>1100zł</p>
            <p>*do wykorzystania w ciągu 12 tygodni przy zajęciach raz w tygodniu</p>
            <p>*do wykorzystania w ciągu 7 tygodni przy zajęciach dwa razy w tygodniu</p>
            <h3>Zajęcia w parach</h3>
            <p>80 zł / 55 min / os.</p>
          </div>

          <div className="offer-item">
            <h3>Tłumaczenia ENG–PL</h3>
            <p>40 zł / 1 str. (1500 znaków ze spacjami)</p>
            <h3>Tłumaczenia PL-ENG</h3>
            <p>45 zł / 1 str. (1500 znaków ze spacjami)</p>
          </div>

          <div className="offer-item">
            <p>Możliwość wystawienia faktury VAT.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
