import React from 'react';
import { Code, Monitor, Heart, Phone, Anchor, Percent } from 'lucide-react';
import '../Style/Aboutus.css'

const AboutUs = () => {
  const sections = [
    {
      icon: <Code className="icon" />,
      title: "Our Core Values",
      description: "Guiding principles of innovation, customer-centricity, and transparent collaboration."
    },
    {
      icon: <Monitor className="icon" />,
      title: "Core Services",
      description: "Customized solutions to address the unique technical needs of Nordic SMBs"
    },
    {
      icon: <Heart className="icon" />,
      title: "Industry Expertise",
      description: "Strategic guidance to achieve sustainable growth and a competitive edge in the digital landscape."
    },
    {
      icon: <Phone className="icon" />,
      title: "Services Offered",
      description: "Collaborative partnerships for achieving strategic goals and promoting independence."
    },
    {
      icon: <Anchor className="icon" />,
      title: "Our Service Charges",
      description: "Acenurture's unique place in the market, equipping Nordic SMBs to thrive as digital leaders."
    },
    {
      icon: <Percent className="icon" />,
      title: "Contract Staffing Charges",
      description: "Delivering technical and cultural expertise for digital leadership in the Nordic region."
    }
  ];

  return (
    <div className="about-container">
      <div className="content-wrapper">
        <div className="header-section">
          <h1 className="header-title">About Us</h1>
          <div className="header-underline" />
        </div>

        <div className="cards-grid">
          {sections.map((section, index) => (
            <div key={index} className="card-A">
              <div className="card-header">
                <div className="card-header-content">
                  {section.icon}
                  <h3 className="card-title">{section.title}</h3>
                </div>
              </div>
              <div className="card-content">
                <p>{section.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="cta-section">
          <h2 className="cta-title">
            Ready to Transform Your Business?
          </h2>
          <p className="cta-description">
          Empowering Nordic businesses with innovative digital solutions ,
            Let's collaborate to achieve your digital transformation goals
          </p>
          {/* <button className="cta-button">
            Contact Us
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;