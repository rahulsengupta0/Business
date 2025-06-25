import React, { useRef } from 'react';
import './BlogSlider.css';
import websiteImg from '../assets/website.jpg';
import financialImg from '../assets/financial.jpg';
import businessImg from '../assets/business.jpg';
import agencyImg from '../assets/agency.jpg';
import consultingImg from '../assets/consulting.jpg';

const blogData = [
  {
    date: '21 SEP',
    title: 'Investment Planning',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore...',
    image: websiteImg,
  },
  {
    date: '21 SEP',
    title: 'Making More from Your Salary',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore...',
    image: financialImg,
  },
  {
    date: '18 JUN',
    title: 'Praesent Iaculis Tortor Viverra',
    excerpt:
      'Mauris sodales enim nec orci condimentum, et suscipit ex auctor. Aenean accumsan ligula diam, a tincidunt lectus...',
    image: businessImg,
  },
  {
    date: '12 JUL',
    title: 'Business Growth Strategies',
    excerpt:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem...',
    image: agencyImg,
  },
  {
    date: '05 AUG',
    title: 'Modern Consulting Techniques',
    excerpt:
      'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea...',
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
                <p>{blog.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="nav-button right" onClick={scrollRight}>
          ›
        </button>
      </div>
    </div>
  );
};

export default BlogSlider;
