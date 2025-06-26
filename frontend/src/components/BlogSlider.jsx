import React, { useRef } from 'react';
import './BlogSlider.css';
import websiteImg from '../assets/website.jpg';
import financialImg from '../assets/financial.jpg';
import businessImg from '../assets/business.jpg';
import agencyImg from '../assets/agency.jpg';
import consultingImg from '../assets/consulting.jpg';

const blogData = [
  {
    date: 'Mar 22, 2023',
    title: 'Transform your winter blues into winter creativity',
    subtitle: 'Create a blog post subtitle that summarizes your post in a few short, punchy sentences and...',
    image: websiteImg,
  },
  {
    date: 'Mar 22, 2023',
    title: 'Making More from Your Salary',
    subtitle: 'Unlock financial potential with smart strategies, boost your savings, and enjoy a richer life...',
    image: financialImg,
  },
  {
    date: 'Jun 18, 2023',
    title: 'Praesent Iaculis Tortor Viverra',
    subtitle: 'Explore new business insights, enhance your skills, and stay ahead of the curve...',
    image: businessImg,
  },
  {
    date: 'Jul 12, 2023',
    title: 'Business Growth Strategies',
    subtitle: 'Master growth tactics, scale your operations, and achieve lasting success...',
    image: agencyImg,
  },
  {
    date: 'Aug 05, 2023',
    title: 'Modern Consulting Techniques',
    subtitle: 'Adopt cutting-edge methods, improve client outcomes, and elevate your consulting game...',
    image: consultingImg,
  },
];

const BlogSlider = () => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };
  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <div className="blog-slider">
      <h2>Our Latest Blog Posts</h2>
      <div className="slider-container">
        <button className="nav-button left" onClick={scrollLeft}>
          ‹
        </button>
        <div className="blog-cards" ref={sliderRef}>
          {blogData.map((blog, index) => (
            <div className="blog-card" key={index}>
              <div className="image-wrapper">
                <img src={blog.image} alt={blog.title} />
                <div className="date-badge">{blog.date}</div>
              </div>
              <div className="blog-content">
                <h3>{blog.title}</h3>
                <p className="subtitle">{blog.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="nav-button right" onClick={scrollRight}>
          ›
        </button>
      </div>
      <div className="newsletter-section">
        <h3>Let the posts come to you.</h3>
        <input type="email" placeholder="Email *" />
        <label>
          <input type="checkbox" /> Yes, subscribe me to your newsletter.*
        </label>
      </div>
    </div>
  );
};

export default BlogSlider;