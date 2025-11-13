import React from "react";
import "./Offer.scss";

const Offer = () => {
  return (
    <section className="offer-section">
      <div className="offer-content">
        <h2>Oferta</h2>

        {/* ✅ Use the class that matches SCSS */}
        <div className="offer-items">
          <div className="offer-item">
            <h3>Lekcje indywidualne</h3>
            <p>95 zł / 45 min</p>
            <p>120 zł / 60 min</p>
            <h3>Lekcje grupowe</h3>
            <p>70 zł / 60 min / os.</p>
          </div>

          <div className="offer-item">
            <h3>Tłumaczenie zwykłe ENG–PL</h3>
            <p>35 zł / 1 str. (1500 znaków ze spacjami)</p>
            <h3>Korekta tłumaczenia</h3>
            <p>15 zł / 1 str. (1500 znaków ze spacjami)</p>
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
