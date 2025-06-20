import React from 'react';
import './MarqueeSection.css';

export default function MarqueeSection() {
  const topItems = [
    { icon: '🔒', text: 'GDPR Compliance' },
    { icon: '🎨', text: 'Figma Source Files' },
    { icon: '📄', text: 'Detailed Docs' },
    { icon: '🌍', text: 'Multilingual' },
  ];

  const bottomItems = [
    { icon: '🤖', text: 'AI Fully-Equipped' },
    { icon: '✉️', text: 'Newsletter & Popups' },
    { icon: '⚡️', text: 'Subscription Forms' },
    { icon: '🖥️', text: 'Modern Design' },
  ];

  return (
    <div className="marquee-wrapper">
      <div className="marquee top">
        {topItems.map((item, index) => (
          <div key={index} className="marquee-item">
            <span>{item.icon}</span> {item.text}
          </div>
        ))}
      </div>
      <div className="marquee bottom">
        {bottomItems.map((item, index) => (
          <div key={index} className="marquee-item">
            <span>{item.icon}</span> {item.text}
          </div>
        ))}
      </div>
    </div>
  );
}
