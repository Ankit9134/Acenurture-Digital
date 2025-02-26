import React from 'react';
import { Monitor, Settings, Users, Clock, Headphones } from 'lucide-react';
import '../Style/Choose.css'

const StaffingPartnerPage = () => {
  const features = [
    {
      title: "Expertise and Experience",
      description: "Benefit from our deep understanding of the IT industry and years of experience in talent acquisition.",
      icon: Monitor
    },
    {
      title: "Customized Solutions",
      description: "We tailor our staffing solutions to meet your specific needs, ensuring a perfect fit for your organization.",
      icon: Settings
    },
    {
      title: "Extensive Talent Network",
      description: "Access a vast pool of qualified IT professionals, both locally and globally.",
      icon: Users
    },
    {
      title: "Time and Cost Savings",
      description: "Streamline your hiring process and reduce recruitment costs with our efficient staffing services.",
      icon: Clock
    },
    {
      title: "Dedicated Support",
      description: "Receive personalized support and guidance throughout the staffing process from our dedicated team.",
      icon: Headphones
    }
  ];

  return (
    <div className="page-container">
      <div className="content-container">
        <header className="header">
          <h1 className="header-title">
            Why Choose AceNurture as Your Staffing Partner?
          </h1>
          <div className="header-underline" />
        </header>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className='card-c'
            >
              <div className="card-header">
                <div className="card-title-container">
                <feature.icon size={25} color="#3b82f6" />
                  <h2 className="card-title">{feature.title}</h2>
                </div>
              </div>
              <div className="card-content">
                <p className="card-text">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="footed">
          <p className="footed-text">
            At AceNurture Technologies, we provide best-in-class talent acquisition and staffing solutions, 
            ensuring businesses find the right professionals quickly and efficiently. On-Site & Remote 
            Staffing – We deploy skilled resources across Mumbai, Pune
          </p>
        </div>
      </div>
    </div>
  );
};

export default StaffingPartnerPage;