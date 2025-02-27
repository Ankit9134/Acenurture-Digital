import React from 'react';
import { 
  Palette, 
  Share2, 
  Globe, 
  DollarSign, 
  FileText, 
  Monitor, 
  Star, 
  Shield,
  Target, 
  Layers, 
  BarChart, 
  Package
} from 'lucide-react';
import '../Style/DigitalMarketing.css'

const MarketingServices = () => {
  const services = [
    {
      id: 1,
      icon: <Palette size={32} />,
      title: "Brand Strategy & Development",
      description: "Build a unique and powerful brand that speaks to your audience. Our strategy services cover brand identity, market positioning, and messaging.",
      cta: "Learn More"
    },
    {
      id: 2,
      icon: <Share2 size={32} />,
      title: "Social Media Marketing",
      description: "Engage with your audience and grow your presence on social media platforms like Facebook, Instagram, LinkedIn, and more.",
      cta: "Explore Social Media "
    },
    {
      id: 3,
      icon: <Globe size={32} />,
      title: "Search Engine Optimization (SEO)",
      description: "Increase your visibility with tailored SEO strategies designed to improve organic search rankings and drive quality traffic.",
      cta: "Boost Your Rankings"
    },
    {
      id: 4,
      icon: <DollarSign size={32} />,
      title: "Pay-Per-Click (PPC) Advertising",
      description: "Maximize ROI with expertly managed PPC campaigns on platforms like Google Ads and social media.",
      cta: "Start PPC Campaigns"
    },
    {
      id: 5,
      icon: <FileText size={32} />,
      title: "Content Marketing",
      description: "From blogs to videos and email campaigns, our content marketing attracts, engages, and converts your target audience.",
      cta: "Create Compelling Content"
    },
    {
      id: 6,
      icon: <Monitor size={32} />,
      title: "Website Development & Optimization",
      description: "Create a user-friendly, high-performing website that enhances your brand's digital presence and maximizes conversions.",
      cta: "Optimize Your Website"
    },
    {
      id: 7,
      icon: <Star size={32} />,
      title: "Influencer Marketing",
      description: "Leverage the influence of key individuals to build trust and increase visibility for your brand.",
      cta: "Partner with Influencers"
    },
    {
      id: 8,
      icon: <Shield size={32} />,
      title: "Online Reputation Management",
      description: "Protect and enhance your brand's reputation by managing reviews and feedback across online platforms.",
      cta: "Protect Your Brand"
    }
  ];

  const reasons = [
    {
      id: 1,
      icon: <Target size={32} />,
      title: "Tailored Strategies",
      description: "Every business is unique, and so is our approach to digital marketing."
    },
    {
      id: 2,
      icon: <Layers size={32} />,
      title: "Expertise Across Channels",
      description: "We have proven experience across SEO, PPC, social media, and content marketing."
    },
    {
      id: 3,
      icon: <BarChart size={32} />,
      title: "Data-Driven Approach",
      description: "We base our decisions on data and insights to continuously refine our strategies."
    },
    {
      id: 4,
      icon: <Package size={32} />,
      title: "End-to-End Solutions",
      description: "From strategy to execution, we provide a full range of digital marketing services."
    }
  ];
  return (
    <section>
      <div className="services-section">
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">Our Digital Marketing & Branding Solutions</h2>
            <p className="section-description">
              Comprehensive strategies to elevate your brand's digital presence, drive engagement, and boost conversions.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <div
                key={service.id}
                className="service-card"
              >
                <div className="service-icon">
                  {service.icon}
                </div>
                
                <h3 className="card-title">
                  {service.title}
                </h3>
                
                <p className="card-description">
                  {service.description}
                </p>
                
                <button className="cta-button-sc">
                  {service.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Partner With Us Section */}
      <div className="reasons-section">
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">Why Partner with Us?</h2>
            <p className="section-description reasons-description">
              At AceNurture, we're committed to your success. Here's what sets us apart from other digital marketing agencies.
            </p>
          </div>
          <div className="reasons-grid">
            {reasons.map((reason) => (
              <div 
                key={reason.id} 
                className="reason-card"
              >
                <div className="text-center">
                  <div className="reason-icon">
                    {reason.icon}
                  </div>
                </div>
                
                <h3 className="reason-title">
                  {reason.title}
                </h3>
                
                <p className="reason-description">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
          <div className="cta-section-sc">
            <h3 className="cta-title-sc">Ready to elevate your digital marketing strategy?</h3>
            <button className="main-cta-button">
              Schedule Your Free Consultation
            </button>
          </div>
        </div>
        </div>
        </section>
  );
};

export default MarketingServices;