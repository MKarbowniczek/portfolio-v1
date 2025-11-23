import React, { useRef, useState, useEffect } from "react";
import opinions from "../../assets/opinions.json";
import "./Opinions.scss";

const Opinions = () => {
  const containerRef = useRef(null);
  const dragState = useRef({
    isDown: false,
    startX: 0,
    scrollLeft: 0,
  });

  const [activeIndex, setActiveIndex] = useState(0);

  const handleMouseDown = (e) => {
    const container = containerRef.current;
    dragState.current.isDown = true;
    container.classList.add("dragging");
    dragState.current.startX = e.pageX - container.offsetLeft;
    dragState.current.scrollLeft = container.scrollLeft;
  };

  const handleMouseLeave = () => {
    dragState.current.isDown = false;
    containerRef.current.classList.remove("dragging");
  };

  const handleMouseUp = () => {
    dragState.current.isDown = false;
    containerRef.current.classList.remove("dragging");
  };

  const handleMouseMove = (e) => {
    if (!dragState.current.isDown) return;
    e.preventDefault();
    const container = containerRef.current;
    const x = e.pageX - container.offsetLeft;
    const walk = (x - dragState.current.startX) * 1.5;
    container.scrollLeft = dragState.current.scrollLeft - walk;
  };

  const handleScroll = () => {
    const container = containerRef.current;
    const cardWidth = container.children[0].offsetWidth + 24; // include gap
    const index = Math.round(container.scrollLeft / cardWidth);
    setActiveIndex(index);
  };

  const scrollToCard = (index) => {
    const container = containerRef.current;
    const cardWidth = container.children[0].offsetWidth + 24;
    container.scrollTo({
      left: cardWidth * index,
      behavior: "smooth",
    });
    setActiveIndex(index);
  };

  // Touch events
  const handleTouchStart = (e) => {
    const container = containerRef.current;
    dragState.current.isDown = true;
    dragState.current.startX = e.touches[0].pageX - container.offsetLeft;
    dragState.current.scrollLeft = container.scrollLeft;
  };

  const handleTouchMove = (e) => {
    if (!dragState.current.isDown) return;
    const container = containerRef.current;
    const x = e.touches[0].pageX - container.offsetLeft;
    const walk = (x - dragState.current.startX) * 1.3;
    container.scrollLeft = dragState.current.scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    dragState.current.isDown = false;
  };

  // --- Auto-scroll ---
  useEffect(() => {
    const interval = setInterval(() => {
      let nextIndex = activeIndex + 1;
      if (nextIndex >= opinions.length) nextIndex = 0;
      scrollToCard(nextIndex);
    }, 8000); // co 8 sekund
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <section className="opinions-section">
      <h2>Opinie [5,0/5]</h2>

      <div
        className="opinions-row"
        ref={containerRef}
        onScroll={handleScroll}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {opinions.map((opinion, index) => (
          <div
            key={index}
            className={`opinion-card ${activeIndex === index ? "active-card" : ""}`}
          >
            <div className="opinion-header">
              <span className="stars">
                {Array.from({ length: parseInt(opinion.opinion) }, () => "⭐").join("")}
              </span>
              <span className="source">{opinion.source}</span>
            </div>

            <p className="opinion-text">"{opinion.text}"</p>

            <div className="opinion-author">
              <span className="author-initial">{opinion.author.charAt(0)}</span>
              <span className="author-name">{opinion.author}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="dots">
        {opinions.map((_, i) => (
          <span
            key={i}
            className={`dot ${activeIndex === i ? "active" : ""}`}
            onClick={() => scrollToCard(i)}
          />
        ))}
      </div>
    </section>
  );
};

export default Opinions;
