import { useState, useEffect } from "react";

export default function Hero() {
  const slides = [
    {
      title: "SWISS HOROLOGY & LUXURY TIMING",
      subtitle: "Discover Elegant Seiko, Tissot & Rado Masterpieces",
      btnText: "EXPLORE WATCHES",
      bgImage: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1600&q=80",
    },
    {
      title: "NEXT-GEN COMPUTING STATIONS",
      subtitle: "Premium MacBook Pro, Dell XPS & Ultimate Gaming Engines",
      btnText: "SHOP LAPTOPS",
      bgImage: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1600&q=80",
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(slideInterval);
  }, [slides.length]);

  return (
    <div className="hero-slider-wrapper">
      {slides.map((slide, index) => (
        <div 
          className={`hero-slide-item ${index === currentSlide ? "active-slide" : ""}`}
          key={index}
          style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.5)), url(${slide.bgImage})` }}
        >
          <div className="hero-slide-content">
            <h4>EXCLUSIVELY AVAILABLE AT SMARTCOMMERCE</h4>
            <h1>{slide.title}</h1>
            <p>{slide.subtitle}</p>
            <button className="hero-action-btn">{slide.btnText}</button>
          </div>
        </div>
      ))}
      <div className="slider-dot-indicators">
        {slides.map((_, idx) => (
          <span 
            key={idx} 
            className={`slider-dot ${idx === currentSlide ? "active-dot" : ""}`}
            onClick={() => setCurrentSlide(idx)}
          />
        ))}
      </div>
    </div>
  );
}