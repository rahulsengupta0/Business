import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaGooglePlusG, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="top-footer">
        <div className="footer-contact">
          <FaMapMarkerAlt className="footer-icon" />
          <div>
            <p>227 Marion Street Columbia, SC 29201</p>
          </div>
        </div>
        <div className="footer-contact">
          <FaPhoneAlt className="footer-icon" />
          <div>
            <p>1-888-123-4567</p>
            <a href="mailto:info@finance.com">info@finance.com</a>
          </div>
        </div>
        <div className="footer-social">
          <FaFacebookF />
          <FaTwitter />
          <FaGooglePlusG />
        </div>
      </div>

      <div className="main-footer">
        <div className="footer-col">
          <h3>SOUND FINANCE SOLUTIONS FOR SUCCESSFUL PEOPLE</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Amet consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
          </p>
        </div>
        <div className="footer-col">
          <h4>USEFUL LINKS</h4>
          <ul>
            <li>About Us</li>
            <li>Clients</li>
            <li>Presentation</li>
            <li>Support</li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>ABOUT US</h4>
          <ul>
            <li>Payment Plans</li>
            <li>Make Savings More</li>
            <li>Tax Calculator</li>
            <li>Talk to Us</li>
          </ul>
        </div>
      </div>

      <div className="scroll-top">
        <a href="#top">⬆</a>
      </div>
    </footer>
  );
}
