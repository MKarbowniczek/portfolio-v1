import React from "react";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Offer from "./components/offer/Offer";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Header />

      <section
        id="home"
        className="min-h-screen flex items-center justify-center pt-20"
      >
        <Home />
      </section>


      <section
        id="about"
        className="min-h-screen flex items-center justify-center pt-20"
      >
        <About />
      </section>

      <section
        id="offer"
        className="min-h-screen flex items-center justify-center pt-20"
      >
        <Offer />
      </section>

      <section
        id="contact"
        className="min-h-screen flex items-center justify-center pt-20"
      >
        <Contact />
      </section>

      <section
        id="footer"
        className="min-h-screen flex items-center justify-center pt-20"
       >
        <Footer />
       </section>
    </>
  );
}

export default App;
