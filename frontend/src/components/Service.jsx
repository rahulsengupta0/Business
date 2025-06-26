import React, { useState } from 'react';
import { ChevronRight, Target, TrendingUp, Lightbulb, BarChart, Check } from 'lucide-react';
import './Service.css';

// Simulated image imports
import serviceHeroImg from '../assets/4.jpg';
import serviceDetail1 from '../assets/1.jpg';
import serviceDetail2 from '../assets/2.jpg';
import serviceDetail3 from '../assets/3.jpg';
import Navbar from './Navbar';
const Service = () => {
  const [activeService, setActiveService] = useState('strategy');

  const services = [
    {
      id: 'strategy',
      title: 'Strategic Planning',
      icon: <Target style={{ width: '24px', height: '24px' }} />,
      description: 'Craft bespoke strategies to align your vision with market demands and drive growth.',
      highlights: ['In-depth Market Research', 'Competitor Benchmarking', 'Vision Alignment', 'Actionable Roadmaps'],
      image: serviceDetail1,
    },
    {
      id: 'optimization',
      title: 'Process Optimization',
      icon: <TrendingUp style={{ width: '24px', height: '24px' }} />,
      description: 'Boost efficiency with streamlined processes and cutting-edge operational solutions.',
      highlights: ['Workflow Redesign', 'Cost Reduction Strategies', 'Tech Implementation', 'Real-time Analytics'],
      image: serviceDetail2,
    },
    {
      id: 'innovation',
      title: 'Innovation Solutions',
      icon: <Lightbulb style={{ width: '24px', height: '24px' }} />,
      description: 'Unleash creativity with innovative approaches to future-proof your business.',
      highlights: ['Idea Prototyping', 'Technology Adoption', 'Market Validation', 'Scalable Growth'],
      image: serviceDetail3,
    },
  ];

  return (
    <div className="service-page">
        <Navbar/>
      {/* Hero Section */}
      <section className="service-hero">
        <div className="hero-content">
          <h1 className="hero-title">Transform with Our Services</h1>
          <p className="hero-subtitle">
            Tailored solutions to elevate your business to new heights of success.
          </p>
          <button className="hero-cta">
            Explore Now <ChevronRight style={{ width: '20px', height: '20px' }} />
          </button>
        </div>
        <div className="hero-background">
          <img src={serviceHeroImg} alt="Service Hero" className="hero-img" />
        </div>
      </section>

      {/* Services Section */}
      <section className="service-section">
        <div className="service-container">
          <h2 className="section-title">Our Expertise</h2>
          <div className="service-tabs">
            {services.map((service) => (
              <button
                key={service.id}
                className={`service-tab ${activeService === service.id ? 'active' : ''}`}
                onClick={() => setActiveService(service.id)}
              >
                {service.icon}
                <span>{service.title}</span>
              </button>
            ))}
          </div>
          <div className="service-details-wrapper">
            {services.map((service) => (
              activeService === service.id && (
                <div key={service.id} className="service-card">
                  <div className="service-info">
                    <h3 className="service-title">{service.title}</h3>
                    <p className="service-description">{service.description}</p>
                    <ul className="service-highlights">
                      {service.highlights.map((highlight, index) => (
                        <li key={index} className="highlight-item">
                          <Check className="highlight-icon" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                    <button className="service-cta">
                      Learn More <BarChart style={{ width: '20px', height: '20px' }} />
                    </button>
                  </div>
                  <div className="service-visual">
                    <img src={service.image} alt={service.title} className="service-img" />
                  </div>
                </div>
              )
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="testimonial-section">
        <div className="service-container">
          <h2 className="section-title">Client Testimonials</h2>
          <div className="testimonial-slider">
            <div className="testimonial-card">
              <p className="testimonial-text">
                "Their strategic insights turned our vision into reality—truly exceptional!"
              </p>
              <p className="testimonial-author">- Alice Johnson, CEO, GrowthTech</p>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-text">
                "Optimization services saved us 25% in costs—highly professional team!"
              </p>
              <p className="testimonial-author">- Mark Lee, COO, NextGen Solutions</p>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-text">
                "Innovation solutions opened new markets for us—amazing support!"
              </p>
              <p className="testimonial-author">- Emily Chen, Founder, CreativeEdge</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="service-container">
          <h2 className="section-title section-title-white">Start Your Journey</h2>
          <p className="section-subtitle section-subtitle-white">
            Let’s collaborate to achieve your business goals today.
          </p>
          <button className="contact-cta">
            Get in Touch <ChevronRight style={{ width: '20px', height: '20px' }} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Service;