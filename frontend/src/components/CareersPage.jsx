// src/components/CareersPage.jsx
import React, { useState } from 'react';
import './CareersPage.css';
import { 
  ChevronRight, 
  MapPin, 
  Clock, 
  DollarSign, 
  Users, 
  Heart, 
  Zap, 
  Target, 
  X, 
  Send,
  Upload,
  Mail,
  Phone,
  User
} from 'lucide-react';

const CareersPage = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    coverLetter: '',
    resume: null
  });

  const jobListings = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      department: "Engineering",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$120k - $160k",
      description: "We're looking for a senior frontend developer to join our growing team. You'll be responsible for building beautiful, responsive web applications using React, TypeScript, and modern CSS frameworks.",
      requirements: [
        "5+ years of experience with React and JavaScript",
        "Strong knowledge of HTML5, CSS3, and responsive design",
        "Experience with state management (Redux, Context API)",
        "Familiarity with testing frameworks (Jest, Cypress)",
        "Bachelor's degree in Computer Science or equivalent experience"
      ],
      benefits: ["Health Insurance", "401k Matching", "Flexible PTO", "Remote Work Options"]
    },
    {
      id: 2,
      title: "Product Manager",
      department: "Product",
      location: "New York, NY",
      type: "Full-time",
      salary: "$110k - $140k",
      description: "Join our product team to help shape the future of our platform. You'll work closely with engineering, design, and business stakeholders to define and execute product strategy.",
      requirements: [
        "3+ years of product management experience",
        "Strong analytical and problem-solving skills",
        "Experience with agile development methodologies",
        "Excellent communication and leadership skills",
        "Background in B2B SaaS products preferred"
      ],
      benefits: ["Health Insurance", "Stock Options", "Professional Development", "Flexible Hours"]
    },
    {
      id: 3,
      title: "UX/UI Designer",
      department: "Design",
      location: "Remote",
      type: "Full-time",
      salary: "$90k - $120k",
      description: "We're seeking a talented UX/UI designer to create intuitive and engaging user experiences. You'll collaborate with product and engineering teams to design user-centered solutions.",
      requirements: [
        "4+ years of UX/UI design experience",
        "Proficiency in Figma, Sketch, or similar tools",
        "Strong portfolio demonstrating design process",
        "Experience with user research and testing",
        "Understanding of accessibility principles"
      ],
      benefits: ["Health Insurance", "Design Conference Budget", "Home Office Setup", "Unlimited PTO"]
    },
    {
      id: 4,
      title: "Backend Engineer",
      department: "Engineering",
      location: "Austin, TX",
      type: "Full-time",
      salary: "$100k - $130k",
      description: "Help us build scalable backend systems that power our platform. You'll work with microservices, APIs, and cloud infrastructure to support millions of users.",
      requirements: [
        "4+ years of backend development experience",
        "Strong knowledge of Python, Node.js, or Go",
        "Experience with databases (SQL and NoSQL)",
        "Familiarity with cloud platforms (AWS, GCP, Azure)",
        "Understanding of system design principles"
      ],
      benefits: ["Health Insurance", "401k Matching", "Learning Budget", "Catered Lunches"]
    },
    {
      id: 5,
      title: "Marketing Specialist",
      department: "Marketing",
      location: "Los Angeles, CA",
      type: "Full-time",
      salary: "$65k - $85k",
      description: "Drive our marketing initiatives across digital channels. You'll manage campaigns, analyze performance, and help grow our brand presence in the market.",
      requirements: [
        "2+ years of digital marketing experience",
        "Knowledge of SEO, SEM, and social media marketing",
        "Experience with analytics tools (Google Analytics, etc.)",
        "Strong writing and content creation skills",
        "Bachelor's degree in Marketing or related field"
      ],
      benefits: ["Health Insurance", "Professional Development", "Flexible Schedule", "Team Events"]
    },
    {
      id: 6,
      title: "Data Scientist",
      department: "Data",
      location: "Seattle, WA",
      type: "Full-time",
      salary: "$130k - $170k",
      description: "Join our data science team to extract insights from large datasets and build predictive models. You'll work on machine learning projects that directly impact business decisions.",
      requirements: [
        "PhD or Master's in Data Science, Statistics, or related field",
        "Strong programming skills in Python or R",
        "Experience with machine learning frameworks",
        "Knowledge of SQL and data visualization tools",
        "3+ years of industry experience preferred"
      ],
      benefits: ["Health Insurance", "Stock Options", "Conference Budget", "Research Time"]
    }
  ];

  const companyValues = [
    {
      icon: <Users className="value-icon" />,
      title: "Collaborative Culture",
      description: "We believe great things happen when talented people work together towards a common goal."
    },
    {
      icon: <Heart className="value-icon" />,
      title: "Work-Life Balance",
      description: "We support flexible working arrangements and prioritize your well-being and personal growth."
    },
    {
      icon: <Zap className="value-icon" />,
      title: "Innovation First",
      description: "We encourage experimentation, creative thinking, and aren't afraid to challenge the status quo."
    },
    {
      icon: <Target className="value-icon" />,
      title: "Impact Driven",
      description: "Every role contributes to meaningful outcomes that make a difference for our users and community."
    }
  ];

  const handleJobClick = (job) => {
    setSelectedJob(job);
  };

  const handleApplyClick = (job) => {
    setFormData({ ...formData, position: job.title });
    setShowApplicationForm(true);
    setSelectedJob(null);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      resume: e.target.files[0]
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Application submitted:', formData);
    alert('Application submitted successfully!');
    setShowApplicationForm(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      position: '',
      coverLetter: '',
      resume: null
    });
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="careers-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">Join Our Amazing Team</h1>
            <p className="hero-subtitle">
              Build the future with us. We're looking for passionate individuals who want to make a real impact.
            </p>
            <div className="hero-buttons">
              <button 
                onClick={() => scrollToSection('jobs')}
                className="btn btn-primary"
              >
                View Open Positions
              </button>
              <button 
                onClick={() => scrollToSection('culture')}
                className="btn btn-secondary"
              >
                Learn About Our Culture
              </button>
            </div>
          </div>
        </div>
        <div className="hero-gradient"></div>
      </section>

      {/* Company Culture Section */}
      <section id="culture" className="culture-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Work With Us?</h2>
            <p className="section-subtitle">
              We're more than just a company - we're a community of innovators, dreamers, and achievers working together to create something extraordinary.
            </p>
          </div>
          
          <div className="values-grid">
            {companyValues.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon-wrapper">
                  {value.icon}
                </div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings Section */}
      <section id="jobs" className="jobs-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Open Positions</h2>
            <p className="section-subtitle">
              Find your next opportunity and join a team that values innovation, growth, and making a meaningful impact.
            </p>
          </div>

          <div className="jobs-grid">
            {jobListings.map((job) => (
              <div key={job.id} className="job-card">
                <div className="job-content">
                  <div className="job-header">
                    <h3 className="job-title">{job.title}</h3>
                    <span className="job-department">{job.department}</span>
                  </div>
                  
                  <div className="job-meta">
                    <div className="job-meta-item">
                      <MapPin className="job-meta-icon" />
                      <span>{job.location}</span>
                    </div>
                    <div className="job-meta-item">
                      <Clock className="job-meta-icon" />
                      <span>{job.type}</span>
                    </div>
                    <div className="job-meta-item">
                      <DollarSign className="job-meta-icon" />
                      <span>{job.salary}</span>
                    </div>
                  </div>
                  
                  <p className="job-description">{job.description}</p>
                  
                  <div className="job-actions">
                    <button 
                      onClick={() => handleJobClick(job)}
                      className="btn-text"
                    >
                      View Details
                      <ChevronRight className="btn-icon" />
                    </button>
                    <button 
                      onClick={() => handleApplyClick(job)}
                      className="btn btn-primary"
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Detail Modal */}
      {selectedJob && (
        <div className="modal-overlay" onClick={() => setSelectedJob(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-title-section">
                <h2 className="modal-title">{selectedJob.title}</h2>
                <div className="modal-meta">
                  <span className="job-department">{selectedJob.department}</span>
                  <div className="job-meta-item">
                    <MapPin className="job-meta-icon" />
                    <span>{selectedJob.location}</span>
                  </div>
                  <div className="job-meta-item">
                    <Clock className="job-meta-icon" />
                    <span>{selectedJob.type}</span>
                  </div>
                  <div className="job-meta-item">
                    <DollarSign className="job-meta-icon" />
                    <span>{selectedJob.salary}</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setSelectedJob(null)}
                className="modal-close"
              >
                <X className="close-icon" />
              </button>
            </div>
            
            <div className="modal-body">
              <div className="modal-section">
                <h3 className="modal-section-title">Job Description</h3>
                <p className="modal-text">{selectedJob.description}</p>
              </div>
              
              <div className="modal-section">
                <h3 className="modal-section-title">Requirements</h3>
                <ul className="requirements-list">
                  {selectedJob.requirements.map((req, index) => (
                    <li key={index} className="requirement-item">
                      <div className="requirement-bullet"></div>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="modal-section">
                <h3 className="modal-section-title">Benefits</h3>
                <div className="benefits-grid">
                  {selectedJob.benefits.map((benefit, index) => (
                    <span key={index} className="benefit-tag">{benefit}</span>
                  ))}
                </div>
              </div>
              
              <div className="modal-actions">
                <button 
                  onClick={() => handleApplyClick(selectedJob)}
                  className="btn btn-primary btn-large"
                >
                  Apply for this Position
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Application Form Modal */}
      {showApplicationForm && (
        <div className="modal-overlay" onClick={() => setShowApplicationForm(false)}>
          <div className="modal-content application-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2 className="modal-title">Apply for {formData.position}</h2>
              <button 
                onClick={() => setShowApplicationForm(false)}
                className="modal-close"
              >
                <X className="close-icon" />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="application-form">
              <div className="form-grid">
                <div className="form-group">
                  <label className="form-label">
                    <User className="form-icon" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label className="form-label">
                    <Mail className="form-icon" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label className="form-label">
                    <Phone className="form-icon" />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="form-input"
                  />
                </div>
                
                <div className="form-group">
                  <label className="form-label">
                    <Upload className="form-icon" />
                    Resume *
                  </label>
                  <input
                    type="file"
                    name="resume"
                    onChange={handleFileChange}
                    className="form-file"
                    accept=".pdf,.doc,.docx"
                    required
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label className="form-label">Cover Letter</label>
                <textarea
                  name="coverLetter"
                  value={formData.coverLetter}
                  onChange={handleInputChange}
                  className="form-textarea"
                  rows="6"
                  placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                ></textarea>
              </div>
              
              <div className="form-actions">
                <button 
                  type="button" 
                  onClick={() => setShowApplicationForm(false)}
                  className="btn btn-secondary"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="btn btn-primary"
                >
                  <Send className="btn-icon" />
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CareersPage;