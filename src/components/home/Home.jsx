import React, { useEffect, useState } from "react";
import "./Home.scss";
import backgroundImage from "../../assets/books_v5.jpg";

const Home = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setVisible(scrollY < window.innerHeight * 0.5);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="home-hero"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="home-overlay">
        <div className={`home-content ${visible ? "visible" : "hidden"}`}>
          <h1>ANETA NAGLARSKA</h1>
          <p>just say a word</p>
        </div>
      </div>
    </section>
  );
};

export default Home;
