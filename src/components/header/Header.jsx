import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="header-container">
        <nav className="nav">
          <a href="#home" className="nav-link">Home</a>
          <a href="#about" className="nav-link">O mnie</a>
          <a href="#offer" className="nav-link">Oferta</a>
          <a href="#contact" className="nav-link">Kontakt</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
