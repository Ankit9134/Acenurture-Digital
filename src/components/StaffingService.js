// App.js
// import { useState } from 'react';
import { 
  Users, Clock, Target, Code, Briefcase, Building2, 
  CheckCircle,  
} from 'lucide-react';
import '../Style/Staffing.css';
const Card = ({ children, className = '' }) => (
    <div className={`card-st ${className}`} style={{
      backgroundColor: 'white',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
      transition: 'all 0.3s',
    }}>
      {children}
    </div>
  );
  
  const CardHeader = ({ children }) => (
    <div style={{ padding: '1.5rem 1.5rem 0' }}>
      {children}
    </div>
  );
  
  const CardTitle = ({ children }) => (
    <h3 style={{ 
      fontSize: '1.25rem',
      fontWeight: '600',
      color: '#1f2937'
    }}>
      {children}
    </h3>
  );
  
  const CardContent = ({ children }) => (
    <div style={{ padding: '1.5rem' ,textAlign: 'center'}}>
      {children}
    </div>
  );
const ServiceCard = ({ title, icon: Icon, description, features }) => (
  <Card className="service-card-st">
    <CardHeader>
      <div className="service-header-st">
        <Icon className="service-icon-st" />
        <CardTitle>{title}</CardTitle>
      </div>
    </CardHeader>
    <CardContent>
      <p className="service-description">{description}</p>
      {features && (
        <ul className="feature-list-st">
          {features.map((feature, index) => (
            <li key={index} className="feature-item-st">
              {feature}
            </li>
          ))}
        </ul>
      )}
    </CardContent>
  </Card>
);

// const TechStack = () => {
//   const technologies = [
//     "SAP", "Workday", "Oracle", "Microsoft", "Salesforce",
//     "Full Stack", "Backend", "Frontend", "Cloud"
//   ];
  
//   return (
//     <div className="tech-stack" id="tech-stack">
//       <div className="container-st">
//         <h2>Technology Expertise</h2>
//         <div className="tech-grid">
//           {technologies.map((tech, index) => (
//             <div key={index} className="tech-item">
//               <span>{tech}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

const WhyChooseUs = () => {
  const benefits = [
    {
      title: "Industry Expertise",
      description: "Years of experience across diverse industries"
    },
    {
      title: "Quality Talent Pool",
      description: "Pre-screened pool of highly qualified professionals"
    },
    {
      title: "Faster Placements",
      description: "Efficient recruitment process without compromising quality"
    },
    {
      title: "End-to-End Solutions",
      description: "Comprehensive service from sourcing to onboarding"
    }
  ];

  return (
    <div className="why-us" id="why-us">
      <div className="container-st">
        <h2>Why Choose AceNurture</h2>
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-item">
              <div className="benefit-icon">
                <CheckCircle />
              </div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


const StaffingService = () => {
  const services = [
    {
      title: "Permanent Staffing",
      icon: Users,
      description: "Full-time employees that fit seamlessly into your company culture.",
      features: [
        "Tailored Recruitment Process",
        "Industry-Specific Hiring",
        "Rigorous Candidate Screening"
      ]
    },
    {
      title: "Contract & Temporary",
      icon: Clock,
      description: "Flexible staffing solutions to adapt to changing business needs.",
      features: [
        "On-Demand Talent",
        "Speedy Placement",
        "Compliance & Payroll Management"
      ]
    },
    {
      title: "Executive Search",
      icon: Target,
      description: "Find the right C-suite executives and senior leaders.",
      features: [
        "Confidential, Targeted Search",
        "Strategic Market Insights",
        "Personalized Approach"
      ]
    },
    {
      title: "IT & Technology",
      icon: Code,
      description: "Specialized recruitment for technical roles and digital transformation.",
      features: [
        "Full Stack Development",
        "Cloud Integration",
        "SAP, Workday, Oracle Experts"
      ]
    },
    {
      title: "Project Staffing",
      icon: Briefcase,
      description: "Specialized professionals for short-term or long-term projects.",
      features: [
        "Scalable Workforce Solutions",
        "Industry-Specific Expertise",
        "Seamless Team Integration"
      ]
    },
    {
      title: "RPO Services",
      icon: Building2,
      description: "Comprehensive recruitment process outsourcing solutions.",
      features: [
        "End-to-End Recruitment",
        "Cost & Time Efficiency",
        "Employer Branding"
      ]
    }
  ];

  return (
    <section className="Staffing-section">
      <div className="services-st" id="services-st">
      <div className="services-header-st">
            <h2>Our Staffing Solutions</h2>
            <p>
              Connecting organizations with the best professionals for permanent, temporary, 
              or specialized project-based roles.
            </p>
          </div>
        <div className="container-st">
          
          <div className="services-grid-st">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </div>

      <WhyChooseUs />
      {/* <TechStack /> */}
    </section>
  );
};

export default StaffingService;