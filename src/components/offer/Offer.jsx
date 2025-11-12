import React from "react";
import "./Offer.scss";

const Offer = () => {
  return (
    <section className="offer-section">
      <div className="offer-content">
        <h2>Oferta</h2>

        <div className="offer-block">
          <h3>JEDNA OSOBA</h3>
          <p>120 zł / 60 min</p>
          <p>95 zł / 45 min</p>
        </div>

        <div className="offer-block">
          <h3>DWIE OSOBY</h3>
          <p>(znajomi, rodzeństwo itp. na podobnym poziomie)</p>
          <p>70 zł / 60 min / os.</p>
        </div>
      </div>
    </section>
  );
};

export default Offer;
