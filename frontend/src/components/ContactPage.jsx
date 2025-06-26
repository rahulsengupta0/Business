import React, { useState } from 'react';
import './ContactPage.css';
import { FaMapMarkerAlt, FaPhoneAlt, FaFax, FaEnvelope } from 'react-icons/fa';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  setIsLoading(true);
  setStatus('');

  try {
    const response = await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } else {
      throw new Error('Failed to send');
    }
  } catch (error) {
    console.error(error);
    setStatus('error');
  } finally {
    setIsLoading(false);
  }
};


  return (
    <div className="contact-container">
      <div className="contact-cards">
        <div className="contact-card">
          <FaMapMarkerAlt className="icon" />
          <h4>OUR MAIN OFFICE</h4>
          <p>SoHo 94 Broadway St<br />New York, NY 1001</p>
        </div>
        <div className="contact-card">
          <FaPhoneAlt className="icon" />
          <h4>PHONE NUMBER</h4>
          <p>234-9876-5400<br />888-0123-4567 (Toll Free)</p>
        </div>
        <div className="contact-card">
          <FaFax className="icon" />
          <h4>FAX</h4>
          <p>1-234-567-8900</p>
        </div>
        <div className="contact-card">
          <FaEnvelope className="icon" />
          <h4>EMAIL</h4>
          <p><a href="mailto:hello@theme.com">hello@theme.com</a></p>
        </div>
      </div>

      <div className="contact-form-box">
        <h2>Contact Us</h2>
        <div 
          className={`status-message ${status === 'success' ? 'success' : status === 'error' ? 'error' : ''}`} 
          role="alert"
          aria-live="polite"
        >
          {status === 'success' && 'Message sent successfully!'}
          {status === 'error' && 'Failed to send message. Please try again.'}
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
  <div className="input-group">
    <label htmlFor="name">Name</label>
    <input
      id="name"
      type="text"
      name="name"
      placeholder="Enter your Name"
      value={formData.name}
      onChange={handleChange}
      required
      aria-required="true"
    />
  </div>
  <div className="input-group">
    <label htmlFor="email">Email</label>
    <input
      id="email"
      type="email"
      name="email"
      placeholder="Enter a valid email address"
      value={formData.email}
      onChange={handleChange}
      required
      aria-required="true"
    />
  </div>
  <div className="input-group">
    <label htmlFor="message">Message</label>
    <textarea
      id="message"
      name="message"
      placeholder="Your Message"
      rows="5"
      value={formData.message}
      onChange={handleChange}
      required
      aria-required="true"
    ></textarea>
  </div>
  <button type="submit" disabled={isLoading}>
    {isLoading ? 'Sending...' : 'SUBMIT'}
  </button>
</form>

      </div>
    </div>
  );
};

export default ContactPage;