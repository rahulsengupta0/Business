import React, { useState, useEffect } from 'react';
import { FaArrowUp } from "react-icons/fa";
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import './Landing.css';
import PurposeSection from './PurposeSection';
import ServicesGrid from './ServicesGrid';
import MarqueeSection from './MarqueeSection';
import FeatureSection from './FeatureSection';
import Team from './Team';
import BlogSlider from './BlogSlider';
import ReviewSection from './ReviewSection';
import AiChatSection from './AiChatSection';

const slides = [
  {
    img: img1,
    text: 'Finance & Business Consulting',
  },
  {
    img: img2,
    text: 'Innovative Solutions',
  },
  {
    img: img3,
    text: 'Tailored Services',
  },
  {
    img: img4,
    text: 'Results Driven Strategies',
  },
];

export default function Landing() {
  const [index, setIndex] = useState(0);
  const [showUpArrow, setShowUpArrow] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3000);

    const handleScroll = () => {
      setShowUpArrow(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scroll
  };
  
  return (
    <>
      <div className="landing">
        <div className="text-side">
          <h1>{slides[index]?.text}</h1>
        </div>
        <div
          className="image-side"
          style={{
            backgroundImage: `url(${slides[index]?.img})`,
          }}
        />
        <div className="marquee">
          <div className="marquee-content">
            ADVERTISING ★ AGENCY ★ BUSINESS ★ COMPANY ★ CONSULTING ★ CORPORATE ★ DIGITAL AGENCY ★ FINANCE ★&nbsp;
          </div>
          <div className="marquee-content">
            ADVERTISING ★ AGENCY ★ BUSINESS ★ COMPANY ★ CONSULTING ★ CORPORATE ★ DIGITAL AGENCY ★ FINANCE ★&nbsp;
          </div>
        </div>
      </div>

      <PurposeSection />
      <ServicesGrid />
      <FeatureSection />
      <Team />
      <BlogSlider />
      <ReviewSection />
      <AiChatSection />

      {showUpArrow && (
        <div className="up-arrow" onClick={scrollToTop}>
          <FaArrowUp />
        </div>
      )}
    </>
  );
}