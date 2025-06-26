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
import { FaEnvelope } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import PopupModal from './PopupModal';
import HeroSlider from './HeroSlider';
import ChatBot from './ChatBot';
import Navbar from './Navbar';
 // adjust path if needed





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
  const [showExitPopup, setShowExitPopup] = useState(false);
const [showScrollPopup, setShowScrollPopup] = useState(false);
   const navigate = useNavigate(); // Hook to control navigation

  const handleLoginClick = () => {
    navigate("/authForm");
  };
  useEffect(() => {
  const interval = setInterval(() => {
    setIndex((prev) => (prev + 1) % slides.length);
  }, 3000);

  const handleScroll = () => {
    setShowUpArrow(window.scrollY > 300);

    const lastShown = localStorage.getItem('scrollPopupLastShown');
    const now = Date.now();

    // Show popup if not shown in the last 60 seconds
    if (
      window.scrollY > window.innerHeight * 1.2 &&
      (!lastShown || now - parseInt(lastShown) > 60000) // 60000 ms = 60 sec
    ) {
      setShowScrollPopup(true);
      localStorage.setItem('scrollPopupLastShown', now.toString());
    }
  };

  const handleMouseLeave = (e) => {
    const exitLastShown = localStorage.getItem('exitPopupLastShown');
    const now = Date.now();

    if (
      e.clientY < 10 &&
      (!exitLastShown || now - parseInt(exitLastShown) > 60000)
    ) {
      setShowExitPopup(true);
      localStorage.setItem('exitPopupLastShown', now.toString());
    }
  };

  window.addEventListener('scroll', handleScroll);
  document.addEventListener('mouseout', handleMouseLeave);

  return () => {
    clearInterval(interval);
    window.removeEventListener('scroll', handleScroll);
    document.removeEventListener('mouseout', handleMouseLeave);
  };
}, []);



  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scroll
  };
  
  return (
    <>
      <Navbar />
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
      <HeroSlider />
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
      <div className={`floating-login ${showUpArrow ? 'show' : ''}`}>
        <button className="login-btn" onClick={handleLoginClick}>
          Login / Signup
        </button>
      </div>
<div className="floating-contact">
  <button className="contact-btn" onClick={() => window.location.href = '/contacts'}>
    <FaEnvelope style={{ marginRight: '8px' }} />
    Contact
  </button>
</div>
{/* Exit-Intent Popup */}
<PopupModal show={showExitPopup} onClose={() => setShowExitPopup(false)}>
  <h2>Wait! Before You Go...</h2>
  <p>Sign up now and get 20% off your first service!</p>
  <button onClick={handleLoginClick}>Claim Offer</button>
</PopupModal>

{/* Scroll-Triggered Popup */}
<PopupModal show={showScrollPopup} onClose={() => setShowScrollPopup(false)}>
  <h2>Enjoying the Experience?</h2>
  <p>Join our newsletter to stay updated!</p>
  <input type="email" placeholder="Enter your email" />
  <button>Subscribe</button>
</PopupModal>
< ChatBot />


    </>
  );
}