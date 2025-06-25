import React from 'react';
import section1 from '../assets/section1.jpg';
import './PurposeSection.css';

export default function PurposeSection() {
  return (
    <div className="purpose-section">
      <div className="image-side">
        <img src={section1} alt="Our Purpose and Inspiration" />
      </div>
      <div className="text-side">
        <h2>Our Purpose and Inspiration</h2>
        <p>
          We are inspired by a relentless drive to create value and transform ideas into reality.
          Our purpose is to help businesses and individuals grow, innovate, and thrive.
        </p>
      </div>
    </div>
  );
}
