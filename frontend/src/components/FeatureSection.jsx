import React, { useEffect } from "react";
import "./FeatureSection.css";

export default function FeatureSection() {
  const features = [
    {
      title: "1. UI/UX Design",
      description:
        "Crafting interfaces that captivate users and skyrocket conversions with purpose-driven design.",
      points: [
        "User flows engineered for peak engagement.",
        "Mobile-first designs with award potential.",
        "Prototypes delivered in under 72 hours.",
      ],
    },
    {
      title: "2. Brand Design",
      description:
        "Creating visual identities that captivate and build unshakable trust with storytelling finesse.",
      points: [
        "Logos with intricate narrative layers.",
        "Scalable visual systems for growth.",
        "Intuitive style guides for all team levels.",
      ],
    },
    {
      title: "3. Webflow Development",
      description:
        "Building lightning-fast websites that dominate rankings and evolve with your vision.",
      points: [
        "Optimized for ultra-fast loading.",
        "SEO-ready for top search rankings.",
        "Flawless Webflow experiences guaranteed.",
      ],
    },
    {
      title: "4. No-Code Development",
      description:
        "Launching robust MVPs without dev delays—turn ideas into reality in weeks.",
      points: [
        "Rapid MVP deployment.",
        "Engineers’ time saved effortlessly.",
        "Results delivered in weeks, not months.",
      ],
    },
  ];

  useEffect(() => {
    const cards = document.querySelectorAll(".feature-card");
    cards.forEach((card, index) => {
      card.style.transitionDelay = `${index * 0.2}s`;
    });
  }, []);

  return (
    <div className="feature-section">
      <div className="feature-wrapper">
        {features.map((feature, index) => (
          <div className="feature-card" key={feature.title} data-index={index}>
            <div className="card-inner">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <ul>
                {feature.points.map((point, i) => (
                  <li key={i}>
                    <span className="check">✔</span> {point}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card-overlay"></div>
          </div>
        ))}
      </div>
    </div>
  );
}