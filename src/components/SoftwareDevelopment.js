import React from 'react';
import { Code, Smartphone, Box, MessageCircle, Cpu, BarChart2 } from 'lucide-react';
import '../Style/SoftwareDevelopment.css';

const ServiceShowcase = () => {
  const services = [
    {
      title: 'Web Application Development',
      icon: <Code className="service-icon" size={35}/>,
      description: 'Create powerful, scalable web applications',
      features: [
        'Custom Web Development',
        'Full-Stack Development',
        'E-Commerce Solutions',
        'Cloud-Based Applications'
      ]
    },
    {
      title: 'Mobile Application Development',
      icon: <Smartphone className="service-icon" size={35} />,
      description: 'Build engaging mobile experiences',
      features: [
        'Native App Development',
        'Cross-Platform App Development',
        'UI/UX Design',
        'App Maintenance & Support'
      ]
    },
    {
      title: 'Product Development',
      icon: <Box className="service-icon"size={35} />,
      description: 'Transform ideas into market-ready products',
      features: [
        'MVP Development',
        'Custom Software Solutions',
        'Enterprise Application Development',
        'API Development & Integration'
      ]
    },
    {
      title: 'Chatbot Development',
      icon: <MessageCircle className="service-icon"size={35} />,
      description: 'Automate customer interactions intelligently',
      features: [
        'AI-Powered Chatbots',
        'Customer Support Chatbots',
        'E-Commerce Chatbots',
        'Voice-Enabled Chatbots'
      ]
    },
    {
      title: 'AI & ML Development',
      icon: <Cpu className="service-icon" size={35}/>,
      description: 'Harness the power of artificial intelligence',
      features: [
        'Machine Learning Algorithms',
        'AI-based Predictive Analytics',
        'Natural Language Processing',
        'AI-Powered Automation'
      ]
    },
    {
      title: 'Data Science',
      icon: <BarChart2 className="service-icon" size={35}/>,
      description: 'Extract insights from your data',
      features: [
        'Data Visualization',
        'Data Mining & Exploration',
        'Predictive Modeling',
        'Big Data Solutions'
      ]
    }
  ];
  return (
    <section>
      <div className="services-offered">
        <div className="showcase-container">
          <div className="showcase-header">
            <h1 className="showcase-title">Our Services</h1>
            <p className="showcase-subtitle">
              Delivering cutting-edge software solutions for your business needs
            </p>
          </div>

          <div className="services-grid-SO">
            {services.map((service, index) => (
              <div
                key={index}
                className="service-card-SO"
              >
                <div className="service-card-front">
                  <div className="service-icon-wrapper">
                    {service.icon}
                  </div>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                </div>
                <div className="service-card-details">
                  <ul className="feature-list-SO">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="feature-item-SO">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="why-choose-section">
            <h2 className="why-choose-title">Why Choose AceNurture?</h2>
            <ul className="why-choose-list">
              <li className="why-choose-item">Expert Developers - Skilled professionals with experience in modern technologies.</li>
              <li className="why-choose-item">Agile Methodology - Fast, flexible, and efficient development process.</li>
              <li className="why-choose-item">User-Centric Approach - Focusing on intuitive design and seamless experience.</li>
              <li className="why-choose-item">End-to-End Solutions - From planning and development to deployment and support.</li>
            </ul>
            {/* <div className="cta-container">
              <a href="mailto:contact@acenurture.com" className="cta-button">
                Contact Us Today
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceShowcase;