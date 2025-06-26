import React, { useState } from 'react';
import { ChevronRight, Users, TrendingUp, Target, Award, Mail, Phone, MapPin } from 'lucide-react';

// Simulated image imports
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import logo from '../assets/logo.jpg';
import person1 from '../assets/person1.jpg';
import person2 from '../assets/person2.jpg';
import person3 from '../assets/person3.jpg';
import person4 from '../assets/person4.jpg';
import person5 from '../assets/person5.jpg';
import Navbar from './Navbar';


const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('strategy');

  // Inline styles using your color theme
  const styles = {
    portfolio: {
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      lineHeight: '1.6',
      color: '#555',
      backgroundColor: '#f9f9f9',
      margin: 0,
      padding: 0
    },
    hero: {
      display: 'flex',
      alignItems: 'center',
      minHeight: '100vh',
      padding: '60px 2rem',
      background: 'linear-gradient(135deg, #f9f9f9 0%, #eaeaea 100%)',
      maxWidth: '1200px',
      margin: '0 auto',
      gap: '4rem'
    },
    heroContent: {
      flex: 1
    },
    heroTitle: {
      fontSize: '3.5rem',
      fontWeight: '800',
      color: '#1a3c50',
      marginBottom: '1.5rem',
      lineHeight: '1.2'
    },
    heroSubtitle: {
      fontSize: '1.3rem',
      color: '#555',
      marginBottom: '3rem',
      maxWidth: '500px'
    },
    heroStats: {
      display: 'flex',
      gap: '3rem',
      marginBottom: '3rem'
    },
    stat: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    statNumber: {
      fontSize: '2.5rem',
      fontWeight: '700',
      color: '#a3bffa'
    },
    statLabel: {
      fontSize: '0.9rem',
      color: '#555',
      textAlign: 'center'
    },
    ctaButton: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.5rem',
      background: '#1a3c50',
      color: 'white',
      padding: '1rem 2rem',
      border: 'none',
      borderRadius: '50px',
      fontSize: '1.1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    },
    heroImage: {
      flex: 1
    },
    heroImg: {
      width: '100%',
      height: '500px',
      objectFit: 'cover',
      borderRadius: '20px',
      boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)'
    },
    section: {
      padding: '100px 0'
    },
    sectionWhite: {
      background: 'white'
    },
    sectionGreen: {
      background: '#e8ede0'
    },
    sectionDark: {
      background: '#1a3c50',
      color: 'white'
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px'
    },
    sectionTitle: {
      fontSize: '2.5rem',
      fontWeight: '700',
      color: '#1a3c50',
      textAlign: 'center',
      marginBottom: '1rem'
    },
    sectionTitleWhite: {
      color: 'white'
    },
    sectionSubtitle: {
      fontSize: '1.2rem',
      color: '#555',
      textAlign: 'center',
      marginBottom: '4rem',
      maxWidth: '600px',
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    sectionSubtitleWhite: {
      color: 'white'
    },
    servicesTabs: {
      display: 'flex',
      justifyContent: 'center',
      gap: '1rem',
      marginBottom: '3rem',
      flexWrap: 'wrap'
    },
    tabButton: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      padding: '1rem 2rem',
      border: '2px solid #eaeaea',
      background: 'white',
      color: '#555',
      borderRadius: '50px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      fontWeight: '600'
    },
    tabButtonActive: {
      borderColor: '#a3bffa',
      background: '#a3bffa',
      color: 'white'
    },
    serviceContent: {
      minHeight: '400px'
    },
    serviceDetails: {
      display: 'flex',
      alignItems: 'center',
      gap: '4rem'
    },
    serviceInfo: {
      flex: 1
    },
    serviceTitle: {
      fontSize: '2rem',
      color: '#1a3c50',
      marginBottom: '1rem'
    },
    serviceDescription: {
      fontSize: '1.1rem',
      marginBottom: '2rem'
    },
    featuresList: {
      listStyle: 'none',
      padding: 0
    },
    featureItem: {
      padding: '0.5rem 0',
      paddingLeft: '1.5rem',
      position: 'relative'
    },
    serviceVisual: {
      flex: 1
    },
    serviceImg: {
      width: '100%',
      height: '300px',
      objectFit: 'cover',
      borderRadius: '15px',
      boxShadow: '0 15px 40px rgba(0, 0, 0, 0.1)'
    },
    projectsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem'
    },
    projectCard: {
      background: 'white',
      borderRadius: '15px',
      overflow: 'hidden',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease'
    },
    projectImage: {
      position: 'relative',
      height: '200px',
      overflow: 'hidden'
    },
    projectImg: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    },
    projectOverlay: {
      position: 'absolute',
      top: '1rem',
      right: '1rem',
      background: '#a3bffa',
      color: 'white',
      padding: '0.5rem',
      borderRadius: '50%'
    },
    projectContent: {
      padding: '1.5rem'
    },
    projectTitle: {
      fontSize: '1.3rem',
      fontWeight: '600',
      color: '#1a3c50',
      marginBottom: '0.5rem'
    },
    projectClient: {
      fontSize: '0.9rem',
      color: '#a3bffa',
      marginBottom: '1rem'
    },
    projectDescription: {
      marginBottom: '1rem',
      color: '#555'
    },
    projectResult: {
      fontWeight: '600',
      color: '#1a3c50',
      background: '#e8ede0',
      padding: '0.5rem 1rem',
      borderRadius: '20px',
      display: 'inline-block'
    },
    teamGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '2rem'
    },
    teamCard: {
      textAlign: 'center',
      padding: '2rem',
      borderRadius: '15px',
      background: '#f9f9f9',
      transition: 'transform 0.3s ease'
    },
    memberImage: {
      width: '120px',
      height: '120px',
      margin: '0 auto 1.5rem',
      borderRadius: '50%',
      overflow: 'hidden',
      border: '4px solid #a3bffa'
    },
    memberImg: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    },
    memberName: {
      fontSize: '1.3rem',
      fontWeight: '600',
      color: '#1a3c50',
      marginBottom: '0.5rem'
    },
    memberRole: {
      color: '#a3bffa',
      fontWeight: '600',
      marginBottom: '1rem'
    },
    memberExpertise: {
      fontSize: '0.9rem',
      color: '#555'
    },
    contactContent: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '4rem',
      marginTop: '3rem'
    },
    contactInfo: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem'
    },
    contactItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem'
    },
    contactIcon: {
      color: '#a3bffa'
    },
    contactItemTitle: {
      color: '#a3bffa',
      marginBottom: '0.5rem'
    },
    contactForm: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem'
    },
    formInput: {
      padding: '1rem',
      border: '1px solid #eaeaea',
      borderRadius: '8px',
      fontSize: '1rem',
      background: 'white',
      color: '#555'
    },
    formTextarea: {
      padding: '1rem',
      border: '1px solid #eaeaea',
      borderRadius: '8px',
      fontSize: '1rem',
      background: 'white',
      color: '#555',
      resize: 'vertical',
      minHeight: '120px'
    },
    submitButton: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.5rem',
      background: '#a3bffa',
      color: 'white',
      padding: '1rem 2rem',
      border: 'none',
      borderRadius: '8px',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    }
  };

  const services = [
    {
      id: 'strategy',
      title: 'Strategic Planning',
      icon: <Target style={{width: '20px', height: '20px'}} />,
      description: 'Comprehensive business strategy development and implementation',
      features: ['Market Analysis', 'Competitive Intelligence', 'Growth Planning', 'Risk Assessment']
    },
    {
      id: 'operations',
      title: 'Operations Excellence',
      icon: <TrendingUp style={{width: '20px', height: '20px'}} />,
      description: 'Optimize processes and improve operational efficiency',
      features: ['Process Optimization', 'Cost Reduction', 'Quality Management', 'Digital Transformation']
    },
    {
      id: 'leadership',
      title: 'Leadership Development',
      icon: <Users style={{width: '20px', height: '20px'}} />,
      description: 'Build strong leadership capabilities across your organization',
      features: ['Executive Coaching', 'Team Building', 'Change Management', 'Performance Management']
    }
  ];

  const projects = [
    {
      title: 'Global Retail Transformation',
      client: 'Fortune 500 Retailer',
      image: img1,
      result: '40% increase in operational efficiency',
      description: 'Led digital transformation initiative across 200+ stores'
    },
    {
      title: 'Financial Services Restructuring',
      client: 'Regional Bank',
      image: img2,
      result: '$15M cost savings annually',
      description: 'Optimized organizational structure and streamlined operations'
    },
    {
      title: 'Manufacturing Excellence Program',
      client: 'Industrial Manufacturer',
      image: img3,
      result: '25% reduction in production costs',
      description: 'Implemented lean manufacturing principles and automation'
    },
    {
      title: 'Healthcare System Integration',
      client: 'Multi-Hospital Network',
      image: img4,
      result: '30% improvement in patient satisfaction',
      description: 'Unified operations across hospital network for better care delivery'
    }
  ];

  const team = [
    {
      name: 'Sarah Mitchell',
      role: 'Managing Partner',
      image: person3,
      expertise: 'Strategic Planning, M&A'
    },
    {
      name: 'David Chen',
      role: 'Senior Consultant',
      image: person4,
      expertise: 'Operations, Digital Transformation'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Principal Consultant',
      image: person5,
      expertise: 'Leadership Development, Change Management'
    },
    {
      name: 'Michael Thompson',
      role: 'Senior Analyst',
      image: person3,
      expertise: 'Data Analytics, Process Optimization'
    }
  ];

  return (
    <div style={styles.portfolio}>
        <Navbar/>
      {/* Hero Section */}
      <section id="home" style={styles.hero}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>Transforming Businesses for the Future</h1>
          <p style={styles.heroSubtitle}>
            Strategic consulting solutions that drive growth, optimize operations, and unlock your organization's full potential
          </p>
          <div style={styles.heroStats}>
            <div style={styles.stat}>
              <span style={styles.statNumber}>150+</span>
              <span style={styles.statLabel}>Projects Completed</span>
            </div>
            <div style={styles.stat}>
              <span style={styles.statNumber}>$50M+</span>
              <span style={styles.statLabel}>Client Savings Generated</span>
            </div>
            <div style={styles.stat}>
              <span style={styles.statNumber}>98%</span>
              <span style={styles.statLabel}>Client Satisfaction Rate</span>
            </div>
          </div>
          <button style={styles.ctaButton}>
            Get Started <ChevronRight style={{width: '20px', height: '20px'}} />
          </button>
        </div>
        <div style={styles.heroImage}>
          <img src={img1} alt="Business consulting" style={styles.heroImg} />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" style={{...styles.section, ...styles.sectionWhite}}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Our Services</h2>
          <p style={styles.sectionSubtitle}>
            Comprehensive consulting solutions tailored to your business needs
          </p>
          
          <div style={styles.servicesTabs}>
            {services.map((service) => (
              <button
                key={service.id}
                style={{
                  ...styles.tabButton,
                  ...(activeTab === service.id ? styles.tabButtonActive : {})
                }}
                onClick={() => setActiveTab(service.id)}
              >
                {service.icon}
                {service.title}
              </button>
            ))}
          </div>

          <div style={styles.serviceContent}>
            {services.map((service) => (
              activeTab === service.id && (
                <div key={service.id} style={styles.serviceDetails}>
                  <div style={styles.serviceInfo}>
                    <h3 style={styles.serviceTitle}>{service.title}</h3>
                    <p style={styles.serviceDescription}>{service.description}</p>
                    <ul style={styles.featuresList}>
                      {service.features.map((feature, index) => (
                        <li key={index} style={styles.featureItem}>
                          <span style={{position: 'absolute', left: 0, color: '#a3bffa', fontWeight: 'bold'}}>✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div style={styles.serviceVisual}>
                    <img src={img2} alt={service.title} style={styles.serviceImg} />
                  </div>
                </div>
              )
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" style={{...styles.section, ...styles.sectionGreen}}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Client Success Stories</h2>
          <p style={styles.sectionSubtitle}>
            Real results from our strategic partnerships
          </p>
          
          <div style={styles.projectsGrid}>
            {projects.map((project, index) => (
              <div key={index} style={styles.projectCard}>
                <div style={styles.projectImage}>
                  <img src={project.image} alt={project.title} style={styles.projectImg} />
                  <div style={styles.projectOverlay}>
                    <Award style={{width: '16px', height: '16px'}} />
                  </div>
                </div>
                <div style={styles.projectContent}>
                  <h3 style={styles.projectTitle}>{project.title}</h3>
                  <p style={styles.projectClient}>{project.client}</p>
                  <p style={styles.projectDescription}>{project.description}</p>
                  <div style={styles.projectResult}>{project.result}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" style={{...styles.section, ...styles.sectionWhite}}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Our Expert Team</h2>
          <p style={styles.sectionSubtitle}>
            Industry veterans with proven track records
          </p>
          
          <div style={styles.teamGrid}>
            {team.map((member, index) => (
              <div key={index} style={styles.teamCard}>
                <div style={styles.memberImage}>
                  <img src={member.image} alt={member.name} style={styles.memberImg} />
                </div>
                <div>
                  <h3 style={styles.memberName}>{member.name}</h3>
                  <p style={styles.memberRole}>{member.role}</p>
                  <p style={styles.memberExpertise}>{member.expertise}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{...styles.section, ...styles.sectionDark}}>
        <div style={styles.container}>
          <h2 style={{...styles.sectionTitle, ...styles.sectionTitleWhite}}>Ready to Transform Your Business?</h2>
          <p style={{...styles.sectionSubtitle, ...styles.sectionSubtitleWhite}}>
            Let's discuss how we can help you achieve your goals
          </p>
          
          <div style={styles.contactContent}>
            <div style={styles.contactInfo}>
              <div style={styles.contactItem}>
                <Phone style={styles.contactIcon} />
                <div>
                  <h4 style={styles.contactItemTitle}>Phone</h4>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
              <div style={styles.contactItem}>
                <Mail style={styles.contactIcon} />
                <div>
                  <h4 style={styles.contactItemTitle}>Email</h4>
                  <p>hello@pinnacleconsulting.com</p>
                </div>
              </div>
              <div style={styles.contactItem}>
                <MapPin style={styles.contactIcon} />
                <div>
                  <h4 style={styles.contactItemTitle}>Office</h4>
                  <p>123 Business District, New York, NY 10001</p>
                </div>
              </div>
            </div>
            
            <div style={styles.contactForm}>
              <input type="text" placeholder="Your Name" style={styles.formInput} />
              <input type="email" placeholder="Your Email" style={styles.formInput} />
              <input type="text" placeholder="Company" style={styles.formInput} />
              <textarea placeholder="Tell us about your project" style={styles.formTextarea}></textarea>
              <button style={styles.submitButton}>
                Send Message <ChevronRight style={{width: '20px', height: '20px'}} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;