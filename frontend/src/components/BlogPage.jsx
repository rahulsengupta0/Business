import React, { useState, useEffect } from 'react';
import './BlogPage.css';

// Import all images
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import logo from '../assets/logo.jpg';
import Navbar from './Navbar';

const BlogPage = () => {
  const heroImages = [img1, img2, img3, img4];
  const [heroIndex, setHeroIndex] = useState(0);
  const blogPosts = [
    {
      title: 'The Future of Business Consulting',
      excerpt: 'Explore how emerging trends are shaping the future of consultancy in 2025.',
      image: img1,
      date: 'June 20, 2025',
      link: '#',
    },
    {
      title: 'Strategies for Sustainable Growth',
      excerpt: 'Learn actionable strategies to ensure long-term success for your business.',
      image: img2,
      date: 'June 18, 2025',
      link: '#',
    },
    {
      title: 'Innovations in Digital Marketing',
      excerpt: 'Discover the latest innovations driving digital marketing success.',
      image: img3,
      date: 'June 15, 2025',
      link: '#',
    },
    {
      title: 'Leadership in a Changing World',
      excerpt: 'Insights on adapting leadership styles to meet modern challenges.',
      image: img4,
      date: 'June 12, 2025',
      link: '#',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <div className="blog-page">
        <Navbar/>
      <header className="blog-hero">
        <div className="hero-content">
          <img
            src={heroImages[heroIndex]}
            alt={`Blog Hero ${heroIndex + 1}`}
            className="hero-image"
            style={{ opacity: 1 }}
          />
          <div className="hero-overlay">
            <h1>Our Blog</h1>
          </div>
        </div>
      </header>
      <section className="blog-intro">
        <div className="intro-content">
          <h2>Welcome to Our Insights</h2>
          <p>Stay updated with the latest trends, strategies, and insights from our expert consultants. Explore a collection of articles designed to inspire and inform business leaders like you.</p>
        </div>
      </section>
      <section className="blog-posts">
        <div className="posts-grid">
          {blogPosts.map((post, index) => (
            <div key={index} className="blog-post">
              <div className="post-image-container">
                <img src={post.image} alt={post.title} className="post-image" />
                <div className="post-overlay">
                  <span className="post-date">{post.date}</span>
                  <a href={post.link} className="read-more">Read More</a>
                </div>
              </div>
              <div className="post-content">
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <footer className="blog-footer">
        <img src={logo} alt="Logo" className="footer-logo" />
        <p>© 2025 Consultancy Firm. All rights reserved.</p>
        <div className="footer-links">
          <a href="#about">About</a> | <a href="#services">Services</a> | <a href="#contact">Contact</a>
        </div>
      </footer>
    </div>
  );
};

export default BlogPage;