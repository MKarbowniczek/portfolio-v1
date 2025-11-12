import React from "react";
import "./Offer.scss";

const Offer = () => {
  return (
    <section className="offer-section">
      <div className="offer-content">
        <h2>Oferta</h2>

        <div className="offer-block">
          <h3>lekcje indywidualne</h3>
          <p>95 zł / 45 min</p>
          <p>120 zł / 60 min</p>
        </div>

        <div className="offer-block">
          <h3>lekcje grupowe</h3>
          <p>70 zł / 60 min / os.</p>
        </div>

        <div className="offer-block">
            <h3>tłumaczenie zwykłe ENG-PL</h3>
            <p>35 zł / 1 str. (1500 znaków ze spacjami)</p>
        </div>

        <div className="offer-block">
           <h3>korekta tłumaczenia przeprowadzona przez inny podmiot</h3>
           <p>15 zł / 1 str. (1500 znaków ze spacjami)</p>
        </div>
        <div className="offer-block">
            <p>Możliwość wystawienia faktury VAT.</p>
        </div>
      </div>
    </section>
  );
};

export default Offer;
