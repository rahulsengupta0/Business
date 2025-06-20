import React from "react";
import "./FeatureSection.css";

export default function FeatureSection() {
  const features = [
    {
      title: "1.UI/UX Design",
      description:
        "Interfaces that delight users and drive conversions. We design with outcomes in mind.",
      points: [
        "User flows that boost engagement.",
        "Mobile-first, award-worthy interfaces.",
        "Prototypes in 72 hours or less.",
      ],
    },
    {
      title: "2.Brand Design",
      description:
        "Visual identities that command attention and build trust. Logos, style guides, and assets crafted to tell your story.",
      points: [
        "Logos with hidden storytelling.",
        "Visual identities built to scale.",
        "Style guides even your interns can use.",
      ],
    },
    {
      title: "3.Webflow Development",
      description:
        "Websites that load fast, rank higher, and grow with you. No bloated code—just seamless Webflow experiences.",
      points: [
        "Websites that load fast.",
        "Rank higher in search.",
        "Seamless Webflow experiences.",
      ],
    },
    {
      title: "4.No‑Code Development",
      description:
        "Launch functional MVPs without engineering headaches. Solutions in weeks, not months.",
      points: [
        "Launch MVPs quickly.",
        "Save engineering time.",
        "Solutions in weeks, not months.",
      ],
    },
  ];

  return (
    <div className="feature-section">
      {features.map((feature) => (
        <div className="feature-card" key={feature.title}>
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
          <ul>
            {feature.points.map((point) => (
              <li key={point}>
                <span className="check">✔</span> {point}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
