import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLaptop, faBuildingColumns, faFlask, faSuitcaseMedical, faOilCan, faBuilding } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import '../Style/Industry.css';

const industries = [
  {
    title: 'Information Technology',
    description: 'Our cutting-edge IT solutions enable organizations to harness the full potential of digital transformation.',
    icon: <FontAwesomeIcon icon={faLaptop} size="2x" />
  },
  {
    title: 'Banking, Finance & Insurance',
    description: 'Our digital solutions optimize operations, enhance risk management, and improve customer engagement.',
    icon: <FontAwesomeIcon icon={faBuildingColumns} size="2x" />
  },
  {
    title: 'Pharmaceutical & Chemical',
    description: 'For the pharmaceutical and chemical industries, we provide innovative digital tools that streamline R&D.',
    icon: <FontAwesomeIcon icon={faFlask} size="2x" />
  },
  {
    title: 'Healthcare',
    description: 'AceNurture supports healthcare providers with advanced digital solutions that enhance patient care.',
    icon: <FontAwesomeIcon icon={faSuitcaseMedical} size="2x" />
  },
  {
    title: 'Oil & Gas',
    description: 'Our specialized solutions focus on optimizing operational efficiency, asset management, and safety protocols.',
    icon: <FontAwesomeIcon icon={faOilCan} size="2x" />
  },
  {
    title: 'Real Estate',
    description: 'The real estate sector benefits from our digital marketing, analytics, and property management solutions.',
    icon: <FontAwesomeIcon icon={faBuilding} size="2x" />
  }
];

const Industry = () => {
  return (
    <section id="industry" className="industry-section">
      <div className="industry-header">
        <h1>Industries</h1>
        <p>Connect with top talent across industries and transform businesses with innovative solutions in staffing, technology, and professional development.</p>
      </div>
      <div className="industry-grid">
        {industries.map((industry, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="industry-card"
          >
            <div className="industry-card-content">
              {industry.icon}
              <h2>{industry.title}</h2>
              <p>{industry.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Industry;
