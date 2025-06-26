import React from "react";
import AIbot from "../assets/AIbot.jpg"; // Your uploaded image
import "./AiChatSection.css";           // Styles

const AiChatSection = () => {
  return (
    <section className="ai-chat-section">
      <div className="ai-chat-text">
        <span className="ai-tag">FAST & EFFICIENT AI SUPPORT</span>
        <h2>Professional AI‑Chat Support</h2>
        <p>
          We have integrated a free AI Support Agent, powered by OpenAI,
          directly into the theme’s dashboard and support system to provide
          instant technical assistance. It is extensively trained on the theme
          and its documentation to ensure accurate and helpful support.
        </p>
        <a href="#" className="view-demo-button">View Demo</a>
      </div>
      <div className="ai-chat-image">
        <img src={AIbot} alt="AI Chat Support Demo" />
      </div>
    </section>
  );
};

export default AiChatSection;
