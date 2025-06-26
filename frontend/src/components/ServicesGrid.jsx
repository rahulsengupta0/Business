import React, { useEffect } from 'react';
import agency from '../assets/agency.jpg';
import marketing from '../assets/marketing.jpg';
import insurance from '../assets/insurance.jpg';
import financial from '../assets/financial.jpg';
import consulting from '../assets/consulting.jpg';
import website from '../assets/website.jpg';
import business from '../assets/business.jpg';
import './ServicesGrid.css';

export default function ServicesGrid() {
  useEffect(() => {
    const items = document.querySelectorAll('.grid-item');
    items.forEach((item, index) => {
      item.style.transitionDelay = `${index * 0.1}s`;
    });
  }, []);

  const serviceDescriptions = {
    '/agency': 'Comprehensive agency support to elevate your brand presence.',
    '/marketing': 'Innovative marketing strategies to boost your reach and engagement.',
    '/insurance': 'Tailored insurance solutions for your business security.',
    '/financial': 'Expert financial planning and advisory services.',
    '/consulting': 'Strategic consulting to drive your business success.',
    '/website': 'Custom website development for a strong online presence.',
    '/business': 'Holistic business solutions for growth and efficiency.',
  };

  return (
    <div className="services-section">
      <h2 className="services-heading">Empowering Your Brand with Comprehensive Solutions</h2>
      <div className="services-grid">
        <div className="grid-item">
          <a href="/agency" className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={agency} alt="Agency" />
              </div>
              <div className="flip-card-back">
                <p>{serviceDescriptions['/agency']}</p>
              </div>
            </div>
          </a>
          <p>Agency Services</p>
        </div>
        <div className="grid-item">
          <a href="/marketing" className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={marketing} alt="Marketing" />
              </div>
              <div className="flip-card-back">
                <p>{serviceDescriptions['/marketing']}</p>
              </div>
            </div>
          </a>
          <p>Marketing Solutions</p>
        </div>
        <div className="grid-item">
          <a href="/insurance" className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={insurance} alt="Insurance" />
              </div>
              <div className="flip-card-back">
                <p>{serviceDescriptions['/insurance']}</p>
              </div>
            </div>
          </a>
          <p>Insurance Services</p>
        </div>
        <div className="grid-item">
          <a href="/financial" className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={financial} alt="Financial" />
              </div>
              <div className="flip-card-back">
                <p>{serviceDescriptions['/financial']}</p>
              </div>
            </div>
          </a>
          <p>Financial Services</p>
        </div>
        <div className="grid-item">
          <a href="/consulting" className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={consulting} alt="Consulting" />
              </div>
              <div className="flip-card-back">
                <p>{serviceDescriptions['/consulting']}</p>
              </div>
            </div>
          </a>
          <p>Consulting Services</p>
        </div>
        <div className="grid-item">
          <a href="/website" className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={website} alt="Website" />
              </div>
              <div className="flip-card-back">
                <p>{serviceDescriptions['/website']}</p>
              </div>
            </div>
          </a>
          <p>Website Development</p>
        </div>
        <div className="grid-item">
          <a href="/business" className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={business} alt="Business" />
              </div>
              <div className="flip-card-back">
                <p>{serviceDescriptions['/business']}</p>
              </div>
            </div>
          </a>
          <p>Business Solutions</p>
        </div>
        <div className="grid-item coming-soon">
          <div>Coming Soon</div>
        </div>
        <div className="grid-item text-box">
          <h3>More to Explore</h3>
          <p>We are constantly expanding our offerings to help you grow your business and achieve more.</p>
        </div>
      </div>
    </div>
  );
}