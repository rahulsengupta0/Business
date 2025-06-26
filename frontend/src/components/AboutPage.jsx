import React, { useState, useEffect } from 'react';
import './AboutPage.css';

// Import all images
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import person1 from '../assets/person1.jpg';
import person2 from '../assets/person2.jpg';
import person3 from '../assets/person3.jpg';
import person4 from '../assets/person4.jpg';
import person5 from '../assets/person5.jpg';
import consultingImg from '../assets/consulting.jpg';
import logo from '../assets/logo.jpg';
import journeyImg from '../assets/journey.png';
import Navbar from './Navbar';

const AboutPage = () => {
  const heroImages = [img1, img2, img3, img1]; // Using img1, img2, img3 with a loop
  const aboutImages = [person1, person2, person3, person4, person5];
  const [heroIndex, setHeroIndex] = useState(0);
  const [aboutIndex, setAboutIndex] = useState(0);
  const [whyChooseIndex, setWhyChooseIndex] = useState(0);
  const sections = [
    {
      title: 'Tailored Services',
      text: 'We simplify complexity, empowering your growth with bespoke business solutions crafted by our expert team.',
      subText: 'COMPANY * CONSULTING * CORPORATE * DIGITAL AGENCY * FINANCE * ADVERTISING * AGENCY * BUSINESS',
    },
    {
      title: 'Achieve Excellence',
      text: 'Unlock your potential with strategic insights, driving success through innovative and tailored approaches.',
      subText: 'DISCOVER MORE * GET A QUOTE * SCHEDULE A CALL NOW * UNLOCK YOUR POTENTIAL',
    },
  ];

  useEffect(() => {
    const heroInterval = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000);

    const aboutInterval = setInterval(() => {
      setAboutIndex((prev) => (prev + 1) % aboutImages.length);
    }, 5000);

    const whyChooseInterval = setInterval(() => {
      setWhyChooseIndex((prev) => (prev + 1) % 2); // Cycle between 0 and 1 for two points
    }, 5000);

    return () => {
      clearInterval(heroInterval);
      clearInterval(aboutInterval);
      clearInterval(whyChooseInterval);
    };
  }, [heroImages.length, aboutImages.length]);

  const whyChooseData = [
    {
      title: 'Our Promise',
      icon: '🤝',
      text: 'Decades of proven service and consistent performance with a trusted clientele across the globe.',
    },
    {
      title: 'Great management',
      icon: '💡',
      text: 'Deep expertise in local and international markets with unrivaled strategic intelligence.',
    },
  ];

  return (
    <div className="about-page">
        <Navbar />
      <header className="about-hero">
        <div className="hero-content">
          <img
            src={heroImages[heroIndex]}
            alt={`Slide ${heroIndex + 1}`}
            className="hero-image"
            style={{ opacity: 1 }}
          />
          <div className="hero-text">
            <h1>{sections[heroIndex % 2].title}</h1>
            <p>{sections[heroIndex % 2].text}</p>
            <p className="sub-text">{sections[heroIndex % 2].subText}</p>
          </div>
        </div>
      </header>
      <section className="about-content">
        <div className="about-section">
          <div className="about-text">
            <h2>About Our Consultancy</h2>
            <p>Founded with a passion to transform businesses, we deliver tailored consultancy services to fuel growth and success. Our seasoned experts bring decades of experience to every challenge.</p>
          </div>
          <div className="about-image-container">
            <img
              src={aboutImages[aboutIndex]}
              alt={`Team Member ${aboutIndex + 1}`}
              className="about-image"
            />
          </div>
        </div>
        <div className="journey-section">
          <h2>Our Journey</h2>
          <div className="journey-content">
            <img src={journeyImg} alt="Journey" className="journey-image" />
            <div className="journey-text">
              <p>Since our inception in 2015, we have grown from a small team of visionaries to a leading consultancy firm. Our milestones include serving over 500 clients, launching innovative solutions, and earning industry recognition for excellence.</p>
              <p>Today, we continue to evolve, adapting to market trends and client needs, with a commitment to shaping the future of business success.</p>
            </div>
          </div>
        </div>
        <div className="why-choose-us">
          <h2>Why Choose Us</h2>
          <div className="why-choose-content">
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-card">
                  <span role="img" aria-label={whyChooseData[0].title}>{whyChooseData[0].icon}</span>
                  <h3>{whyChooseData[0].title}</h3>
                  <p>{whyChooseData[0].text}</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-card">
                  <span role="img" aria-label={whyChooseData[1].title}>{whyChooseData[1].icon}</span>
                  <h3>{whyChooseData[1].title}</h3>
                  <p>{whyChooseData[1].text}</p>
                </div>
              </div>
            </div>
            <div className="why-choose-image">
              <img
                src={[img1, img2, img3][whyChooseIndex % 3]}
                alt={`Why Choose ${whyChooseIndex + 1}`}
                className="why-choose-img"
              />
            </div>
          </div>
        </div>
        <div className="team-section">
          <h2>Meet Our Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <img src={person1} alt="John Doe" />
              <h3>John Doe</h3>
              <p>Business Strategist</p>
            </div>
            <div className="team-member">
              <img src={person2} alt="Jane Smith" />
              <h3>Jane Smith</h3>
              <p>Financial Consultant</p>
            </div>
            <div className="team-member">
              <img src={person3} alt="Mike Johnson" />
              <h3>Mike Johnson</h3>
              <p>Marketing Expert</p>
            </div>
            <div className="team-member">
              <img src={person4} alt="Emily Brown" />
              <h3>Emily Brown</h3>
              <p>HR Specialist</p>
            </div>
            <div className="team-member">
              <img src={person5} alt="Alex Carter" />
              <h3>Alex Carter</h3>
              <p>IT Consultant</p>
            </div>
          </div>
        </div>
      </section>
      <footer className="about-footer">
        <img src={logo} alt="Logo" className="footer-logo" />
        <p>© 2025 Consultancy Firm. All rights reserved.</p>
        <div className="footer-links">
          <a href="#about">About</a> | <a href="#services">Services</a> | <a href="#contact">Contact</a>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;