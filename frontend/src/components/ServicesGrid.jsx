import React from 'react';
import agency from '../assets/agency.jpg';
import marketing from '../assets/marketing.jpg';
import insurance from '../assets/insurance.jpg';
import financial from '../assets/financial.jpg';
import consulting from '../assets/consulting.jpg';
import website from '../assets/website.jpg';
import business from '../assets/business.jpg';
import './ServicesGrid.css';

export default function ServicesGrid() {
  return (
    <div className="services-section">
      <h2 className="services-heading">Empowering Your Brand with Comprehensive Solutions</h2>
      <div className="services-grid">
        <div className="grid-item">
          <a href="/agency"><img src={agency} alt="Agency" /></a>
          <p>Agency Services</p>
        </div>
        <div className="grid-item">
          <a href="/marketing"><img src={marketing} alt="Marketing" /></a>
          <p>Marketing Solutions</p>
        </div>
        <div className="grid-item">
          <a href="/insurance"><img src={insurance} alt="Insurance" /></a>
          <p>Insurance Services</p>
        </div>
        <div className="grid-item">
          <a href="/financial"><img src={financial} alt="Financial" /></a>
          <p>Financial Services</p>
        </div>
        <div className="grid-item">
          <a href="/consulting"><img src={consulting} alt="Consulting" /></a>
          <p>Consulting Services</p>
        </div>
        <div className="grid-item">
          <a href="/website"><img src={website} alt="Website" /></a>
          <p>Website Development</p>
        </div>
        <div className="grid-item">
          <a href="/business"><img src={business} alt="Business" /></a>
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
