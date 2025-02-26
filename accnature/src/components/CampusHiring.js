import React from 'react';
import { 
  GraduationCap, 
  Building2, 
  Users, 
  CheckCircle,
  Briefcase,
  BookOpen,
  Award,
  LineChart
} from 'lucide-react';
import '../Style/CampusHiring.css';

const ProcessCard = ({ number, title, description }) => (
  <div className="process-card">
    <div className="process-number">{number}</div>
    <div className="process-content">
      <h3 className="process-title">{title}</h3>
      <p className="process-description">{description}</p>
    </div>
  </div>
);

const CampusHiring = () => {
  const programs = [
    {
      title: "University Partnerships",
      icon: Building2,
      description: "Strategic partnerships with top universities nationwide",
      features: [
        "Direct access to top academic talent",
        "Campus placement drives",
        "Industry-academia collaboration",
        "Technical workshops and seminars"
      ]
    },
    {
      title: "Internship Programs",
      icon: Briefcase,
      description: "Structured internship-to-hire programs",
      features: [
        "6-month intensive training",
        "Real project experience",
        "Mentorship programs",
        "Performance-based conversion"
      ]
    },
    {
      title: "Fresh Graduate Program",
      icon: GraduationCap,
      description: "Comprehensive assessment and training program",
      features: [
        "Technical skill assessment",
        "Soft skills development",
        "Industry-specific training",
        "Career path planning"
      ]
    }
  ];

  const stats = [
    {
      number: "50+",
      label: "Partner Universities",
      icon: Building2
    },
    {
      number: "1000+",
      label: "Students Placed Annually",
      icon: Users
    },
    {
      number: "85%",
      label: "Internship Conversion Rate",
      icon: LineChart
    },
    {
      number: "95%",
      label: "Client Satisfaction",
      icon: Award
    }
  ];

  return (
    <div className="campus-hiring">
      {/* Hero Section */}
      <div className="hero">
        <div className="hero-content">
          <GraduationCap className="hero-icon" />
          <h1 className="hero-title">Campus Hiring Solutions</h1>
          <p className="hero-description">
            Building the future workforce through strategic university partnerships and 
            comprehensive training programs.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="stats-container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <stat.icon className="stat-icon" />
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Programs Section */}
      <div className="programs-container">
        <h2 className="section-title">Our Programs</h2>
        <div className="programs-grid">
          {programs.map((program, index) => (
            <div key={index} className="program-card">
              <div className="card-header">
                <div className="header-content">
                  <program.icon className="program-icon" />
                  <h3 className="program-title">{program.title}</h3>
                </div>
              </div>
              <div className="card-content">
                <p className="program-description">{program.description}</p>
                <ul className="feature-list">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="feature-item">
                      <CheckCircle className="feature-icon" />
                      <span className="feature-text">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Process Section */}
      <div className="process-section">
        <div className="process-container">
          <h2 className="section-title">Our Hiring Process</h2>
          <div className="process-grid">
            <ProcessCard 
              number="1"
              title="Campus Connect"
              description="Partner with top universities and identify potential candidates"
            />
            <ProcessCard 
              number="2"
              title="Assessment"
              description="Comprehensive evaluation of technical and soft skills"
            />
            <ProcessCard 
              number="3"
              title="Training"
              description="Structured training program aligned with industry needs"
            />
            <ProcessCard 
              number="4"
              title="Placement"
              description="Strategic placement with leading organizations"
            />
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="cta-section">
        <div className="cta-container">
          <h2 className="cta-title">Ready to Build Your Future Workforce?</h2>
          <p className="cta-description">
            Connect with us to explore our campus hiring solutions and build a pipeline of fresh talent.
          </p>
          <button className="cta-button">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default CampusHiring;