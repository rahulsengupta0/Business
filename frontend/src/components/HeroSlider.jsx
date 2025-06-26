// src/components/HeroSlider.jsx
import React, { useState, useEffect } from 'react';
import './HeroSlider.css';
import think1 from '../assets/think1.jpg';
import think2 from '../assets/think2.jpg';
import think3 from '../assets/think3.jpg';


const slides = [
  {
    image: think1,
    heading: 'Empower Your Business Vision',
    subtext: 'Launch your idea with the right strategy and expert support.',
  },
  {
    image: think2,
    heading: 'Unlock Growth Opportunities',
    subtext: 'We guide you through every stage of your business journey.',
  },
  {
    image: think3,
    heading: 'Achieve Excellence',
    subtext: 'Let us handle the complexity while you focus on growth.',
  }
];


const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-container">
      {slides.map((slide, index) => (
        <div
          className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
          key={index}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="hero-overlay">
            <div className="hero-content">
              <h1>{slide.heading}</h1>
              <p>{slide.subtext}</p>
              <div className="hero-buttons">
                <button className="hero-btn filled">Discover More</button>
                <button className="hero-btn outlined">Get a Quote</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroSlider;
