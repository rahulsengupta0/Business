import React from 'react';
import './Team.css';
import person1 from '../assets/person1.jpg';
import person2 from '../assets/person2.jpg';
import person3 from '../assets/person3.jpg';
import person4 from '../assets/person4.jpg';
import person5 from '../assets/person5.jpg';

const teamMembers = [
  {
    name: 'Danny Boyle',
    role: 'Team Leader',
    description: 'Mutual Fund Manager',
    image: person1,
  },
  {
    name: 'Susan Sandron',
    role: 'Team Leader',
    description: 'Investment Analyst, Portfolio Management',
    image: person2,
  },
  {
    name: 'Jimmy Low Life',
    role: 'Team Leader',
    description: 'Banking and Financial Advisor, Investment',
    image: person3,
  },
  {
    name: 'Tina Fey',
    role: 'Team Leader',
    description: 'Financial Analyst, Investment Specialist',
    image: person4,
  },
  {
    name: 'Stephen Lang',
    role: 'Team Leader',
    description: 'Wealth and Risk Management',
    image: person5,
  },
];

const Team = () => {
  return (
    <section className="team">
      <h2>The Financial Wizards in Our Team</h2>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div className="team-item" key={index}>
            <img src={member.image} alt={member.name} />
            <div className="text-box">
              <h3>{member.name}</h3>
              <h4>{member.role}</h4>
              <p>{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
