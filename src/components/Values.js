import React from 'react';
import '../Style/Values.css';
import innovation from '../Assets/innovation4.png';
import staffing from '../Assets/staffing.png';
import relationship from '../Assets/relationship.png'
import mentor from '../Assets/mentor.png'


const CoreValues = () => {
  const values = [
    {
      img: <img src={innovation} alt="IT Staffing Expertise" />, // Replace with the actual image path
      title: "Pioneering Innovation",
      description: "Turning challenges into opportunities through emerging technologies, and fostering a culture of continuous improvement and experimentation."
    },
    {
      img: <img src={staffing} alt="IT Staffing Expertise" />, // Replace with the actual image path
      title: "IT Staffing Expertise",
      description: "Scaling companies with top-tier IT staffing and recruitment, ensuring skilled talent aligns with both technical requirements and company culture for long-term success."
    },
    {
      img: <img src={relationship} alt="Customer-Centric Flexibility" />, // Replace with the actual image path
      title: "Customer-Centric Flexibility",
      description: "Delivering tailored solutions with a flexible, fixed-price approach, building long-term relationships based on trust and mutual success."
    },
    {
      img: <img src={mentor} alt="Mentorship Facility" />, // Replace with the actual image path
      title: "Mentorship Facility",
      description: "Fostering learning and development through mentorship, ensuring both personal and professional growth in a supportive environment."
    }
  ];

  return (
    <div className="core-values-container">
      <div className="content-wrapper-v">
        <h1 className="main-title">Our Core Values</h1>
        
        <div className="timeline-container">
          <div className="timeline-line" />
          
          <div className="timeline-items">
            {values.map((value, index) => (
              <div key={index} className="timeline-item">
               <div className="img-container">
                  {value.img}
                </div>
                
                <div className="content">
                  <h2 className="value-title">{value.title}</h2>
                  <p className="value-description">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreValues;