import React, { useState } from 'react';
import '../Style/LearningDevelopment.css';
import { Bot, MessageSquare, Cloud, Monitor, Target, Wrench, Users, Clock, Code, Shield, Database, LineChart,  Zap, Server, Globe } from 'lucide-react';

const TrainingCards = () => {
  const trainingPrograms = [
    {
        id: 1,
        title: "Generative AI Training",
        icon: <Bot size={35} />,
        description: "Master the latest Generative AI tools to automate content creation, optimize workflows, and unlock new possibilities in creativity.",
        ctaText: "Start Generative AI Training",
        skills: [
          "Understand and utilize AI-driven tools for content creation.",
          "Apply AI to automate repetitive tasks and streamline workflows.",
          "Learn how to integrate AI into business processes for better efficiency."
        ]
      },
      {
        id: 2,
        title: "Prompt Engineering & ChatGPT Support",
        icon: <MessageSquare size={35} />,
        description: "Learn how to craft effective prompts and customize ChatGPT for a range of business applications like customer service, content creation, and more.",
        ctaText: "Learn ChatGPT Support",
        skills: [
          "Master techniques to design precise, effective prompts for ChatGPT and other AI models.",
          "Learn how to optimize AI responses for better quality and accuracy.",
          "Troubleshoot common issues and fine-tune AI interactions for maximum impact."
        ]
      },
      {
        id: 3,
        title: "Cloud Computing Training (AI + SAP)",
        icon: <Cloud size={35} />,
        description: "Harness the power of Cloud Computing with training on AI-powered tools, SAP integration, and cloud infrastructure to drive business growth.",
        ctaText: "Get Cloud & AI Training",
        skills: [
          "Build and manage scalable, efficient cloud infrastructures.",
          "Integrate AI solutions with cloud-based platforms like AWS, Azure, and GCP.",
          "Learn to implement SAP solutions on the cloud for real-time data processing."
        ]
      },
      {
        id: 4,
        title: "SAP Solutions",
        icon: <Monitor size={35} />,
        description: "Gain expertise in SAP S/4HANA, SAP FICO, and SAP SuccessFactors to streamline business processes and enhance financial management.",
        ctaText: "Master SAP Solutions",
        skills: [
          "Gain hands-on experience with SAP S/4HANA and its applications in real-time data analysis and ERP.",
          "Master SAP FICO for effective financial management and controlling.",
          "Learn SAP SuccessFactors for human resources management and optimization."
        ]
      },
      {
        id: 5,
        title: "Full-Stack Development",
        icon: <Code size={35} />,
        description: "Become proficient in both front-end and back-end development with training in modern frameworks, databases, and deployment techniques.",
        ctaText: "Start Developer Training",
        skills: [
          "Build responsive, interactive user interfaces using React, Angular, or Vue.js.",
          "Develop robust server-side applications with Node.js, Python, or Java.",
          "Implement database design and management using SQL and NoSQL solutions."
        ]
      },
      {
        id: 6,
        title: "Cybersecurity & Compliance",
        icon: <Shield size={35} />,
        description: "Learn essential cybersecurity practices to protect your organization's data, systems, and reputation in an increasingly digital world.",
        ctaText: "Enhance Security Skills",
        skills: [
          "Implement effective security protocols and incident response strategies.",
          "Master compliance requirements like GDPR, HIPAA, and ISO 27001.",
          "Conduct vulnerability assessments and penetration testing to identify security gaps."
        ]
      },
      {
        id: 7,
        title: "Data Science & Analytics",
        icon: <Database size={35} />,
        description: "Transform raw data into actionable insights with comprehensive training in data analytics, visualization, and predictive modeling.",
        ctaText: "Master Data Analytics",
        skills: [
          "Apply statistical methods and machine learning algorithms to analyze complex datasets.",
          "Create compelling data visualizations to communicate insights effectively.",
          "Develop predictive models to forecast trends and support strategic decision-making."
        ]
      },
      {
        id: 8,
        title: "Digital Marketing & AI",
        icon: <LineChart size={35} />,
        description: "Leverage AI-powered marketing tools to optimize campaigns, personalize customer experiences, and maximize ROI across digital channels.",
        ctaText: "Boost Marketing Skills",
        skills: [
          "Implement AI-driven marketing automation for campaign optimization.",
          "Use data analytics to measure marketing performance and customer behavior.",
          "Create personalized content strategies using AI content generation tools."
        ]
      },
      {
        id: 9,
        title: "Leadership in the AI Era",
        icon: <Users size={35} />,
        description: "Prepare leaders to navigate the challenges and opportunities of AI transformation while fostering innovation and ethical implementation.",
        ctaText: "Develop AI Leadership",
        skills: [
          "Lead digital transformation initiatives with confidence and strategic vision.",
          "Make data-driven decisions while understanding AI capabilities and limitations.",
          "Address ethical considerations and manage change during technological adoption."
        ]
      },
      {
        id: 10,
        title: "Agile & DevOps Methodologies",
        icon: <Zap size={35} />,
        description: "Streamline development and operations with training in Agile frameworks, CI/CD pipelines, and collaborative DevOps practices.",
        ctaText: "Learn Agile & DevOps",
        skills: [
          "Implement Scrum, Kanban, and other Agile methodologies to increase project success.",
          "Build automated CI/CD pipelines for faster, more reliable software delivery.",
          "Foster collaboration between development and operations teams for seamless integration."
        ]
      },
      {
        id: 11,
        title: "Enterprise Resource Planning",
        icon: <Server size={35} />,
        description: "Optimize business operations with comprehensive ERP training that integrates with AI technologies for enhanced efficiency and insights.",
        ctaText: "Optimize with ERP",
        skills: [
          "Implement and customize ERP systems to streamline core business processes.",
          "Integrate AI capabilities with ERP for predictive analytics and automation.",
          "Leverage ERP data for real-time reporting and strategic decision-making."
        ]
      },
      {
        id: 12,
        title: "Digital Transformation Strategy",
        icon: <Globe size={35} />,
        description: "Develop a comprehensive digital transformation roadmap that leverages emerging technologies to drive innovation and competitive advantage.",
        ctaText: "Transform Your Business",
        skills: [
          "Assess organizational readiness and develop tailored digital transformation strategies.",
          "Identify high-impact technology investments that align with business objectives.",
          "Manage change and foster a culture of innovation during digital transformation."
        ]
      }
  ];

  const [expandedCard, setExpandedCard] = useState(null);

  const toggleCard = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <div className="training-container">
      <h2 className="section-title">Transformative Training Programs for the Future of Technology</h2>
      <div className="training-cards-grid">
        {trainingPrograms.map((program) => (
          <div 
            key={program.id} 
            className={`training-card ${expandedCard === program.id ? 'expanded' : ''}`}
            onClick={() => toggleCard(program.id)}
          >
            <div className="card-content-l">
              <div className="card-icon-l">{program.icon}</div>
              <h3 className="card-title-l">{program.title}</h3>
              <p className="card-description-l">{program.description}</p>
              {expandedCard === program.id && (
                <div className="card-skills-l">
                  <h4>What You'll Learn:</h4>
                  <ul>
                    {program.skills.map((skill, index) => (
                      <li key={index}>{skill}</li>
                    ))}
                  </ul>
                </div>
              )}
              <button className="cta-button-l">{program.ctaText}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Main App Component
function LearningDevelopment() {
  return (
    <div className="app">
      <section className="intro-section-l">
        <h2>Why Choose AceNurture for Learning & Development?</h2>
        <p>
          At AceNurture, we believe in nurturing talent by providing practical, hands-on training that aligns with 
          the latest industry trends. Our specialized training programs are designed to empower professionals with 
          in-demand skills in AI technologies, Cloud Computing, and SAP Solutions. Whether you're looking to enhance 
          your team's expertise or onboard new skills, we've got the right program for you.
        </p>
        <div className="service-icons-l">
          <div className="service-icon-l">
            <Bot size={24} />
            <p>AI – Enhance Creativity and Efficiency</p>
          </div>
          <div className="service-icon-l">
            <Cloud size={24} />
            <p>Cloud – Scalable Solutions for Growth</p>
          </div>
          <div className="service-icon-l">
            <Monitor size={24} />
            <p>SAP – Streamline Business Processes</p>
          </div>
        </div>
      </section>

      {/* Training Cards Section */}
      <TrainingCards />

      {/* Why Choose Us Section */}
      <section className="why-choose-section-l">
        <h2>Why AceNurture is the Right Partner for Your Training Needs</h2>
        <div className="benefits-grid-l">
          <div className="benefit-card-l">
            <Target size={24} />
            <h3>Tailored to Your Business Needs</h3>
            <p>Our programs are customized to align with your company's unique goals and industry requirements.</p>
          </div>
          <div className="benefit-card-l">
            <Wrench size={24} />
            <h3>Hands-On, Real-World Training</h3>
            <p>Learn by doing—gain practical skills that can be immediately applied in the workplace.</p>
          </div>
          <div className="benefit-card-l">
            <Users size={24} />
            <h3>Expert Trainers</h3>
            <p>Our experienced trainers bring real-world expertise and deep knowledge in AI, Cloud, and SAP technologies.</p>
          </div>
          <div className="benefit-card-l">
            <Clock size={24} />
            <h3>Flexible Learning Options</h3>
            <p>We offer both in-person and online training to fit your team's schedule and learning preferences.</p>
          </div>
        </div>
      </section>
      <div className="cta-section-l">
          <h2 className="cta-title-l">
            Ready to Transform Your Business?
          </h2>
          <p className="cta-description-l">
            Let's collaborate to achieve your digital transformation goals
          </p>
          </div>
    </div>
  );
}

export default LearningDevelopment;