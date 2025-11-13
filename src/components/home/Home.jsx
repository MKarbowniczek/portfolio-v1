import React, { useEffect, useState } from "react";
import "./Home.scss";
// import backgroundImage from "../../assets/books.jpg";
import backgroundImage from "../../assets/books_v4.png";

const Home = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Fade out gradually as user scrolls past ~200px
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
