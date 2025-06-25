// src/components/PopupModal.jsx
import React from 'react';
import './PopupModal.css';
import shocked from '../assets/shocked.jpg';

const PopupModal = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <button className="popup-close" onClick={onClose}>&times;</button>
        <div className="popup-inner">
          <div className="popup-left" style={{ backgroundImage: `url(${shocked})` }} />
          <div className="popup-right">
            <h2>Unlock 20% off<br />your first order</h2>
            <p>Sign up for special offers and updates</p>
            <input type="email" placeholder="Email" className="popup-email" />
            <button className="popup-btn">Unlock Offer</button>
            <p className="popup-terms">
              By signing up, you agree to receive email marketing
            </p>
            <button className="popup-decline" onClick={onClose}>No, thanks</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupModal;
