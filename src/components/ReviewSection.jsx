import React from "react";
import "./ReviewSection.css"; // Import the CSS file
import person from "../assets/person4.jpg";

const ReviewSection = () => {
  return (
    <section className="review-section">
      <h2 className="review-heading">What Our Clients Say</h2>
      <div className="review-card">
        <div className="review-image">
          <img src={person} alt="Reviewer" />
        </div>
        <div className="review-content">
          <div className="review-stars">★★★★★</div>
          <p className="review-text">
            “Working with Infinity Studio was a transformative experience. Their team
            not only understood our vision but also brought it to life with creativity
            and precision. The results exceeded our expectations, and the growth we’ve
            seen since partnering with them has been phenomenal. We couldn’t have
            chosen a better agency to work with!”
          </p>
          <div className="review-author">
            <h3>Alex Mitchell</h3>
            <span>CEO of Tech Innovators</span>
          </div>
          <a href="#" className="review-button">Read Reviews on Clutch</a>
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
